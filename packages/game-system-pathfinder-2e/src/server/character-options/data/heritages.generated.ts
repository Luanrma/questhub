// @ts-nocheck
import type { Pathfinder2eHeritageEntry } from '../models'

export const PATHFINDER_2E_HERITAGES: Pathfinder2eHeritageEntry[] = [
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:abyssal-merfolk",
    "kind": "heritage",
    "slug": "abyssal-merfolk",
    "name": "Abyssal Merfolk",
    "description": {
      "sourceHtml": "<p>You live far, far below the surface of the ocean. Your fish tail might resemble a viperfish or anglerfish, and you might have luminous eyes or translucent skin. Abyssal merfolk have an uncanny reputation, but they can exist in even the most lightless realms. You gain darkvision and are immune to the crushing pressure of the oceanic depths.</p>",
      "plainText": "You live far, far below the surface of the ocean. Your fish tail might resemble a viperfish or anglerfish, and you might have luminous eyes or translucent skin. Abyssal merfolk have an uncanny reputation, but they can exist in even the most lightless realms. You gain darkvision and are immune to the crushing pressure of the oceanic depths."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "6egx1zhQx2s6BEa1",
      "sourcePath": "pf2e-master/packs/heritages/merfolk/abyssal-merfolk.json",
      "slug": "abyssal-merfolk",
      "image": "icons/magic/water/water-elemental-blue-teeth.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Merfolk",
      "slug": "merfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.FUqZRllwn6kmFA8K",
      "sourceId": "FUqZRllwn6kmFA8K"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:adaptive-anadi",
    "kind": "heritage",
    "slug": "adaptive-anadi",
    "name": "Adaptive Anadi",
    "description": {
      "sourceHtml": "<p>You descend from a line of anadi who worked to perfect their transformation magic, allowing them to integrate into a wider variety of cultures. Choose a common, Medium humanoid ancestry. Your human form is replaced with a form that matches this choice. You also gain the @UUID[Compendium.pf2e.feats-srd.Item.Adopted Ancestry] feat for your chosen humanoid ancestry.</p>",
      "plainText": "You descend from a line of anadi who worked to perfect their transformation magic, allowing them to integrate into a wider variety of cultures. Choose a common, Medium humanoid ancestry. Your human form is replaced with a form that matches this choice. You also gain the feat for your chosen humanoid ancestry."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Adopted Ancestry"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "7gGcpQMqnZhBDZLI",
      "sourcePath": "pf2e-master/packs/heritages/anadi/adaptive-anadi.json",
      "slug": "adaptive-anadi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Anadi",
      "slug": "anadi",
      "uuid": "Compendium.pf2e.ancestries.Item.TQEqWqc7BYiadUdY",
      "sourceId": "TQEqWqc7BYiadUdY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:aiuvarin",
    "kind": "heritage",
    "slug": "aiuvarin",
    "name": "Aiuvarin",
    "description": {
      "sourceHtml": "<p>You have elves, or possibly other aiuvarins, in your family tree. You have pointed ears and other telltale signs of elf heritage. You gain the elf trait, the aiuvarin trait, and low-light vision. In addition, when you gain an ancestry feat, you can choose from aiuvarin and elf feats in addition to those from your ancestry.</p>",
      "plainText": "You have elves, or possibly other aiuvarins, in your family tree. You have pointed ears and other telltale signs of elf heritage. You gain the elf trait, the aiuvarin trait, and low-light vision. In addition, when you gain an ancestry feat, you can choose from aiuvarin and elf feats in addition to those from your ancestry."
    },
    "rarity": "common",
    "traits": [
      "aiuvarin"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      },
      {
        "key": "ActorTraits",
        "data": {
          "add": [
            "elf"
          ],
          "key": "ActorTraits"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.details.ancestry.versatile",
          "value": "elf"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "system.details.ancestry.countsAs",
          "value": "elf"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "system.details.ancestry.countsAs",
          "value": "aiuvarin"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "N36ZR4lh9eCazDaN",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/aiuvarin.json",
      "slug": "aiuvarin",
      "image": "systems/pf2e/icons/features/ancestry/half-elf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ancient-ash",
    "kind": "heritage",
    "slug": "ancient-ash",
    "name": "Ancient Ash",
    "description": {
      "sourceHtml": "<p>Your memory is sharp and clear, and you remember so much. You remember the calm before the storm and the soil after the rain, the acrid tang of magic and the whisper of a song. You remember it all. You become trained in one skill of your choice. At 5th level, you become an expert in that skill.</p>",
      "plainText": "Your memory is sharp and clear, and you remember so much. You remember the calm before the storm and the soil after the rain, the acrid tang of magic and the whisper of a song. You remember it all. You become trained in one skill of your choice. At 5th level, you become an expert in that skill."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "choices": {
            "config": "skills"
          },
          "flag": "skill",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.Skill"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
          "value": "ternary(gte(@actor.level,5),2,1)"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "CMf0qluB0LXWReew",
      "sourcePath": "pf2e-master/packs/heritages/ghoran/ancient-ash.json",
      "slug": "ancient-ash",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ghoran",
      "slug": "ghoran",
      "uuid": "Compendium.pf2e.ancestries.Item.tSurOqRcfumadTfr",
      "sourceId": "tSurOqRcfumadTfr"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ancient-elf",
    "kind": "heritage",
    "slug": "ancient-elf",
    "name": "Ancient Elf",
    "description": {
      "sourceHtml": "<p>In your long life, you've dabbled in many paths and many styles. A typical ancient elf is at least 100 years old, though you might be younger at the GM's discretion. Choose a class other than your own. You gain the multiclass dedication feat for that class, even though you don't meet its level prerequisite. You must still meet its other prerequisites to gain the feat.</p>",
      "plainText": "In your long life, you've dabbled in many paths and many styles. A typical ancient elf is at least 100 years old, though you might be younger at the GM's discretion. Choose a class other than your own. You gain the multiclass dedication feat for that class, even though you don't meet its level prerequisite. You must still meet its other prerequisites to gain the feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "choices": {
            "filter": [
              "item:category:class",
              "item:trait:dedication",
              "item:trait:multiclass"
            ],
            "itemType": "feat"
          },
          "flag": "ancientElf",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.AncientElf.Prompt"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "{item|flags.pf2e.rulesSelections.ancientElf}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Nd9hdX8rdYyRozw8",
      "sourcePath": "pf2e-master/packs/heritages/elf/ancient-elf.json",
      "slug": "ancient-elf",
      "image": "systems/pf2e/icons/features/ancestry/ancient-elf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Elf",
      "slug": "elf",
      "uuid": "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
      "sourceId": "PgKmsA2aKdbLU6O0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ancient-scale-azarketi",
    "kind": "heritage",
    "slug": "ancient-scale-azarketi",
    "name": "Ancient Scale Azarketi",
    "description": {
      "sourceHtml": "<p>Your lineage stems from azarketis who remain dedicated to their deep-sea roots. Divorced from land society, you're a foreigner to any world above a thousand fathoms deep. You gain darkvision.</p>\n<p>Your body is dotted with phosphorescent spots that emit a guiding light and help you communicate. The spots - located primarily on your face, arms, and hands - illuminate a 10-foot radius around you with dim light. You can activate, deactivate, or change the arrangement of lights as an action, which has the concentration trait.</p>",
      "plainText": "Your lineage stems from azarketis who remain dedicated to their deep-sea roots. Divorced from land society, you're a foreigner to any world above a thousand fathoms deep. You gain darkvision. Your body is dotted with phosphorescent spots that emit a guiding light and help you communicate. The spots - located primarily on your face, arms, and hands - illuminate a 10-foot radius around you with dim light. You can activate, deactivate, or change the arrangement of lights as an action, which has the concentration trait."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "darkvision"
        }
      },
      {
        "key": "RollOption",
        "data": {
          "domain": "all",
          "key": "RollOption",
          "label": "PF2E.SpecificRule.Azarketi.PhosphorescentSpots",
          "option": "phosphorescent-spots",
          "toggleable": true,
          "value": true
        }
      },
      {
        "key": "TokenLight",
        "data": {
          "key": "TokenLight",
          "predicate": [
            "phosphorescent-spots"
          ],
          "value": {
            "alpha": 0.3,
            "animation": {
              "intensity": 4,
              "speed": 1,
              "type": "torch"
            },
            "attenuation": 0.35,
            "bright": 0,
            "color": "#b5dedd",
            "dim": 10,
            "luminosity": 0.4,
            "shadows": 0.2
          }
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "zPhArF36ZVgLeVUU",
      "sourcePath": "pf2e-master/packs/heritages/azarketi/ancient-scale-azarketi.json",
      "slug": "ancient-scale-azarketi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Absalom, City of Lost Omens",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Azarketi",
      "slug": "azarketi",
      "uuid": "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
      "sourceId": "yFoojz6q3ZjvceFw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ancient-blooded-dwarf",
    "kind": "heritage",
    "slug": "ancient-blooded-dwarf",
    "name": "Ancient-Blooded Dwarf",
    "description": {
      "sourceHtml": "<p>Dwarven heroes of old could shrug off their enemies' magic, and some of that resistance manifests in you. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Call on Ancient Blood] reaction.</p>",
      "plainText": "Dwarven heroes of old could shrug off their enemies' magic, and some of that resistance manifests in you. You gain the reaction."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Call on Ancient Blood"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "yL6944LrPo2HNdEJ",
      "sourcePath": "pf2e-master/packs/heritages/dwarf/ancient-blooded-dwarf.json",
      "slug": "ancient-blooded-dwarf",
      "image": "systems/pf2e/icons/features/ancestry/ancient-blooded-dwarf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Dwarf",
      "slug": "dwarf",
      "uuid": "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
      "sourceId": "BYj5ZvlXZdpaEgA6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ant-kholo",
    "kind": "heritage",
    "slug": "ant-kholo",
    "name": "Ant Kholo",
    "description": {
      "sourceHtml": "<p>You're a sharp-featured, big-eared kholo about 3 feet tall. Many are skeptical that you are in fact a kholo. Your size is Small instead of Medium. You are trained in Deception (or another skill if you were already trained in Deception). You gain a +1 circumstance bonus to Deception checks to Lie when specifically claiming innocence, to Deception DCs against @UUID[Compendium.pf2e.actionspf2e.Item.Sense Motive] checks to uncover such lies, and to initiative checks when you roll Deception for initiative.</p>",
      "plainText": "You're a sharp-featured, big-eared kholo about 3 feet tall. Many are skeptical that you are in fact a kholo. Your size is Small instead of Medium. You are trained in Deception (or another skill if you were already trained in Deception). You gain a +1 circumstance bonus to Deception checks to Lie when specifically claiming innocence, to Deception DCs against checks to uncover such lies, and to initiative checks when you roll Deception for initiative."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "deception"
          ],
          "selector": "initiative",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:lie"
          ],
          "selector": "deception",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "small"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.deception.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "udMXXjFirjARYr4p",
      "sourcePath": "pf2e-master/packs/heritages/kholo/ant-kholo.json",
      "slug": "ant-kholo",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kholo",
      "slug": "kholo",
      "uuid": "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
      "sourceId": "vxbQ1Yw4qwgjTzqo"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:anvil-dwarf",
    "kind": "heritage",
    "slug": "anvil-dwarf",
    "name": "Anvil Dwarf",
    "description": {
      "sourceHtml": "<p>You are a descendant of a famed crafter and have your own amazing talent. Other dwarves might consider this a blessing from your ancestors or from the Forgefather himself, depending on where you grew up. You become trained in Crafting (or another skill if you were already trained in Crafting) and gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat, but you can pick two different specialties instead of one.</p>",
      "plainText": "You are a descendant of a famed crafter and have your own amazing talent. Other dwarves might consider this a blessing from your ancestors or from the Forgefather himself, depending on where you grew up. You become trained in Crafting (or another skill if you were already trained in Crafting) and gain the skill feat, but you can pick two different specialties instead of one."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.crafting.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Specialty Crafting"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Specialty Crafting"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "kRDsVbhdBVeSlpBa",
      "sourcePath": "pf2e-master/packs/heritages/dwarf/anvil-dwarf.json",
      "slug": "anvil-dwarf",
      "image": "systems/pf2e/icons/features/ancestry/anvil-dwarf.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Character Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Dwarf",
      "slug": "dwarf",
      "uuid": "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
      "sourceId": "BYj5ZvlXZdpaEgA6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:arctic-elf",
    "kind": "heritage",
    "slug": "arctic-elf",
    "name": "Arctic Elf",
    "description": {
      "sourceHtml": "<p>You dwell deep in the frozen north and have gained incredible resilience against cold environments, granting you cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
      "plainText": "You dwell deep in the frozen north and have gained incredible resilience against cold environments, granting you cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "1dYDucCIaZpCJqBc",
      "sourcePath": "pf2e-master/packs/heritages/elf/arctic-elf.json",
      "slug": "arctic-elf",
      "image": "systems/pf2e/icons/features/ancestry/artic-elf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Elf",
      "slug": "elf",
      "uuid": "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
      "sourceId": "PgKmsA2aKdbLU6O0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ardande",
    "kind": "heritage",
    "slug": "ardande",
    "name": "Ardande",
    "description": {
      "sourceHtml": "<p>You descend from wood elementals or have some other heritage influenced by the elemental Plane of Wood. You might have green, mossy skin, vines that grow from your head instead of hair, or thin appendages that resemble twigs. You gain the ardande trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision.</p>\n<p>You can choose from ardande feats, geniekin feats, and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "You descend from wood elementals or have some other heritage influenced by the elemental Plane of Wood. You might have green, mossy skin, vines that grow from your head instead of hair, or thin appendages that resemble twigs. You gain the ardande trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from ardande feats, geniekin feats, and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "ardande"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      },
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "predicate": [
            "self:low-light-vision:from-ancestry"
          ],
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "jAX7yavR4lNKwDK8",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/ardande.json",
      "slug": "ardande",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Rage of Elements",
        "license": "OGL",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:artisan-android",
    "kind": "heritage",
    "slug": "artisan-android",
    "name": "Artisan Android",
    "description": {
      "sourceHtml": "<p>Your body was originally designed to create works of art, complex tools, or maintain advanced machinery. You become trained in Crafting (or another skill if you're already trained in Crafting), and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Specialty Crafting] skill feat in a specialty of your choice.</p>",
      "plainText": "Your body was originally designed to create works of art, complex tools, or maintain advanced machinery. You become trained in Crafting (or another skill if you're already trained in Crafting), and you gain the skill feat in a specialty of your choice."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.crafting.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Specialty Crafting"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "VgL18yU7pysdoZZG",
      "sourcePath": "pf2e-master/packs/heritages/android/artisan-android.json",
      "slug": "artisan-android",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Android",
      "slug": "android",
      "uuid": "Compendium.pf2e.ancestries.Item.GfLwE884NoRC7cRi",
      "sourceId": "GfLwE884NoRC7cRi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ascetic-tanuki",
    "kind": "heritage",
    "slug": "ascetic-tanuki",
    "name": "Ascetic Tanuki",
    "description": {
      "sourceHtml": "<p>It's said your round form is the result of calmness and restraint, not indulgence. You gain scent as an imprecise sense with a range of 30 feet. The GM will usually double the range if you're downwind from something you're trying to smell or halve the range if you're upwind. In addition, you gain a +2 circumstance bonus to Perception checks whenever you're trying to locate food, drink, or a consumable item that's ingested (such as a potion or elixir) using your scent.</p>",
      "plainText": "It's said your round form is the result of calmness and restraint, not indulgence. You gain scent as an imprecise sense with a range of 30 feet. The GM will usually double the range if you're downwind from something you're trying to smell or halve the range if you're upwind. In addition, you gain a +2 circumstance bonus to Perception checks whenever you're trying to locate food, drink, or a consumable item that's ingested (such as a potion or elixir) using your scent."
    },
    "rarity": "common",
    "traits": [
      "tanuki"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "acuity": "imprecise",
          "key": "Sense",
          "range": 30,
          "selector": "scent"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "locate-food-or-drink"
          ],
          "selector": "perception",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "L6FwEsrOK3Xno7qM",
      "sourcePath": "pf2e-master/packs/heritages/tanuki/ascetic-tanuki.json",
      "slug": "ascetic-tanuki",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tanuki",
      "slug": "tanuki",
      "uuid": "Compendium.pf2e.ancestries.Item.pILFsoGsUQkVF5dZ",
      "sourceId": "pILFsoGsUQkVF5dZ"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:athamasi",
    "kind": "heritage",
    "slug": "athamasi",
    "name": "Athamasi",
    "description": {
      "sourceHtml": "<p>You have a set of small secondary arms adapted for climbing and hanging from trees. You can't hold or retrieve objects with these limbs, but you can Climb or @UUID[Compendium.pf2e.actionspf2e.Item.Grab an Edge] even if one or both of your primary hands are full. You aren't @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard] while Climbing.</p>",
      "plainText": "You have a set of small secondary arms adapted for climbing and hanging from trees. You can't hold or retrieve objects with these limbs, but you can Climb or even if one or both of your primary hands are full. You aren't while Climbing."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "CnCFZfuKzAYqy61e",
      "sourcePath": "pf2e-master/packs/heritages/kashrishi/athamasi.json",
      "slug": "athamasi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kashrishi",
      "slug": "kashrishi",
      "uuid": "Compendium.pf2e.ancestries.Item.dw2K1AJR9mQ25nDP",
      "sourceId": "dw2K1AJR9mQ25nDP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:badlands-orc",
    "kind": "heritage",
    "slug": "badlands-orc",
    "name": "Badlands Orc",
    "description": {
      "sourceHtml": "<p>You come from sun-scorched badlands, where long legs and an ability to withstand the elements helped you thrive. You can @UUID[Compendium.pf2e.actionspf2e.Item.Hustle] twice as long while exploring before you have to stop, and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).</p>",
      "plainText": "You come from sun-scorched badlands, where long legs and an ability to withstand the elements helped you thrive. You can twice as long while exploring before you have to stop, and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "8Gsa8KFsHizEwSHU",
      "sourcePath": "pf2e-master/packs/heritages/orc/badlands-orc.json",
      "slug": "badlands-orc",
      "image": "systems/pf2e/icons/features/ancestry/badlands-orc.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Orc",
      "slug": "orc",
      "uuid": "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
      "sourceId": "lSGWXjcbOa6O5fTx"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:bakuwa-lizardfolk",
    "kind": "heritage",
    "slug": "bakuwa-lizardfolk",
    "name": "Bakuwa Lizardfolk",
    "description": {
      "sourceHtml": "<p>Your body is covered in bony plates. Your plates are medium armor in the plate armor group that grant a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of +3, and have the aquadynamic and comfort traits. You can never wear other armor or remove your plates. You can etch armor runes onto your plates.</p>",
      "plainText": "Your body is covered in bony plates. Your plates are medium armor in the plate armor group that grant a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of +3, and have the aquadynamic and comfort traits. You can never wear other armor or remove your plates. You can etch armor runes onto your plates."
    },
    "rarity": "uncommon",
    "traits": [
      "lizardfolk"
    ],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.equipment-srd.Item.Bakuwa Lizardfolk Bony Plates"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "OIW3UYrdaWLwUZCh",
      "sourcePath": "pf2e-master/packs/heritages/lizardfolk/bakuwa-lizardfolk.json",
      "slug": "bakuwa-lizardfolk",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Lizardfolk",
      "slug": "lizardfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
      "sourceId": "HWEgF7Gmoq55VhTL"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:bandaagee-vanara",
    "kind": "heritage",
    "slug": "bandaagee-vanara",
    "name": "Bandaagee Vanara",
    "description": {
      "sourceHtml": "<p>Your family is one of many who claims to be descended from the regal vanara peacekeeping family called the Bandaagee. Bandaagee are the most common kind of vanaras. You're very familiar with the trappings of civilization and move easily through the most crowded communities. You ignore difficult terrain from crowds.</p>",
      "plainText": "Your family is one of many who claims to be descended from the regal vanara peacekeeping family called the Bandaagee. Bandaagee are the most common kind of vanaras. You're very familiar with the trappings of civilization and move easily through the most crowded communities. You ignore difficult terrain from crowds."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ClshvrjvBTMm3INX",
      "sourcePath": "pf2e-master/packs/heritages/vanara/bandaagee-vanara.json",
      "slug": "bandaagee-vanara",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Vanara",
      "slug": "vanara",
      "uuid": "Compendium.pf2e.ancestries.Item.cLtOGIkuSSa4UDHY",
      "sourceId": "cLtOGIkuSSa4UDHY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:battle-ready-orc",
    "kind": "heritage",
    "slug": "battle-ready-orc",
    "name": "Battle-Ready Orc",
    "description": {
      "sourceHtml": "<p>You descend from a line of terrifying battlefield commanders. You become trained in Intimidation, and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat.</p>",
      "plainText": "You descend from a line of terrifying battlefield commanders. You become trained in Intimidation, and you gain the skill feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Intimidating Glare"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.intimidation.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "nXQxlmjH24Eb8h2Q",
      "sourcePath": "pf2e-master/packs/heritages/orc/battle-ready-orc.json",
      "slug": "battle-ready-orc",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Orc",
      "slug": "orc",
      "uuid": "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
      "sourceId": "lSGWXjcbOa6O5fTx"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:battle-trained-human-bb",
    "kind": "heritage",
    "slug": "battle-trained-human-bb",
    "name": "Battle-Trained Human (BB)",
    "description": {
      "sourceHtml": "<p>Your family has trained in battle for generations, granting you advantages in a fight. You are trained in all martial weapons..</p>\n<p>In addition, you gain the @UUID[Compendium.pf2e.feats-srd.Item.Diehard] feat.</p>\n<p><em>Note: This heritage is from the Beginner Box and features non-standard heritage features</em></p>",
      "plainText": "Your family has trained in battle for generations, granting you advantages in a fight. You are trained in all martial weapons.. In addition, you gain the feat. Note: This heritage is from the Beginner Box and features non-standard heritage features"
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Diehard"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.proficiencies.attacks.martial.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "d7NC4C19AgkspQQg",
      "sourcePath": "pf2e-master/packs/heritages/human/battle-trained-human-bb.json",
      "slug": "battle-trained-human-bb",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Beginner Box",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Human",
      "slug": "human",
      "uuid": "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
      "sourceId": "IiG7DgeLWYrSNXuX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:beastkin",
    "kind": "heritage",
    "slug": "beastkin",
    "name": "Beastkin",
    "description": {
      "sourceHtml": "<p>The blood of a beast flows through your veins, granting you the ferocity and might of animals. Only creatures with the humanoid trait can take the beastkin versatile heritage. Choose a type of animal such as bat, eagle, shark, spider, tyrannosaurus, wasp, or wolf. This is the type of animal tied to your heritage and is known as your inherent animal. A beastkin's hybrid form is their natural shape. You gain the beast and beastkin traits, in addition to the traits from your ancestry.</p>\n<p>You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Change Shape] ability. You can choose from beastkin feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "The blood of a beast flows through your veins, granting you the ferocity and might of animals. Only creatures with the humanoid trait can take the beastkin versatile heritage. Choose a type of animal such as bat, eagle, shark, spider, tyrannosaurus, wasp, or wolf. This is the type of animal tied to your heritage and is known as your inherent animal. A beastkin's hybrid form is their natural shape. You gain the beast and beastkin traits, in addition to the traits from your ancestry. You gain the ability. You can choose from beastkin feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "rare",
    "traits": [
      "beastkin"
    ],
    "rules": [
      {
        "key": "ActorTraits",
        "data": {
          "add": [
            "beast"
          ],
          "key": "ActorTraits"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "allowDuplicate": false,
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Change Shape"
        }
      },
      {
        "key": "RollOption",
        "data": {
          "alwaysActive": true,
          "key": "RollOption",
          "label": "PF2E.NPCAbility.ChangeShape.Label",
          "mergeable": true,
          "option": "change-shape",
          "suboptions": [
            {
              "label": "PF2E.NPCAbility.ChangeShape.Form.Hybrid",
              "value": "hybrid"
            }
          ],
          "toggleable": true
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "action",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:change-shape"
          ],
          "priority": 160,
          "property": "description",
          "value": [
            {
              "text": "PF2E.SpecificRule.ChangeShape.Beastkin"
            }
          ]
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "action",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:change-shape"
          ],
          "property": "traits",
          "value": "primal"
        }
      },
      {
        "key": "Strike",
        "data": {
          "baseType": "jaws",
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "piercing",
              "dice": 1,
              "die": "d4"
            }
          },
          "group": "brawling",
          "img": "icons/creatures/abilities/mouth-teeth-long-red.webp",
          "key": "Strike",
          "label": "PF2E.Weapon.Base.jaws",
          "predicate": [
            "change-shape:hybrid"
          ],
          "slug": "beastkin-jaws",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "GAn2cdhBE9Bqa85s",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/beastkin.json",
      "slug": "beastkin",
      "image": "systems/pf2e/icons/features/ancestry/beastkin.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:benthic-azarketi",
    "kind": "heritage",
    "slug": "benthic-azarketi",
    "name": "Benthic Azarketi",
    "description": {
      "sourceHtml": "<p>Your heritage traces to azarketis living deep beneath the sea, and you can handle the chilling depths more easily than most. You gain resistance to cold equal to half your level, and you don't treat environmental cold as one degree more severe when you are wet. You adapt to pressure changes from being deep underwater automatically without ill effect.</p>",
      "plainText": "Your heritage traces to azarketis living deep beneath the sea, and you can handle the chilling depths more easily than most. You gain resistance to cold equal to half your level, and you don't treat environmental cold as one degree more severe when you are wet. You adapt to pressure changes from being deep underwater automatically without ill effect."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "floor(@actor.level/2)"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "HFHSh2RWuxa4GhhQ",
      "sourcePath": "pf2e-master/packs/heritages/azarketi/benthic-azarketi.json",
      "slug": "benthic-azarketi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Absalom, City of Lost Omens",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Azarketi",
      "slug": "azarketi",
      "uuid": "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
      "sourceId": "yFoojz6q3ZjvceFw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:bloodhound-shoony",
    "kind": "heritage",
    "slug": "bloodhound-shoony",
    "name": "Bloodhound Shoony",
    "description": {
      "sourceHtml": "<p>Your ancestors were famous trackers, and you carry in your blood that same gift of the hunt.</p>\n<p>You gain a special sense: imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine the location of a creature, but it remains @UUID[Compendium.pf2e.conditionitems.Item.Hidden].</p>\n<p>In addition, you gain a +2 circumstance bonus to Survival checks to @UUID[Compendium.pf2e.actionspf2e.Item.Track] creatures that you have previously sensed with your scent.</p>",
      "plainText": "Your ancestors were famous trackers, and you carry in your blood that same gift of the hunt. You gain a special sense: imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine the location of a creature, but it remains . In addition, you gain a +2 circumstance bonus to Survival checks to creatures that you have previously sensed with your scent."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "Bloodhound Shoony (Track smelled creatures)",
          "predicate": [
            "action:track",
            "target:previously-smelled"
          ],
          "selector": "survival",
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "Sense",
        "data": {
          "acuity": "imprecise",
          "key": "Sense",
          "range": 30,
          "selector": "scent"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "z4cvqtpkkAYoFpHa",
      "sourcePath": "pf2e-master/packs/heritages/shoony/bloodhound-shoony.json",
      "slug": "bloodhound-shoony",
      "image": "systems/pf2e/icons/features/ancestry/bloodhound-shoony.webp",
      "publication": {
        "title": "Pathfinder #153: Life's Long Shadows",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Shoony",
      "slug": "shoony",
      "uuid": "Compendium.pf2e.ancestries.Item.q6rsqYARyOGXZA8F",
      "sourceId": "q6rsqYARyOGXZA8F"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:born-of-animal",
    "kind": "heritage",
    "slug": "born-of-animal",
    "name": "Born of Animal",
    "description": {
      "sourceHtml": "<p>You were a simple animal until the sun enlightened you.</p><ul><li><strong>Humanoid Form</strong> Animals can sense the power of your presence. You gain a +1 circumstance bonus to Intimidation checks against animals and beasts and don't take a penalty for attempting to Intimidate animals or beasts you don't share a language with.</li><li><strong>Yaoguai Form</strong> You can dash like an animal. If you have both hands free, you can increase your Speed to 30 feet as you run on all fours.</li></ul>",
      "plainText": "You were a simple animal until the sun enlightened you. Humanoid Form Animals can sense the power of your presence. You gain a +1 circumstance bonus to Intimidation checks against animals and beasts and don't take a penalty for attempting to Intimidate animals or beasts you don't share a language with.Yaoguai Form You can dash like an animal. If you have both hands free, you can increase your Speed to 30 feet as you run on all fours."
    },
    "rarity": "common",
    "traits": [
      "yaoguai"
    ],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "change-shape:humanoid",
            {
              "or": [
                "target:trait:animal",
                "target:trait:beast"
              ]
            }
          ],
          "selector": "intimidation",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "RollOption",
        "data": {
          "key": "RollOption",
          "label": "PF2E.SpecificRule.Automaton.HunterAutomaton.ToggleLabel",
          "option": "on-all-fours",
          "predicate": [
            "change-shape:yaoguai"
          ],
          "priority": 70,
          "toggleable": true
        }
      },
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "predicate": [
            "on-all-fours"
          ],
          "selector": "land",
          "value": 30
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "buGlGWcCrdNxfCr4",
      "sourcePath": "pf2e-master/packs/heritages/yaoguai/born-of-animal.json",
      "slug": "born-of-animal",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaoguai",
      "slug": "yaoguai",
      "uuid": "Compendium.pf2e.ancestries.Item.dnk0Rf7AUmyR5b8z",
      "sourceId": "dnk0Rf7AUmyR5b8z"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:born-of-celestial",
    "kind": "heritage",
    "slug": "born-of-celestial",
    "name": "Born of Celestial",
    "description": {
      "sourceHtml": "<p>You were once a powerful celestial before an escape or great punishment left you trapped in a mortal shell, with only vague memories and limited power. Due to your residual divine power, the tradition of any spells or magical abilities you gain from a yaoguai heritage or ancestry feat is divine instead of its normal tradition (usually occult).</p><ul><li><strong>Humanoid Form</strong> Fragments of divine memory still litter your mind. You gain a +1 circumstance bonus to Religion checks.</li><li><strong>Yaoguai Form</strong> Celestial power flows through you. Choose one cantrip from the divine spell list. You can cast this spell as an innate divine cantrip at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</li></ul>",
      "plainText": "You were once a powerful celestial before an escape or great punishment left you trapped in a mortal shell, with only vague memories and limited power. Due to your residual divine power, the tradition of any spells or magical abilities you gain from a yaoguai heritage or ancestry feat is divine instead of its normal tradition (usually occult). Humanoid Form Fragments of divine memory still litter your mind. You gain a +1 circumstance bonus to Religion checks.Yaoguai Form Celestial power flows through you. Choose one cantrip from the divine spell list. You can cast this spell as an innate divine cantrip at will. A cantrip is heightened to a spell rank equal to half your level rounded up."
    },
    "rarity": "common",
    "traits": [
      "yaoguai"
    ],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "change-shape:humanoid"
          ],
          "selector": "religion",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Iaq8C3bbC9EzZhBJ",
      "sourcePath": "pf2e-master/packs/heritages/yaoguai/born-of-celestial.json",
      "slug": "born-of-celestial",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaoguai",
      "slug": "yaoguai",
      "uuid": "Compendium.pf2e.ancestries.Item.dnk0Rf7AUmyR5b8z",
      "sourceId": "dnk0Rf7AUmyR5b8z"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:born-of-elements",
    "kind": "heritage",
    "slug": "born-of-elements",
    "name": "Born of Elements",
    "description": {
      "sourceHtml": "<p>You were an aspect of nature—the rain, the wind, a ray of light—until the wild essences gave you a soul. Due to your natural connection, the tradition of any spells or magical abilities you gain from a yaoguai heritage or ancestry feat is primal instead of its normal tradition (usually occult).</p><ul><li><strong>Humanoid Form</strong> You remain attuned to the natural world. You gain a +1 circumstance bonus to Survival checks to @UUID[Compendium.pf2e.actionspf2e.Item.Sense Direction], and you don't take a penalty if you don't have a compass.</li><li><strong>Yaoguai Form</strong> The power of nature flows through you, ready to lash out. Choose @UUID[Compendium.pf2e.spells-srd.Item.Electric Arc], @UUID[Compendium.pf2e.spells-srd.Item.Frostbite], @UUID[Compendium.pf2e.spells-srd.Item.Ignition], @UUID[Compendium.pf2e.spells-srd.Item.Needle Darts], @UUID[Compendium.pf2e.spells-srd.Item.Timber], @UUID[Compendium.pf2e.spells-srd.Item.Scatter Scree], @UUID[Compendium.pf2e.spells-srd.Item.Slashing Gust], or @UUID[Compendium.pf2e.spells-srd.Item.Spout]. You can cast this spell as an innate primal cantrip at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</li></ul>",
      "plainText": "You were an aspect of nature—the rain, the wind, a ray of light—until the wild essences gave you a soul. Due to your natural connection, the tradition of any spells or magical abilities you gain from a yaoguai heritage or ancestry feat is primal instead of its normal tradition (usually occult). Humanoid Form You remain attuned to the natural world. You gain a +1 circumstance bonus to Survival checks to , and you don't take a penalty if you don't have a compass.Yaoguai Form The power of nature flows through you, ready to lash out. Choose , , , , , , , or . You can cast this spell as an innate primal cantrip at will. A cantrip is heightened to a spell rank equal to half your level rounded up."
    },
    "rarity": "common",
    "traits": [
      "yaoguai"
    ],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "adjustName": false,
          "choices": {
            "filter": [
              {
                "or": [
                  "item:slug:electric-arc",
                  "item:slug:frostbite",
                  "item:slug:ignition",
                  "item:slug:needle-darts",
                  "item:slug:timber",
                  "item:slug:scatter-scree",
                  "item:slug:slashing-gust",
                  "item:slug:spout"
                ]
              }
            ],
            "itemType": "spell",
            "slugsAsValues": true
          },
          "flag": "cantrip",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.Cantrip",
          "rollOption": "born-of-elements"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:{item|flags.pf2e.rulesSelections.cantrip}",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:{item|flags.pf2e.rulesSelections.cantrip}",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:yaoguai"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:sense-direction",
            "change-shape:humanoid"
          ],
          "selector": "survival",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "RollOption",
        "data": {
          "domain": "skill-check",
          "key": "RollOption",
          "option": "compass-in-possession"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "RXn2y7QVHVB0XHr8",
      "sourcePath": "pf2e-master/packs/heritages/yaoguai/born-of-elements.json",
      "slug": "born-of-elements",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaoguai",
      "slug": "yaoguai",
      "uuid": "Compendium.pf2e.ancestries.Item.dnk0Rf7AUmyR5b8z",
      "sourceId": "dnk0Rf7AUmyR5b8z"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:born-of-item",
    "kind": "heritage",
    "slug": "born-of-item",
    "name": "Born of Item",
    "description": {
      "sourceHtml": "<p>You were an object until the moon breathed life into you. Choose one Lore skill related to what kind of tool you were; for instance, Cooking Lore for a cleaver or Farming Lore for a rake. You become trained in this skill.</p><ul><li><strong>Humanoid Form</strong> You retain memories of the tasks you performed as an object. You gain a +1 circumstance bonus to the Lore skill you obtained through this heritage.</li><li><strong>Yaoguai Form</strong> Your time as a mindless object makes it harder to affect you mentally. If you roll a success on a mental effect, you gain a critical success instead.</li></ul>",
      "plainText": "You were an object until the moon breathed life into you. Choose one Lore skill related to what kind of tool you were; for instance, Cooking Lore for a cleaver or Farming Lore for a rake. You become trained in this skill. Humanoid Form You retain memories of the tasks you performed as an object. You gain a +1 circumstance bonus to the Lore skill you obtained through this heritage.Yaoguai Form Your time as a mindless object makes it harder to affect you mentally. If you roll a success on a mental effect, you gain a critical success instead."
    },
    "rarity": "common",
    "traits": [
      "yaoguai"
    ],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "item:trait:mental",
            "change-shape:yaoguai"
          ],
          "selector": "saving-throw"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "kHvlHDq5hs2JDG0Y",
      "sourcePath": "pf2e-master/packs/heritages/yaoguai/born-of-item.json",
      "slug": "born-of-item",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaoguai",
      "slug": "yaoguai",
      "uuid": "Compendium.pf2e.ancestries.Item.dnk0Rf7AUmyR5b8z",
      "sourceId": "dnk0Rf7AUmyR5b8z"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:born-of-vegetation",
    "kind": "heritage",
    "slug": "born-of-vegetation",
    "name": "Born of Vegetation",
    "description": {
      "sourceHtml": "<p>You were a plant or fungi until the rain gifted you a mind. You gain your choice of the plant or fungus trait.</p><ul><li><strong>Humanoid Form</strong> With fresh vegetation, you can better aid those in need. You gain a +1 circumstance bonus to Medicine checks to @UUID[Compendium.pf2e.actionspf2e.Item.Administer First Aid].</li><li><strong>Yaoguai Form</strong> When anyone uses the Medicine skill to @UUID[Compendium.pf2e.actionspf2e.Item.Treat Wounds]{Treat your Wounds}, add your level to the Hit Points you regain from that treatment. Additionally, the creature attempting the check gains a +1 circumstance bonus if you have the plant trait and are in bright light, or the fungus trait and are in darkness.</li></ul>",
      "plainText": "You were a plant or fungi until the rain gifted you a mind. You gain your choice of the plant or fungus trait. Humanoid Form With fresh vegetation, you can better aid those in need. You gain a +1 circumstance bonus to Medicine checks to .Yaoguai Form When anyone uses the Medicine skill to Treat your Wounds, add your level to the Hit Points you regain from that treatment. Additionally, the creature attempting the check gains a +1 circumstance bonus if you have the plant trait and are in bright light, or the fungus trait and are in darkness."
    },
    "rarity": "common",
    "traits": [
      "yaoguai"
    ],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "choices": [
            {
              "label": "PF2E.TraitFungus",
              "value": "fungus"
            },
            {
              "label": "PF2E.TraitPlant",
              "value": "plant"
            }
          ],
          "flag": "trait",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.Trait"
        }
      },
      {
        "key": "ActorTraits",
        "data": {
          "add": [
            "{item|flags.pf2e.rulesSelections.trait}"
          ],
          "key": "ActorTraits"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:administer-first-aid",
            "change-shape:humanoid"
          ],
          "selector": "medicine",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:treat-wounds",
            "change-shape:yaoguai",
            "check:statistic:medicine"
          ],
          "selector": "healing-received",
          "value": "@actor.level"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "y87jU1yU8Plz4Yhq",
      "sourcePath": "pf2e-master/packs/heritages/yaoguai/born-of-vegetation.json",
      "slug": "born-of-vegetation",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaoguai",
      "slug": "yaoguai",
      "uuid": "Compendium.pf2e.ancestries.Item.dnk0Rf7AUmyR5b8z",
      "sourceId": "dnk0Rf7AUmyR5b8z"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:breaker-surki",
    "kind": "heritage",
    "slug": "breaker-surki",
    "name": "Breaker Surki",
    "description": {
      "sourceHtml": "<p>Your claws are especially hard and can break through earth and predators alike. You gain a claw unarmed attack that deals 1d4 slashing damage. Your claws are in the brawling group and have the agile, finesse, unarmed, and versatile B traits.</p>\n<ul>\n<li><strong>Evolution</strong> Your wrist nodes project magic into a durable digging wedge. You can spend an Interact action to increase your claw unarmed attack's damage to 1d6; grant it the magical, razing, and versatile force traits; and remove the agile trait. You can spend another action to deactivate the wedge and return your claw to its normal statistics.</li>\n<li><strong>Evolution</strong> Your ankle nodes can emit grounding claw spikes of magic to hold you in place. If any effect would force you to move 10 feet or more, you can choose to move only half the distance. The extra traction from your claw spikes allows you to Climb with one hand occupied (or with both hands occupied if you have the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] feat). You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Trench Digging] reaction.</li>\n</ul>",
      "plainText": "Your claws are especially hard and can break through earth and predators alike. You gain a claw unarmed attack that deals 1d4 slashing damage. Your claws are in the brawling group and have the agile, finesse, unarmed, and versatile B traits. Evolution Your wrist nodes project magic into a durable digging wedge. You can spend an Interact action to increase your claw unarmed attack's damage to 1d6; grant it the magical, razing, and versatile force traits; and remove the agile trait. You can spend another action to deactivate the wedge and return your claw to its normal statistics. Evolution Your ankle nodes can emit grounding claw spikes of magic to hold you in place. If any effect would force you to move 10 feet or more, you can choose to move only half the distance. The extra traction from your claw spikes allows you to Climb with one hand occupied (or with both hands occupied if you have the feat). You gain the reaction."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "flags.pf2e.surki.evolutions",
          "value": {
            "label": "PF2E.SpecificRule.Surki.Evolutions.DiggingWedge",
            "predicate": [
              {
                "not": "evolution:digging-wedge"
              }
            ],
            "value": "digging-wedge"
          }
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "flags.pf2e.surki.evolutions",
          "value": {
            "label": "PF2E.SpecificRule.Surki.Evolutions.GroundingClawSpikes",
            "predicate": [
              {
                "not": "evolution:claw-spikes"
              }
            ],
            "value": "claw-spikes"
          }
        }
      },
      {
        "key": "Strike",
        "data": {
          "damage": {
            "base": {
              "damageType": "slashing",
              "dice": 1,
              "die": "d4"
            }
          },
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Claw",
          "slug": "claw",
          "traits": [
            "agile",
            "finesse",
            "unarmed",
            "versatile-b"
          ]
        }
      },
      {
        "key": "RollOption",
        "data": {
          "domain": "all",
          "key": "RollOption",
          "label": "PF2E.SpecificRule.Surki.BreakerSurki.DiggingWedgeLabel",
          "option": "digging-wedge-active",
          "predicate": [
            "evolution:digging-wedge"
          ],
          "toggleable": true
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "weapon",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:claw",
            "digging-wedge-active"
          ],
          "property": "traits",
          "value": "magical"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "weapon",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:claw",
            "digging-wedge-active"
          ],
          "property": "traits",
          "value": "razing"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "weapon",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:claw",
            "digging-wedge-active"
          ],
          "property": "traits",
          "value": "versatile-force"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "weapon",
          "key": "ItemAlteration",
          "mode": "remove",
          "predicate": [
            "item:slug:claw",
            "digging-wedge-active"
          ],
          "property": "traits",
          "value": "agile"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "allowDuplicate": false,
          "key": "GrantItem",
          "predicate": [
            "evolution:claw-spikes"
          ],
          "reevaluateOnUpdate": true,
          "uuid": "Compendium.pf2e.actionspf2e.Item.Trench Digging"
        }
      },
      {
        "key": "DamageDice",
        "data": {
          "key": "DamageDice",
          "override": {
            "upgrade": true
          },
          "predicate": [
            "digging-wedge-active"
          ],
          "selector": "claw-damage"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "BDBzVaZx3GfZXs5b",
      "sourcePath": "pf2e-master/packs/heritages/surki/breaker-surki.json",
      "slug": "breaker-surki",
      "image": "icons/commodities/claws/talon-blue.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Surki",
      "slug": "surki",
      "uuid": "Compendium.pf2e.ancestries.Item.ALOmLePjbc37ca3Y",
      "sourceId": "ALOmLePjbc37ca3Y"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:bright-fetchling",
    "kind": "heritage",
    "slug": "bright-fetchling",
    "name": "Bright Fetchling",
    "description": {
      "sourceHtml": "<p>Your body proves that shadow can't exist without light. Perhaps your eyes glow brighter or your veins occasionally pulse with light. You emit dim light within 5 feet of you. You can activate or suppress this ability as an action, which has the concentrate trait. Additionally, you can force fragments of your shadow to glow and cast @UUID[Compendium.pf2e.spells-srd.Item.Light] as an occult innate cantrip. Cantrips are heightened to a spell rank equal to half your level rounded up.</p>",
      "plainText": "Your body proves that shadow can't exist without light. Perhaps your eyes glow brighter or your veins occasionally pulse with light. You emit dim light within 5 feet of you. You can activate or suppress this ability as an action, which has the concentrate trait. Additionally, you can force fragments of your shadow to glow and cast as an occult innate cantrip. Cantrips are heightened to a spell rank equal to half your level rounded up."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "TokenLight",
        "data": {
          "key": "TokenLight",
          "predicate": [
            "bright-fetchling"
          ],
          "value": {
            "color": "#c4abab",
            "dim": 5,
            "shadows": 0.2
          }
        }
      },
      {
        "key": "RollOption",
        "data": {
          "domain": "all",
          "key": "RollOption",
          "option": "bright-fetchling",
          "toggleable": true
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:light",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:light",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:fetchling"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "wHO5luJMODbDLXNi",
      "sourcePath": "pf2e-master/packs/heritages/fetchling/bright-fetchling.json",
      "slug": "bright-fetchling",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fetchling",
      "slug": "fetchling",
      "uuid": "Compendium.pf2e.ancestries.Item.hIA3qiUsxvLZXrFP",
      "sourceId": "hIA3qiUsxvLZXrFP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:budding-speaker-centaur",
    "kind": "heritage",
    "slug": "budding-speaker-centaur",
    "name": "Budding Speaker Centaur",
    "description": {
      "sourceHtml": "<p>You were born with a spark of magic that could set you on the path to becoming a Greenspeaker or Faithspeaker. Select divine or primal. If you selected divine, you're a Faithspeaker. If you selected primal, you're a Greenspeaker. This choice can't be changed. You gain one cantrip from the chosen spell list. You can cast this spell as an innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>",
      "plainText": "You were born with a spark of magic that could set you on the path to becoming a Greenspeaker or Faithspeaker. Select divine or primal. If you selected divine, you're a Faithspeaker. If you selected primal, you're a Greenspeaker. This choice can't be changed. You gain one cantrip from the chosen spell list. You can cast this spell as an innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "choices": [
            {
              "label": "PF2E.TraitDivine",
              "value": "faithspeaker"
            },
            {
              "label": "PF2E.TraitPrimal",
              "value": "greenspeaker"
            }
          ],
          "key": "ChoiceSet",
          "rollOption": "centaur-speaker"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "1FmcZqnmDm8H0DRB",
      "sourcePath": "pf2e-master/packs/heritages/centaur/budding-speaker-centaur.json",
      "slug": "budding-speaker-centaur",
      "image": "icons/magic/nature/symbol-moon-stars-white.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Centaur",
      "slug": "centaur",
      "uuid": "Compendium.pf2e.ancestries.Item.pJkQlFTvpQ5GjZ5e",
      "sourceId": "pJkQlFTvpQ5GjZ5e"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:cactus-leshy",
    "kind": "heritage",
    "slug": "cactus-leshy",
    "name": "Cactus Leshy",
    "description": {
      "sourceHtml": "<p>Spines cover your body. You gain a spine unarmed attack that deals 1d6 piercing damage. Your spines are in the brawling group and have the finesse and unarmed traits.</p>",
      "plainText": "Spines cover your body. You gain a spine unarmed attack that deals 1d6 piercing damage. Your spines are in the brawling group and have the finesse and unarmed traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "piercing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "systems/pf2e/icons/unarmed-attacks/spine.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Spine",
          "range": null,
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "2cii5ZkBsJ4DYdd2",
      "sourcePath": "pf2e-master/packs/heritages/leshy/cactus-leshy.json",
      "slug": "cactus-leshy",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:carcharodon-merfolk",
    "kind": "heritage",
    "slug": "carcharodon-merfolk",
    "name": "Carcharodon Merfolk",
    "description": {
      "sourceHtml": "<p>As a fearsome shark merfolk, your lower body is similar to that of one of the apex predators of the ocean. Like a shark, you can smell blood from quite a distance. You gain scent as an imprecise sense with a range of 30 feet. However, you can smell spilled blood at a range of 120 feet in the air and 500 feet in the water.</p>",
      "plainText": "As a fearsome shark merfolk, your lower body is similar to that of one of the apex predators of the ocean. Like a shark, you can smell blood from quite a distance. You gain scent as an imprecise sense with a range of 30 feet. However, you can smell spilled blood at a range of 120 feet in the air and 500 feet in the water."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "acuity": "imprecise",
          "key": "Sense",
          "selector": "scent",
          "value": 30
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "DNynADD4xhwTAiE5",
      "sourcePath": "pf2e-master/packs/heritages/merfolk/carcharodon-merfolk.json",
      "slug": "carcharodon-merfolk",
      "image": "icons/skills/wounds/blood-spurt-spray-red.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Merfolk",
      "slug": "merfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.FUqZRllwn6kmFA8K",
      "sourceId": "FUqZRllwn6kmFA8K"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:cataphract-fleshwarp",
    "kind": "heritage",
    "slug": "cataphract-fleshwarp",
    "name": "Cataphract Fleshwarp",
    "description": {
      "sourceHtml": "<p>Your battle-hardened skeleton is laced with additional cartilage and muscle to help bear armor across vast areas of operation, and your skin is bedecked with tiny spurs of pliable, resilient keratin to optimize the grip and weight distribution of your armor. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Armor Proficiency] feat.</p>\n<p>If your class makes you trained in all types of armor, you instead become trained in Athletics (or a skill of your choice if you're already trained in Athletics) and gain the @UUID[Compendium.pf2e.feats-srd.Item.Armor Assist] skill feat.</p>",
      "plainText": "Your battle-hardened skeleton is laced with additional cartilage and muscle to help bear armor across vast areas of operation, and your skin is bedecked with tiny spurs of pliable, resilient keratin to optimize the grip and weight distribution of your armor. You gain the feat. If your class makes you trained in all types of armor, you instead become trained in Athletics (or a skill of your choice if you're already trained in Athletics) and gain the skill feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Armor Proficiency"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "PQuJEYI0UFl8W7fH",
      "sourcePath": "pf2e-master/packs/heritages/fleshwarp/cataphract-fleshwarp.json",
      "slug": "cataphract-fleshwarp",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fleshwarp",
      "slug": "fleshwarp",
      "uuid": "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
      "sourceId": "FXlXmNBFiiz9oasi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:cave-kholo",
    "kind": "heritage",
    "slug": "cave-kholo",
    "name": "Cave Kholo",
    "description": {
      "sourceHtml": "<p>Storytellers spin ancient tales claiming that kholo lived in caves and underground before most of your kind ventured into the light. You're a throwback to these ancients, with a broad chest and markings that resemble short black slashes instead of spots. Your eyes are developed to see perfectly in the dark, a valuable advantage to your clan. You gain darkvision.</p>",
      "plainText": "Storytellers spin ancient tales claiming that kholo lived in caves and underground before most of your kind ventured into the light. You're a throwback to these ancients, with a broad chest and markings that resemble short black slashes instead of spots. Your eyes are developed to see perfectly in the dark, a valuable advantage to your clan. You gain darkvision."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "JW45oQRHaqthjmIx",
      "sourcePath": "pf2e-master/packs/heritages/kholo/cave-kholo.json",
      "slug": "cave-kholo",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kholo",
      "slug": "kholo",
      "uuid": "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
      "sourceId": "vxbQ1Yw4qwgjTzqo"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:caveclimber-kobold",
    "kind": "heritage",
    "slug": "caveclimber-kobold",
    "name": "Caveclimber Kobold",
    "description": {
      "sourceHtml": "<p>You live in a vertically-oriented home, and you're a consummate climber. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] skill feat, even if you don't meet the prerequisites. You can use your clawed feet and tail to Climb, leaving your hands free. Additionally, if you succeed at an Athletics check to Climb, you critically succeed instead.</p>",
      "plainText": "You live in a vertically-oriented home, and you're a consummate climber. You gain the skill feat, even if you don't meet the prerequisites. You can use your clawed feet and tail to Climb, leaving your hands free. Additionally, if you succeed at an Athletics check to Climb, you critically succeed instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Combat Climber"
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:climb"
          ],
          "selector": "athletics"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "predicate": [
            "action:climb"
          ],
          "selector": "athletics",
          "text": "When you roll a success to Climb, you get a critical success instead.",
          "title": "{item|name}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "5A1wMPdzN1OWE4cY",
      "sourcePath": "pf2e-master/packs/heritages/kobold/caveclimber-kobold.json",
      "slug": "caveclimber-kobold",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kobold",
      "slug": "kobold",
      "uuid": "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
      "sourceId": "7oQxL6wgsokD3QXG"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:cavern-elf",
    "kind": "heritage",
    "slug": "cavern-elf",
    "name": "Cavern Elf",
    "description": {
      "sourceHtml": "<p>You were born or spent many years in underground tunnels or caverns where light is scarce. You gain darkvision.</p>",
      "plainText": "You were born or spent many years in underground tunnels or caverns where light is scarce. You gain darkvision."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "NfIAGatB1KIzt8G7",
      "sourcePath": "pf2e-master/packs/heritages/elf/cavern-elf.json",
      "slug": "cavern-elf",
      "image": "systems/pf2e/icons/features/ancestry/caveren-elf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Elf",
      "slug": "elf",
      "uuid": "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
      "sourceId": "PgKmsA2aKdbLU6O0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:cavernstalker-kobold",
    "kind": "heritage",
    "slug": "cavernstalker-kobold",
    "name": "Cavernstalker Kobold",
    "description": {
      "sourceHtml": "<p>You hatched in a warren with narrow tunnels that was also home to a being of primal earth energy, which has made you limber and flexible. When @UUID[Compendium.pf2e.actionspf2e.Item.Climb]{Climbing} rock walls, stalactites, and other natural stone features, you move at half your Speed on a success and at full Speed on a critical success (and you move at full Speed on a success if you have @UUID[Compendium.pf2e.feats-srd.Item.Quick Climb]). This doesn't affect you if you're using a climb Speed. If you roll a success on an Acrobatics check to @UUID[Compendium.pf2e.actionspf2e.Item.Squeeze], you get a critical success instead.</p>",
      "plainText": "You hatched in a warren with narrow tunnels that was also home to a being of primal earth energy, which has made you limber and flexible. When Climbing rock walls, stalactites, and other natural stone features, you move at half your Speed on a success and at full Speed on a critical success (and you move at full Speed on a success if you have ). This doesn't affect you if you're using a climb Speed. If you roll a success on an Acrobatics check to , you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "predicate": [
            "action:climb",
            "natural-stone"
          ],
          "selector": "athletics",
          "text": "When you climb natural stone, you move at half your Speed on a success, and full speed on a critical success.",
          "title": "{item|name}"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "predicate": [
            "action:squeeze"
          ],
          "selector": "acrobatics",
          "text": "When you roll a success to Squeeze, you get a critical success instead.",
          "title": "{item|name}"
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:squeeze"
          ],
          "selector": "acrobatics",
          "type": "skill"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "35k2aujXYvqUCSS1",
      "sourcePath": "pf2e-master/packs/heritages/kobold/cavernstalker-kobold.json",
      "slug": "cavernstalker-kobold",
      "image": "systems/pf2e/icons/features/ancestry/cavern-kobold.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kobold",
      "slug": "kobold",
      "uuid": "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
      "sourceId": "7oQxL6wgsokD3QXG"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:celestial-envoy-kitsune",
    "kind": "heritage",
    "slug": "celestial-envoy-kitsune",
    "name": "Celestial Envoy Kitsune",
    "description": {
      "sourceHtml": "<p>Whether due to Daikitsu's grace or faithful forebears, you have a strong connection to the divine, affording you certain protections. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Invoke Celestial Privilege] reaction. Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form.</p>",
      "plainText": "Whether due to Daikitsu's grace or faithful forebears, you have a strong connection to the divine, affording you certain protections. You gain the reaction. Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Invoke Celestial Privilege"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "IFg2tqmAFFnU8UNU",
      "sourcePath": "pf2e-master/packs/heritages/kitsune/celestial-envoy-kitsune.json",
      "slug": "celestial-envoy-kitsune",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kitsune",
      "slug": "kitsune",
      "uuid": "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
      "sourceId": "4BL5wf1VF9feC2rY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:chameleon-gnome",
    "kind": "heritage",
    "slug": "chameleon-gnome",
    "name": "Chameleon Gnome",
    "description": {
      "sourceHtml": "<p>The color of your hair and skin is mutable, possibly due to latent magic from First World influences or lingering illusion effects. You can slowly change the vibrancy and the exact color, and the coloration can be different across your body, allowing you to create patterns or other colorful designs. It takes a single action for minor localized shifts and up to an hour for dramatic shifts throughout your body. While you're asleep, the colors shift on their own in tune with your dreams, giving you an unusual coloration each morning. When you're in an area where your coloration is roughly similar to the environment (for instance, forest green in a forest), you can use the single action to make minor localized shifts designed to help you blend into your surroundings. This grants you a +2 circumstance bonus to Stealth checks until your surroundings shift in coloration or pattern.</p>",
      "plainText": "The color of your hair and skin is mutable, possibly due to latent magic from First World influences or lingering illusion effects. You can slowly change the vibrancy and the exact color, and the coloration can be different across your body, allowing you to create patterns or other colorful designs. It takes a single action for minor localized shifts and up to an hour for dramatic shifts throughout your body. While you're asleep, the colors shift on their own in tune with your dreams, giving you an unusual coloration each morning. When you're in an area where your coloration is roughly similar to the environment (for instance, forest green in a forest), you can use the single action to make minor localized shifts designed to help you blend into your surroundings. This grants you a +2 circumstance bonus to Stealth checks until your surroundings shift in coloration or pattern."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "coloration-matches"
          ],
          "selector": "stealth",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "XeXWsvcWU3Zaj5WC",
      "sourcePath": "pf2e-master/packs/heritages/gnome/chameleon-gnome.json",
      "slug": "chameleon-gnome",
      "image": "systems/pf2e/icons/features/ancestry/chameleon-gnome.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Gnome",
      "slug": "gnome",
      "uuid": "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
      "sourceId": "CYlfsYLJcBOgqKtD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:changeling",
    "kind": "heritage",
    "slug": "changeling",
    "name": "Changeling",
    "description": {
      "sourceHtml": "<p>Your mother was a hag. Your eyes' heterochromia is the most obvious signifier of this parentage, but you likely also have a slighter build, paler skin, and darker hair than most members of your other parent's ancestry. You gain the changeling trait. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can select from changeling feats and feats from your other parent's ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "Your mother was a hag. Your eyes' heterochromia is the most obvious signifier of this parentage, but you likely also have a slighter build, paler skin, and darker hair than most members of your other parent's ancestry. You gain the changeling trait. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can select from changeling feats and feats from your other parent's ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "changeling"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      },
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "predicate": [
            "self:low-light-vision:from-ancestry"
          ],
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "EKY9v7SF1hVsUdbH",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/changeling.json",
      "slug": "changeling",
      "image": "systems/pf2e/icons/features/ancestry/changeling.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:charhide-goblin",
    "kind": "heritage",
    "slug": "charhide-goblin",
    "name": "Charhide Goblin",
    "description": {
      "sourceHtml": "<p>Your ancestors have always had a connection to fire and a thicker skin, which allows you to resist burning. You gain fire resistance equal to half your level (minimum 1). You can also recover from being on fire more easily. Your flat check to remove persistent fire damage is DC 10 instead of DC 15, which is reduced to @Check[flat|dc:5] if another creature uses a particularly appropriate action to help.</p>",
      "plainText": "Your ancestors have always had a connection to fire and a thicker skin, which allows you to resist burning. You gain fire resistance equal to half your level (minimum 1). You can also recover from being on fire more easily. Your flat check to remove persistent fire damage is DC 10 instead of DC 15, which is reduced to flat check if another creature uses a particularly appropriate action to help."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "fire",
          "value": "max(1,floor(@actor.level/2))"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "condition",
          "key": "ItemAlteration",
          "mode": "downgrade",
          "predicate": [
            "item:damage:type:fire"
          ],
          "property": "pd-recovery-dc",
          "value": 10
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "32oX6hHUY6K8N70Q",
      "sourcePath": "pf2e-master/packs/heritages/goblin/charhide-goblin.json",
      "slug": "charhide-goblin",
      "image": "systems/pf2e/icons/features/ancestry/charhide-goblin.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goblin",
      "slug": "goblin",
      "uuid": "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
      "sourceId": "sQfjTMDaZbT9DThq"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:chrysanthemum-leshy",
    "kind": "heritage",
    "slug": "chrysanthemum-leshy",
    "name": "Chrysanthemum Leshy",
    "description": {
      "sourceHtml": "<p>You look like a human child, though with a grand crown of chrysanthemums growing from your head, ornate as an emperor's. These petals have medicinal properties, granting you a +1 circumstance bonus to saving throws against poison.</p>\n<p>Furthermore, during your daily preparations, you can harmlessly pluck a few petals from your head and steep them in fresh water to create a single @UUID[Compendium.pf2e.equipment-srd.Item.Antidote (Lesser)]{Lesser Antidote}, which takes the form of a tea. At level 6, you instead create a @UUID[Compendium.pf2e.equipment-srd.Item.Antidote (Moderate)]{Moderate Antidote}; at level 10, a @UUID[Compendium.pf2e.equipment-srd.Item.Antidote (Greater)]{Greater Antidote}; and at level 14, a @UUID[Compendium.pf2e.equipment-srd.Item.Antidote (Major)]{Major Antidote}. The tea loses its effectiveness if not consumed before your next daily preparations.</p>",
      "plainText": "You look like a human child, though with a grand crown of chrysanthemums growing from your head, ornate as an emperor's. These petals have medicinal properties, granting you a +1 circumstance bonus to saving throws against poison. Furthermore, during your daily preparations, you can harmlessly pluck a few petals from your head and steep them in fresh water to create a single Lesser Antidote, which takes the form of a tea. At level 6, you instead create a Moderate Antidote; at level 10, a Greater Antidote; and at level 14, a Major Antidote. The tea loses its effectiveness if not consumed before your next daily preparations."
    },
    "rarity": "uncommon",
    "traits": [
      "leshy"
    ],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "item:trait:posion"
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "CpjsxaXYjlkCI5nc",
      "sourcePath": "pf2e-master/packs/heritages/leshy/chrysanthemum-leshy.json",
      "slug": "chrysanthemum-leshy",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:clawed-catfolk",
    "kind": "heritage",
    "slug": "clawed-catfolk",
    "name": "Clawed Catfolk",
    "description": {
      "sourceHtml": "<p>Your family has particularly long, sharp claws capable of delivering bleeding wounds with a wicked swipe. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group and have the agile, finesse and unarmed traits.</p>",
      "plainText": "Your family has particularly long, sharp claws capable of delivering bleeding wounds with a wicked swipe. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group and have the agile, finesse and unarmed traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "baseType": "claw",
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "slashing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "key": "Strike",
          "label": "PF2E.Weapon.Base.claw",
          "range": null,
          "traits": [
            "finesse",
            "unarmed",
            "agile"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "bLhIBwqdjTiVJ5qm",
      "sourcePath": "pf2e-master/packs/heritages/catfolk/clawed-catfolk.json",
      "slug": "clawed-catfolk",
      "image": "systems/pf2e/icons/features/ancestry/clawed-catfolk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Catfolk",
      "slug": "catfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
      "sourceId": "972EkpJOPv9KkQIW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:cliffscale-lizardfolk",
    "kind": "heritage",
    "slug": "cliffscale-lizardfolk",
    "name": "Cliffscale Lizardfolk",
    "description": {
      "sourceHtml": "<p>Your toes are adapted for gripping and climbing. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] feat as a bonus feat, and as long as you aren't wearing footwear, you can use the sticky pads on your feet to climb, leaving your hands free. Additionally, if you roll a success on an Athletics check to climb, you get a critical success instead.</p>",
      "plainText": "Your toes are adapted for gripping and climbing. You gain the feat as a bonus feat, and as long as you aren't wearing footwear, you can use the sticky pads on your feet to climb, leaving your hands free. Additionally, if you roll a success on an Athletics check to climb, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Combat Climber"
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:climb"
          ],
          "selector": "athletics"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "OoUqJJB77VfWbWRM",
      "sourcePath": "pf2e-master/packs/heritages/lizardfolk/cliffscale-lizardfolk.json",
      "slug": "cliffscale-lizardfolk",
      "image": "systems/pf2e/icons/features/ancestry/cliifscale-lizardfolk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Lizardfolk",
      "slug": "lizardfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
      "sourceId": "HWEgF7Gmoq55VhTL"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:climbing-animal",
    "kind": "heritage",
    "slug": "climbing-animal",
    "name": "Climbing Animal",
    "description": {
      "sourceHtml": "<p>You are an animal whose limbs are adapted to grab, climb, and brachiate. You might be dexterous and ready to use tools like a chimpanzee or otter, or you may simply be a quick climber like a bear, raccoon, or sloth.</p>\n<p>You have a land Speed of 20 feet, a climb Speed of 20 feet, and one animal attack of your choice (typically claw, fist, or jaws).</p>",
      "plainText": "You are an animal whose limbs are adapted to grab, climb, and brachiate. You might be dexterous and ready to use tools like a chimpanzee or otter, or you may simply be a quick climber like a bear, raccoon, or sloth. You have a land Speed of 20 feet, a climb Speed of 20 feet, and one animal attack of your choice (typically claw, fist, or jaws)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "land",
          "value": 20
        }
      },
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "climb",
          "value": 20
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.ancestryfeatures.Item.Animal Attack"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "13vilUcBjqMV2gxP",
      "sourcePath": "pf2e-master/packs/heritages/awakened-animal/climbing-animal.json",
      "slug": "climbing-animal",
      "image": "icons/creatures/reptiles/chameleon-camouflage-green-brown.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Awakened Animal",
      "slug": "awakened-animal",
      "uuid": "Compendium.pf2e.ancestries.Item.GFOgV3MzWkYwJoJW",
      "sourceId": "GFOgV3MzWkYwJoJW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:cloudleaper-lizardfolk",
    "kind": "heritage",
    "slug": "cloudleaper-lizardfolk",
    "name": "Cloudleaper Lizardfolk",
    "description": {
      "sourceHtml": "<p>Your body is light with flaps of skin along your limbs that catch the air that passes beneath you. As long as you can act and have enough room, you can open the flaps to slow any fall just enough to avoid taking damage (whether you have the room to do so depends on the GM's discretion).</p>",
      "plainText": "Your body is light with flaps of skin along your limbs that catch the air that passes beneath you. As long as you can act and have enough room, you can open the flaps to slow any fall just enough to avoid taking damage (whether you have the room to do so depends on the GM's discretion)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "sEnMG5zbnXdJvVPz",
      "sourcePath": "pf2e-master/packs/heritages/lizardfolk/cloudleaper-lizardfolk.json",
      "slug": "cloudleaper-lizardfolk",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Lizardfolk",
      "slug": "lizardfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
      "sourceId": "HWEgF7Gmoq55VhTL"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:compact-skeleton",
    "kind": "heritage",
    "slug": "compact-skeleton",
    "name": "Compact Skeleton",
    "description": {
      "sourceHtml": "<p>For tasks that require a lighter touch, gnome, goblin, and halfling remains are more suitable than a larger creature's. These smaller, nimbler skeletons fit well in a traveling chest, can be forced through tight spaces, and more easily avoid detection. Your size is Small instead of Medium. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Squeeze] feat, even if you aren't trained in Acrobatics. Tight spaces not tight enough to require the Squeeze activity aren't difficult terrain for you.</p>",
      "plainText": "For tasks that require a lighter touch, gnome, goblin, and halfling remains are more suitable than a larger creature's. These smaller, nimbler skeletons fit well in a traveling chest, can be forced through tight spaces, and more easily avoid detection. Your size is Small instead of Medium. You gain the feat, even if you aren't trained in Acrobatics. Tight spaces not tight enough to require the Squeeze activity aren't difficult terrain for you."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "small"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Quick Squeeze"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "mZqaKQkvadBbNubM",
      "sourcePath": "pf2e-master/packs/heritages/skeleton/compact-skeleton.json",
      "slug": "compact-skeleton",
      "image": "icons/commodities/bones/skull-weird.webp",
      "publication": {
        "title": "Pathfinder Book of the Dead",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Skeleton",
      "slug": "skeleton",
      "uuid": "Compendium.pf2e.ancestries.Item.58rL5sg2y4arW1i5",
      "sourceId": "58rL5sg2y4arW1i5"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:coral-athamaru",
    "kind": "heritage",
    "slug": "coral-athamaru",
    "name": "Coral Athamaru",
    "description": {
      "sourceHtml": "<p>Coral covers patches of your body, which provides a natural layer of defense. Coral athamarus often choose Coral Symbiotes and other related ancestry feats. The coral plates are medium armor in the plate armor group that grant a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of +3, and have the aquadynamic and comfort traits. You can never wear other armor or remove the coral. You can etch armor runes onto the coral.</p>",
      "plainText": "Coral covers patches of your body, which provides a natural layer of defense. Coral athamarus often choose Coral Symbiotes and other related ancestry feats. The coral plates are medium armor in the plate armor group that grant a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of +3, and have the aquadynamic and comfort traits. You can never wear other armor or remove the coral. You can etch armor runes onto the coral."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "4BczMv4EnLcgrEJE",
      "sourcePath": "pf2e-master/packs/heritages/athamaru/coral-athamaru.json",
      "slug": "coral-athamaru",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Athamaru",
      "slug": "athamaru",
      "uuid": "Compendium.pf2e.ancestries.Item.Cg1AMgp3zrGmimWd",
      "sourceId": "Cg1AMgp3zrGmimWd"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:courageous-tanuki",
    "kind": "heritage",
    "slug": "courageous-tanuki",
    "name": "Courageous Tanuki",
    "description": {
      "sourceHtml": "<p>Your heart beats with the courage of those who came before you, giving you the kind of bravery only a tanuki can demonstrate. Whenever you gain the @UUID[Compendium.pf2e.conditionitems.Item.Fleeing] condition, you also gain a +10-foot circumstance bonus to your Speeds that lasts as long as you're fleeing. When you have the fleeing condition, instead of having to spend all your actions trying to escape, you can act normally for one action but must still spend the remainder of your actions fleeing. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Tactical Retreat] ability.</p>",
      "plainText": "Your heart beats with the courage of those who came before you, giving you the kind of bravery only a tanuki can demonstrate. Whenever you gain the condition, you also gain a +10-foot circumstance bonus to your Speeds that lasts as long as you're fleeing. When you have the fleeing condition, instead of having to spend all your actions trying to escape, you can act normally for one action but must still spend the remainder of your actions fleeing. You also gain the ability."
    },
    "rarity": "common",
    "traits": [
      "tanuki"
    ],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Tactical Retreat"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "self:condition:fleeing"
          ],
          "selector": "speed",
          "type": "circumstance",
          "value": 10
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "hqh4zKHYBtDE26g8",
      "sourcePath": "pf2e-master/packs/heritages/tanuki/courageous-tanuki.json",
      "slug": "courageous-tanuki",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tanuki",
      "slug": "tanuki",
      "uuid": "Compendium.pf2e.ancestries.Item.pILFsoGsUQkVF5dZ",
      "sourceId": "pILFsoGsUQkVF5dZ"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:created-fleshwarp",
    "kind": "heritage",
    "slug": "created-fleshwarp",
    "name": "Created Fleshwarp",
    "description": {
      "sourceHtml": "<p>You were created through occult or alchemical processes, such as being grown in a vat or stitched together from the body parts of other creatures by a scientist in Ustalav. Your manufactured body is durable; you don't need to eat and can't starve. You gain a +2 circumstance bonus to saving throws against diseases.</p>",
      "plainText": "You were created through occult or alchemical processes, such as being grown in a vat or stitched together from the body parts of other creatures by a scientist in Ustalav. Your manufactured body is durable; you don't need to eat and can't starve. You gain a +2 circumstance bonus to saving throws against diseases."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "PF2E.SkillVariant.VsDiseases",
          "predicate": [
            "disease"
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "iY2CCqoMc2bRdoas",
      "sourcePath": "pf2e-master/packs/heritages/fleshwarp/created-fleshwarp.json",
      "slug": "created-fleshwarp",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fleshwarp",
      "slug": "fleshwarp",
      "uuid": "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
      "sourceId": "FXlXmNBFiiz9oasi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:dark-fields-kitsune",
    "kind": "heritage",
    "slug": "dark-fields-kitsune",
    "name": "Dark Fields Kitsune",
    "description": {
      "sourceHtml": "<p>You can exert your unsettling presence to subtly Demoralize others. When you do, Demoralize loses the auditory trait and gains the visual trait, and you don't take a penalty when you attempt to Demoralize a creature that doesn't understand your language. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Invigorating Fear] reaction. Your alternate form is a fox, which has the statistics of 1st-rank @UUID[Compendium.pf2e.spells-srd.Item.Pest Form].</p>",
      "plainText": "You can exert your unsettling presence to subtly Demoralize others. When you do, Demoralize loses the auditory trait and gains the visual trait, and you don't take a penalty when you attempt to Demoralize a creature that doesn't understand your language. You also gain the reaction. Your alternate form is a fox, which has the statistics of 1st-rank ."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "allowDuplicate": false,
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Invigorating Fear"
        }
      },
      {
        "key": "RollOption",
        "data": {
          "alwaysActive": true,
          "key": "RollOption",
          "label": "PF2E.NPCAbility.ChangeShape.Label",
          "mergeable": true,
          "option": "change-shape",
          "suboptions": [
            {
              "label": "PF2E.NPCAbility.ChangeShape.Form.Fox",
              "value": "fox"
            }
          ],
          "toggleable": true
        }
      },
      {
        "key": "RollOption",
        "data": {
          "key": "RollOption",
          "option": "non-tailless-form",
          "priority": 49
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "NWbdAN5gDse0ad7C",
      "sourcePath": "pf2e-master/packs/heritages/kitsune/dark-fields-kitsune.json",
      "slug": "dark-fields-kitsune",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kitsune",
      "slug": "kitsune",
      "uuid": "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
      "sourceId": "4BL5wf1VF9feC2rY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:death-warden-dwarf",
    "kind": "heritage",
    "slug": "death-warden-dwarf",
    "name": "Death Warden Dwarf",
    "description": {
      "sourceHtml": "<p>Your ancestors were tomb guardians, and their power to ward off death passed on to you. If you roll a success on a saving throw against an effect that has the void trait or was created by an undead creature, you get a critical success instead.</p>",
      "plainText": "Your ancestors were tomb guardians, and their power to ward off death passed on to you. If you roll a success on a saving throw against an effect that has the void trait or was created by an undead creature, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "criticalSuccess",
            "success"
          ],
          "predicate": [
            {
              "or": [
                "origin:trait:undead",
                "void"
              ]
            }
          ],
          "selector": "saving-throw",
          "text": "PF2E.SpecificRule.Dwarf.DeathWardenDwarf.Note",
          "title": "{item|name}"
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            {
              "or": [
                "origin:trait:undead",
                "void"
              ]
            }
          ],
          "selector": "saving-throw",
          "type": "save"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "VTtXwBxrfRUXSL38",
      "sourcePath": "pf2e-master/packs/heritages/dwarf/death-warden-dwarf.json",
      "slug": "death-warden-dwarf",
      "image": "systems/pf2e/icons/features/ancestry/death-warden-dwarf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Dwarf",
      "slug": "dwarf",
      "uuid": "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
      "sourceId": "BYj5ZvlXZdpaEgA6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:deep-fetchling",
    "kind": "heritage",
    "slug": "deep-fetchling",
    "name": "Deep Fetchling",
    "description": {
      "sourceHtml": "<p>Your predecessors dwelled in the Shadow Plane's deepest, most treacherous regions. You might cast a denser shadow, have a slower pulse, or find comfort in the embrace of darkness. You gain cold or void resistance equal to half your level (minimum 1), chosen when you gain this heritage.</p>",
      "plainText": "Your predecessors dwelled in the Shadow Plane's deepest, most treacherous regions. You might cast a denser shadow, have a slower pulse, or find comfort in the embrace of darkness. You gain cold or void resistance equal to half your level (minimum 1), chosen when you gain this heritage."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "choices": [
            {
              "label": "PF2E.TraitCold",
              "value": "cold"
            },
            {
              "label": "PF2E.TraitVoid",
              "value": "void"
            }
          ],
          "flag": "heritageDeepFetchling",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Fetchling.DeepFetchling.Prompt"
        }
      },
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "{item|flags.pf2e.rulesSelections.heritageDeepFetchling}",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "k4AU5tjtngDOIqrB",
      "sourcePath": "pf2e-master/packs/heritages/fetchling/deep-fetchling.json",
      "slug": "deep-fetchling",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fetchling",
      "slug": "fetchling",
      "uuid": "Compendium.pf2e.ancestries.Item.hIA3qiUsxvLZXrFP",
      "sourceId": "hIA3qiUsxvLZXrFP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:deep-orc",
    "kind": "heritage",
    "slug": "deep-orc",
    "name": "Deep Orc",
    "description": {
      "sourceHtml": "<p>Your calloused hands and red eyes speak to a life spent in the deep darkness of mountain caverns, where you learned to battle on rocky cliffs and survive with minimal resources. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat for underground terrain and the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] skill feat.</p>",
      "plainText": "Your calloused hands and red eyes speak to a life spent in the deep darkness of mountain caverns, where you learned to battle on rocky cliffs and survive with minimal resources. You gain the skill feat for underground terrain and the skill feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "preselectChoices": {
            "terrain": "underground"
          },
          "uuid": "Compendium.pf2e.feats-srd.Item.Terrain Expertise"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Combat Climber"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "wn4EbYk1QN3tyFhh",
      "sourcePath": "pf2e-master/packs/heritages/orc/deep-orc.json",
      "slug": "deep-orc",
      "image": "systems/pf2e/icons/features/ancestry/deep-orc.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Orc",
      "slug": "orc",
      "uuid": "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
      "sourceId": "lSGWXjcbOa6O5fTx"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:deep-rat",
    "kind": "heritage",
    "slug": "deep-rat",
    "name": "Deep Rat",
    "description": {
      "sourceHtml": "<p>Your ancestors lived deeper underground than other ratfolk, granting you the ability to see in the dark. You gain darkvision.</p>",
      "plainText": "Your ancestors lived deeper underground than other ratfolk, granting you the ability to see in the dark. You gain darkvision."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "7p9HtLzWBHc18JDW",
      "sourcePath": "pf2e-master/packs/heritages/ratfolk/deep-rat.json",
      "slug": "deep-rat",
      "image": "systems/pf2e/icons/features/ancestry/deep-rat.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ratfolk",
      "slug": "ratfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
      "sourceId": "P6PcVnCkh4XMdefw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:deny-lady-nanbyos-charity",
    "kind": "heritage",
    "slug": "deny-lady-nanbyos-charity",
    "name": "Deny Lady Nanbyo's Charity",
    "description": {
      "sourceHtml": "<p>You swore a vow to release others from natural calamities. Your vow grants you the strength to carry 1 more Bulk than normal before becoming encumbered and up to a maximum of 2 more Bulk, as well as a +1 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Force Open] or @UUID[Compendium.pf2e.actionspf2e.Item.Escape].</p><hr /><p><strong>Additional Edict</strong> do your utmost to aid or rescue those trapped or affected by natural disasters</p>",
      "plainText": "You swore a vow to release others from natural calamities. Your vow grants you the strength to carry 1 more Bulk than normal before becoming encumbered and up to a maximum of 2 more Bulk, as well as a +1 circumstance bonus to Athletics checks to or . . Additional Edict do your utmost to aid or rescue those trapped or affected by natural disasters"
    },
    "rarity": "common",
    "traits": [
      "yaksha"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "inventory.bulk.encumberedAfterAddend",
          "value": 1
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "inventory.bulk.maxAddend",
          "value": 2
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "action:force-open",
                "action:escape"
              ]
            }
          ],
          "selector": "athletics",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "qeFCDRSgFRR2ElWK",
      "sourcePath": "pf2e-master/packs/heritages/yaksha/deny-lady-nanbyos-charity.json",
      "slug": "deny-lady-nanbyos-charity",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaksha",
      "slug": "yaksha",
      "uuid": "Compendium.pf2e.ancestries.Item.k3zyr6du4gV0Ftuh",
      "sourceId": "k3zyr6du4gV0Ftuh"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:deny-the-firstborn-pursuit",
    "kind": "heritage",
    "slug": "deny-the-firstborn-pursuit",
    "name": "Deny the Firstborn Pursuit",
    "description": {
      "sourceHtml": "<p>You swore a vow to shelter others from the First World's cruelties. Wise to fey's mind-affecting abilities, your vow grants mental resistance equal to half your level (minimum 1), and a +2 circumstance bonus to Nature checks to Recall Knowledge about fey.</p><hr /><p><strong>Additional Edict</strong> confront cruel fey you encounter (as long as you have a reasonable chance of success)</p>",
      "plainText": "You swore a vow to shelter others from the First World's cruelties. Wise to fey's mind-affecting abilities, your vow grants mental resistance equal to half your level (minimum 1), and a +2 circumstance bonus to Nature checks to Recall Knowledge about fey. . Additional Edict confront cruel fey you encounter (as long as you have a reasonable chance of success)"
    },
    "rarity": "common",
    "traits": [
      "yaksha"
    ],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "mental",
          "value": "max(1,floor(@actor.level/2))"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:recall-knowledge",
            "target:trait:fey"
          ],
          "selector": "nature",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "AWLcCe69nzxZzWQc",
      "sourcePath": "pf2e-master/packs/heritages/yaksha/deny-the-firstborn-pursuit.json",
      "slug": "deny-the-firstborn-pursuit",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaksha",
      "slug": "yaksha",
      "uuid": "Compendium.pf2e.ancestries.Item.k3zyr6du4gV0Ftuh",
      "sourceId": "k3zyr6du4gV0Ftuh"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:deny-the-traitors-rebirth",
    "kind": "heritage",
    "slug": "deny-the-traitors-rebirth",
    "name": "Deny the Traitor's Rebirth",
    "description": {
      "sourceHtml": "<p>You swore a vow to deliver others from rakshasas and asuras, whom yaksha legends have condemned as corrupted kin. To counter their shadowy schemes, your vow grants you darkvision and a +1 circumstance bonus to Perception checks to @UUID[Compendium.pf2e.actionspf2e.Item.Seek] or @UUID[Compendium.pf2e.actionspf2e.Item.Sense Motive]{Sense the Motives} of rakshasas and asuras.</p><hr /><p><strong>Additional Edict</strong> confront rakshasas and asuras you come across (as long as you have a reasonable chance of success); in the unlikely event you find a benevolent rakshasa or asura, you don't have to confront them</p>",
      "plainText": "You swore a vow to deliver others from rakshasas and asuras, whom yaksha legends have condemned as corrupted kin. To counter their shadowy schemes, your vow grants you darkvision and a +1 circumstance bonus to Perception checks to or Sense the Motives of rakshasas and asuras. . Additional Edict confront rakshasas and asuras you come across (as long as you have a reasonable chance of success); in the unlikely event you find a benevolent rakshasa or asura, you don't have to confront them"
    },
    "rarity": "common",
    "traits": [
      "yaksha"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "darkvision"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "target:trait:asura",
                "target:trait:rakshasa"
              ]
            },
            {
              "or": [
                "action:seek",
                "action:sense-motive"
              ]
            }
          ],
          "selector": "perception",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "YoDvQ5fvpbgcoG3V",
      "sourcePath": "pf2e-master/packs/heritages/yaksha/deny-the-traitors-rebirth.json",
      "slug": "deny-the-traitors-rebirth",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaksha",
      "slug": "yaksha",
      "uuid": "Compendium.pf2e.ancestries.Item.k3zyr6du4gV0Ftuh",
      "sourceId": "k3zyr6du4gV0Ftuh"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:desert-elf",
    "kind": "heritage",
    "slug": "desert-elf",
    "name": "Desert Elf",
    "description": {
      "sourceHtml": "<p>You live under the desert's blazing heat, gaining incredible resilience to warm environments. You gain fire resistance equal to half your level (minimum 1), and environmental heat effects are one step less extreme for you (incredible heat becomes extreme, extreme heat becomes severe, and so on).</p>",
      "plainText": "You live under the desert's blazing heat, gaining incredible resilience to warm environments. You gain fire resistance equal to half your level (minimum 1), and environmental heat effects are one step less extreme for you (incredible heat becomes extreme, extreme heat becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "fire",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "kiKxnKd7Dfegk9dM",
      "sourcePath": "pf2e-master/packs/heritages/elf/desert-elf.json",
      "slug": "desert-elf",
      "image": "systems/pf2e/icons/features/ancestry/desert-elf.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Character Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Elf",
      "slug": "elf",
      "uuid": "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
      "sourceId": "PgKmsA2aKdbLU6O0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:desert-rat",
    "kind": "heritage",
    "slug": "desert-rat",
    "name": "Desert Rat",
    "description": {
      "sourceHtml": "<p>You are native to arid plains and likely grew up traveling the roads. If you have both hands free, you can increase your Speed to 30 feet as you run on all fours. In addition, environmental heat effects are one step less extreme for you, and you can go 10 times longer than normal before you are affected by starvation or thirst. However, unless you wear protective gear or take shelter, environmental cold effects are one step more extreme for you.</p>",
      "plainText": "You are native to arid plains and likely grew up traveling the roads. If you have both hands free, you can increase your Speed to 30 feet as you run on all fours. In addition, environmental heat effects are one step less extreme for you, and you can go 10 times longer than normal before you are affected by starvation or thirst. However, unless you wear protective gear or take shelter, environmental cold effects are one step more extreme for you."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "hands-free:2"
          ],
          "selector": "land-speed",
          "value": 5
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "twayjFuXbsvyHUwy",
      "sourcePath": "pf2e-master/packs/heritages/ratfolk/desert-rat.json",
      "slug": "desert-rat",
      "image": "systems/pf2e/icons/features/ancestry/desert-rat.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ratfolk",
      "slug": "ratfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
      "sourceId": "P6PcVnCkh4XMdefw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:dhampir",
    "kind": "heritage",
    "slug": "dhampir",
    "name": "Dhampir",
    "description": {
      "sourceHtml": "<p>You are the scion of a vampire, half living and half undead, gifted with uncanny charm and grace, a bloodless pallor, and elongated incisors. You gain the dhampir trait, in addition to the traits from your ancestry. You have the void healing ability, which means you are harmed by vitality damage and healed by void effects as if you were undead. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can select from dhampir feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "You are the scion of a vampire, half living and half undead, gifted with uncanny charm and grace, a bloodless pallor, and elongated incisors. You gain the dhampir trait, in addition to the traits from your ancestry. You have the void healing ability, which means you are harmed by vitality damage and healed by void effects as if you were undead. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can select from dhampir feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "dhampir"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.attributes.hp.negativeHealing",
          "value": true
        }
      },
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      },
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "predicate": [
            "self:low-light-vision:from-ancestry"
          ],
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "UaD5VDoFlILEmbyz",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/dhampir.json",
      "slug": "dhampir",
      "image": "systems/pf2e/icons/features/ancestry/dhampir.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:dijiang",
    "kind": "heritage",
    "slug": "dijiang",
    "name": "Dijiang",
    "description": {
      "sourceHtml": "<p>You have the form of a faceless, leathery ball with short fur, six legs, and a connection to primordial chaos. While you have no face, head, mouth, eyes, or ears, you can somehow hear, speak, see, eat, and breathe just fine (though it's unclear exactly how). Your erratic nature means you often react to stimuli in unpredictable ways.</p>\n<p>When you roll a failure (though not a critical failure) on a saving throw against an emotion effect, you get a success instead.</p>",
      "plainText": "You have the form of a faceless, leathery ball with short fur, six legs, and a connection to primordial chaos. While you have no face, head, mouth, eyes, or ears, you can somehow hear, speak, see, eat, and breathe just fine (though it's unclear exactly how). Your erratic nature means you often react to stimuli in unpredictable ways. When you roll a failure (though not a critical failure) on a saving throw against an emotion effect, you get a success instead."
    },
    "rarity": "uncommon",
    "traits": [
      "sprite"
    ],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "failure": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "item:trait:emotion"
          ],
          "selector": "saving-throw"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "TXBsQbzDg1AjJnop",
      "sourcePath": "pf2e-master/packs/heritages/sprite/dijiang.json",
      "slug": "dijiang",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sprite",
      "slug": "sprite",
      "uuid": "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
      "sourceId": "TRqoeYfGAFjQbviF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:discarded-fleshwarp",
    "kind": "heritage",
    "slug": "discarded-fleshwarp",
    "name": "Discarded Fleshwarp",
    "description": {
      "sourceHtml": "<p>The biomancers and mutagenists who warped your form labeled you a \"discard on discovery\"—a euphemism for destroying you on sight. An anomaly among anomalies, your body stubbornly repudiates the efforts of fleshcrafters seeking to mold you to their grandiose visions, and your immune responses blunt the worst effects of unwanted fleshwarping attempts. If you roll a success on a saving throw against a transmutation effect, you get a critical success instead.</p>",
      "plainText": "The biomancers and mutagenists who warped your form labeled you a \"discard on discovery\"—a euphemism for destroying you on sight. An anomaly among anomalies, your body stubbornly repudiates the efforts of fleshcrafters seeking to mold you to their grandiose visions, and your immune responses blunt the worst effects of unwanted fleshwarping attempts. If you roll a success on a saving throw against a transmutation effect, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "outcome": [
            "success"
          ],
          "predicate": [
            "transmutation"
          ],
          "selector": "saving-throw",
          "type": "save"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "OtqOC3ElpF444qMe",
      "sourcePath": "pf2e-master/packs/heritages/fleshwarp/discarded-fleshwarp.json",
      "slug": "discarded-fleshwarp",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fleshwarp",
      "slug": "fleshwarp",
      "uuid": "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
      "sourceId": "FXlXmNBFiiz9oasi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:dog-kholo",
    "kind": "heritage",
    "slug": "dog-kholo",
    "name": "Dog Kholo",
    "description": {
      "sourceHtml": "<p>You're a nimble-bodied kholo with a prehistoric, almost dog-like build. Though you typically move like a quadruped, you can still stand and fight like a biped, allowing you to use all equipment normally. If you have both hands free, you can increase your Speed to 30 feet as you run on all fours.</p>",
      "plainText": "You're a nimble-bodied kholo with a prehistoric, almost dog-like build. Though you typically move like a quadruped, you can still stand and fight like a biped, allowing you to use all equipment normally. If you have both hands free, you can increase your Speed to 30 feet as you run on all fours."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "RollOption",
        "data": {
          "domain": "all",
          "key": "RollOption",
          "label": "PF2E.SpecificRule.Automaton.HunterAutomaton.ToggleLabel",
          "option": "on-all-fours",
          "toggleable": true
        }
      },
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "predicate": [
            "on-all-fours"
          ],
          "selector": "land",
          "value": 30
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "0B0M6CUnVDkeznRv",
      "sourcePath": "pf2e-master/packs/heritages/kholo/dog-kholo.json",
      "slug": "dog-kholo",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kholo",
      "slug": "kholo",
      "uuid": "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
      "sourceId": "vxbQ1Yw4qwgjTzqo"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:dogtooth-tengu",
    "kind": "heritage",
    "slug": "dogtooth-tengu",
    "name": "Dogtooth Tengu",
    "description": {
      "sourceHtml": "<p>In addition to a beak, your mouth also features a number of vicious, pointed teeth. Some legends claim your powerful jaws can even bite through steel. While you aren't that strong yet, your fangs can still leave terrible wounds. Your beak unarmed attack gains the deadly d8 trait.</p>",
      "plainText": "In addition to a beak, your mouth also features a number of vicious, pointed teeth. Some legends claim your powerful jaws can even bite through steel. While you aren't that strong yet, your fangs can still leave terrible wounds. Your beak unarmed attack gains the deadly d8 trait."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "weapon",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:beak"
          ],
          "property": "traits",
          "value": "deadly-d8"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "2hLDilS6qbjHxgVS",
      "sourcePath": "pf2e-master/packs/heritages/tengu/dogtooth-tengu.json",
      "slug": "dogtooth-tengu",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tengu",
      "slug": "tengu",
      "uuid": "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
      "sourceId": "18xDKYPDBLEv2myX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:dokkaebi-goblin",
    "kind": "heritage",
    "slug": "dokkaebi-goblin",
    "name": "Dokkaebi Goblin",
    "description": {
      "sourceHtml": "<p>Your ancestors mastered illusion-based magic, giving you an innate understanding of it. You can cast @UUID[Compendium.pf2e.spells-srd.Item.Figment] as an innate occult cantrip at will. A cantrip is heightened to a spell rank equal to half your level rounded up. You also gain a +1 circumstance bonus to Will saves against illusions.</p>",
      "plainText": "Your ancestors mastered illusion-based magic, giving you an innate understanding of it. You can cast as an innate occult cantrip at will. A cantrip is heightened to a spell rank equal to half your level rounded up. You also gain a +1 circumstance bonus to Will saves against illusions."
    },
    "rarity": "uncommon",
    "traits": [
      "goblin"
    ],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "item:trait:illusion"
          ],
          "selector": "will",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:figment",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:figment",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:goblin"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "gf2CfXocpIQgRsCY",
      "sourcePath": "pf2e-master/packs/heritages/goblin/dokkaebi-goblin.json",
      "slug": "dokkaebi-goblin",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goblin",
      "slug": "goblin",
      "uuid": "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
      "sourceId": "sQfjTMDaZbT9DThq"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:dragonblood",
    "kind": "heritage",
    "slug": "dragonblood",
    "name": "Dragonblood",
    "description": {
      "sourceHtml": "<p>You're descended in some way from a dragon. Your physical features might show this outwardly, with a pair of draconic horns, patches of scaly skin, or even a tail, or you might develop an internal reserve of draconic power. You gain the dragonblood trait, in addition to the traits from your ancestry. Add Draconic to your ancestry's list of additional languages (allowing you to choose it as a language if your Intelligence modifier is positive). When you roll a success on a saving throw against a fear effect, you get a critical success instead. You can choose from dragonblood feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "You're descended in some way from a dragon. Your physical features might show this outwardly, with a pair of draconic horns, patches of scaly skin, or even a tail, or you might develop an internal reserve of draconic power. You gain the dragonblood trait, in addition to the traits from your ancestry. Add Draconic to your ancestry's list of additional languages (allowing you to choose it as a language if your Intelligence modifier is positive). When you roll a success on a saving throw against a fear effect, you get a critical success instead. You can choose from dragonblood feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "dragonblood"
    ],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "actorFlag": true,
          "choices": [
            {
              "label": "PF2E.Dragon.Adamantine",
              "value": {
                "damageType": "bludgeoning",
                "dragon": "adamantine",
                "save": "reflex",
                "shape": "cone",
                "speed": "burrow",
                "tradition": "primal"
              }
            },
            {
              "label": "PF2E.Dragon.Conspirator",
              "value": {
                "damageType": "poison",
                "dragon": "conspirator",
                "save": "fortitude",
                "shape": "cone",
                "speed": "climb",
                "tradition": "occult"
              }
            },
            {
              "label": "PF2E.Dragon.Diabolic",
              "value": {
                "damageType": "fire",
                "dragon": "diabolic",
                "save": "reflex",
                "shape": "cone",
                "tradition": "divine"
              }
            },
            {
              "label": "PF2E.Dragon.Empyreal",
              "value": {
                "damageType": "spirit",
                "dragon": "empyreal",
                "save": "reflex",
                "shape": "cone",
                "tradition": "divine"
              }
            },
            {
              "label": "PF2E.Dragon.Fortune",
              "value": {
                "damageType": "force",
                "dragon": "fortune",
                "save": "reflex",
                "shape": "cone",
                "tradition": "arcane"
              }
            },
            {
              "label": "PF2E.Dragon.Horned",
              "value": {
                "damageType": "poison",
                "dragon": "horned",
                "save": "fortitude",
                "shape": "cone",
                "speed": "swim",
                "tradition": "primal"
              }
            },
            {
              "label": "PF2E.Dragon.Mirage",
              "value": {
                "damageType": "mental",
                "dragon": "mirage",
                "save": "will",
                "shape": "cone",
                "speed": "climb",
                "tradition": "arcane"
              }
            },
            {
              "label": "PF2E.Dragon.Omen",
              "value": {
                "damageType": "mental",
                "dragon": "omen",
                "save": "will",
                "shape": "cone",
                "tradition": "occult"
              }
            }
          ],
          "flag": "dragonblood",
          "key": "ChoiceSet"
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "item:trait:fear"
          ],
          "selector": "saving-throw"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "cbbXIV4QBred4lM5",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/dragonblood.json",
      "slug": "dragonblood",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:dragonscaled-kobold",
    "kind": "heritage",
    "slug": "dragonscaled-kobold",
    "name": "Dragonscaled Kobold",
    "description": {
      "sourceHtml": "<p>Thanks to your warren's association with a dragon, your scales are sturdier than other kobolds'. You gain 10 Hit Points from your ancestry instead of 6. You gain a +1 circumstance bonus to saves against dragon breath, effects with the sleep trait, and effects that would make you @UUID[Compendium.pf2e.conditionitems.Item.Paralyzed].</p>",
      "plainText": "Thanks to your warren's association with a dragon, your scales are sturdier than other kobolds'. You gain 10 Hit Points from your ancestry instead of 6. You gain a +1 circumstance bonus to saves against dragon breath, effects with the sleep trait, and effects that would make you ."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.attributes.ancestryhp",
          "value": 10
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "item:trait:sleep",
                "inflicts:paralyzed",
                {
                  "and": [
                    "action:breath-weapon",
                    "origin:trait:dragon"
                  ]
                }
              ]
            }
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "P8BP1un5BTrwXoBy",
      "sourcePath": "pf2e-master/packs/heritages/kobold/dragonscaled-kobold.json",
      "slug": "dragonscaled-kobold",
      "image": "systems/pf2e/icons/features/ancestry/dragonscaled-kobold.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kobold",
      "slug": "kobold",
      "uuid": "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
      "sourceId": "7oQxL6wgsokD3QXG"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:draxie",
    "kind": "heritage",
    "slug": "draxie",
    "name": "Draxie",
    "description": {
      "sourceHtml": "<p>You are kin to faerie dragons, tracing your heritage back to the death of the mightiest faerie dragon in the First World. You gain touch telepathy, allowing you to communicate silently and purely mentally with any creature you're touching, as long as you share a language.</p>",
      "plainText": "You are kin to faerie dragons, tracing your heritage back to the death of the mightiest faerie dragon in the First World. You gain touch telepathy, allowing you to communicate silently and purely mentally with any creature you're touching, as long as you share a language."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "zcO93E8gAW1tDYKk",
      "sourcePath": "pf2e-master/packs/heritages/sprite/draxie.json",
      "slug": "draxie",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sprite",
      "slug": "sprite",
      "uuid": "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
      "sourceId": "TRqoeYfGAFjQbviF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:dromaar",
    "kind": "heritage",
    "slug": "dromaar",
    "name": "Dromaar",
    "description": {
      "sourceHtml": "<p>Orcish strength emboldens your bloodline. You have a green tinge to your skin and other indicators of orc heritage. You gain the orc trait, the dromaar trait, and low-light vision. When you gain an ancestry feat, you can choose from dromaar and orc feats in addition to those from your ancestry.</p>",
      "plainText": "Orcish strength emboldens your bloodline. You have a green tinge to your skin and other indicators of orc heritage. You gain the orc trait, the dromaar trait, and low-light vision. When you gain an ancestry feat, you can choose from dromaar and orc feats in addition to those from your ancestry."
    },
    "rarity": "common",
    "traits": [
      "dromaar"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      },
      {
        "key": "ActorTraits",
        "data": {
          "add": [
            "orc"
          ],
          "key": "ActorTraits"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.details.ancestry.versatile",
          "value": "orc"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "system.details.ancestry.countsAs",
          "value": "dromaar"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "system.details.ancestry.countsAs",
          "value": "orc"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "tLd8Qg82AwEbbmgX",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/dromaar.json",
      "slug": "dromaar",
      "image": "systems/pf2e/icons/features/ancestry/half-orc.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:duskwalker",
    "kind": "heritage",
    "slug": "duskwalker",
    "name": "Duskwalker",
    "description": {
      "sourceHtml": "<p>Thanks to an ancient bargain, your soul has been reborn as a duskwalker, a planar scion with a connection to psychopomps and the Boneyard. You gain the duskwalker trait. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. Neither your body nor your spirit can ever become undead. You can select from duskwalker feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "Thanks to an ancient bargain, your soul has been reborn as a duskwalker, a planar scion with a connection to psychopomps and the Boneyard. You gain the duskwalker trait. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. Neither your body nor your spirit can ever become undead. You can select from duskwalker feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "duskwalker"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      },
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "predicate": [
            "self:low-light-vision:from-ancestry"
          ],
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ZZKZkeSP5TuT62IA",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/duskwalker.json",
      "slug": "duskwalker",
      "image": "systems/pf2e/icons/features/ancestry/duskwalker.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:earthly-wilds-kitsune",
    "kind": "heritage",
    "slug": "earthly-wilds-kitsune",
    "name": "Earthly Wilds Kitsune",
    "description": {
      "sourceHtml": "<p>You are a creature of the material world, with an affinity closer to the wilds than urban society. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits. Your alternate form is a fox, which has the statistics of 1st-rank @UUID[Compendium.pf2e.spells-srd.Item.Pest Form].</p>",
      "plainText": "You are a creature of the material world, with an affinity closer to the wilds than urban society. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits. Your alternate form is a fox, which has the statistics of 1st-rank ."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "baseType": "jaws",
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "piercing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "icons/creatures/abilities/mouth-teeth-long-red.webp",
          "key": "Strike",
          "label": "PF2E.Weapon.Base.jaws",
          "range": null,
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      },
      {
        "key": "RollOption",
        "data": {
          "alwaysActive": true,
          "key": "RollOption",
          "label": "PF2E.NPCAbility.ChangeShape.Label",
          "mergeable": true,
          "option": "change-shape",
          "suboptions": [
            {
              "label": "PF2E.NPCAbility.ChangeShape.Form.Fox",
              "value": "fox"
            }
          ],
          "toggleable": true
        }
      },
      {
        "key": "RollOption",
        "data": {
          "key": "RollOption",
          "option": "non-tailless-form",
          "priority": 49
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Wk4HyaZtC1j221i1",
      "sourcePath": "pf2e-master/packs/heritages/kitsune/earthly-wilds-kitsune.json",
      "slug": "earthly-wilds-kitsune",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kitsune",
      "slug": "kitsune",
      "uuid": "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
      "sourceId": "4BL5wf1VF9feC2rY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:elemental-heart-dwarf",
    "kind": "heritage",
    "slug": "elemental-heart-dwarf",
    "name": "Elemental Heart Dwarf",
    "description": {
      "sourceHtml": "<p>Whether through a connection to @UUID[Compendium.pf2e.deities.Item.Torag]{Torag's} forge, the azers of the Plane of Fire, or another source, you can exude a burst of energy. Mbe'ke and Taralu dwarves of the Mwangi Expanse believe this heritage is a gift from dragons or elemental spirits. Choose one of the following damage types: acid, cold, electricity, or fire. Once chosen, this can't be changed. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Energy Emanation] activity.</p>",
      "plainText": "Whether through a connection to Torag's forge, the azers of the Plane of Fire, or another source, you can exude a burst of energy. Mbe'ke and Taralu dwarves of the Mwangi Expanse believe this heritage is a gift from dragons or elemental spirits. Choose one of the following damage types: acid, cold, electricity, or fire. Once chosen, this can't be changed. You gain the activity."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "choices": [
            {
              "label": "PF2E.TraitAcid",
              "value": "acid"
            },
            {
              "label": "PF2E.TraitCold",
              "value": "cold"
            },
            {
              "label": "PF2E.TraitElectricity",
              "value": "electricity"
            },
            {
              "label": "PF2E.TraitFire",
              "value": "fire"
            }
          ],
          "flag": "elementalHeartDwarf",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Dwarf.ElementalHeart.Prompt"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.elementalHeartDwarf.damageType",
          "value": "{item|flags.pf2e.rulesSelections.elementalHeartDwarf}"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Energy Emanation"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "MeMAAtUlZmFgKSMF",
      "sourcePath": "pf2e-master/packs/heritages/dwarf/elemental-heart-dwarf.json",
      "slug": "elemental-heart-dwarf",
      "image": "systems/pf2e/icons/features/ancestry/elemental-heat-dwarf.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Character Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Dwarf",
      "slug": "dwarf",
      "uuid": "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
      "sourceId": "BYj5ZvlXZdpaEgA6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:elementheart-kobold",
    "kind": "heritage",
    "slug": "elementheart-kobold",
    "name": "Elementheart Kobold",
    "description": {
      "sourceHtml": "<p>When you hatched, you imprinted on a creature strongly associated with one of the Elemental Planes, such as an elemental or genie. Choose air, earth, fire, metal, water, or wood for your elemental benefactor. You gain resistance equal to half your level (minimum 1) to the damage type associated with your elemental benefactor: cold for air, electricity for earth, fire for fire, sonic for metal, acid for water, or poison for wood.</p>",
      "plainText": "When you hatched, you imprinted on a creature strongly associated with one of the Elemental Planes, such as an elemental or genie. Choose air, earth, fire, metal, water, or wood for your elemental benefactor. You gain resistance equal to half your level (minimum 1) to the damage type associated with your elemental benefactor: cold for air, electricity for earth, fire for fire, sonic for metal, acid for water, or poison for wood."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "choices": [
            {
              "label": "PF2E.TraitAir",
              "value": "cold"
            },
            {
              "label": "PF2E.TraitEarth",
              "value": "electricity"
            },
            {
              "label": "PF2E.TraitFire",
              "value": "fire"
            },
            {
              "label": "PF2E.TraitMetal",
              "value": "sonic"
            },
            {
              "label": "PF2E.TraitWater",
              "value": "acid"
            },
            {
              "label": "PF2E.TraitWood",
              "value": "poison"
            }
          ],
          "flag": "element",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.Element"
        }
      },
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "{item|flags.pf2e.rulesSelections.element}",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "dbj1cbkYeAAdkDSM",
      "sourcePath": "pf2e-master/packs/heritages/kobold/elementheart-kobold.json",
      "slug": "elementheart-kobold",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kobold",
      "slug": "kobold",
      "uuid": "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
      "sourceId": "7oQxL6wgsokD3QXG"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:elfbane-hobgoblin",
    "kind": "heritage",
    "slug": "elfbane-hobgoblin",
    "name": "Elfbane Hobgoblin",
    "description": {
      "sourceHtml": "<p>Hobgoblins were engineered long ago from the unreliable and fecund goblins to be used as an army against the elves. Although the elves ultimately freed the hobgoblins from their bondage, some hobgoblins retain ancestral resistance to magic, which they refer to as \"elf magic.\" You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Resist Elf Magic] reaction.</p>",
      "plainText": "Hobgoblins were engineered long ago from the unreliable and fecund goblins to be used as an army against the elves. Although the elves ultimately freed the hobgoblins from their bondage, some hobgoblins retain ancestral resistance to magic, which they refer to as \"elf magic.\" You gain the reaction."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Resist Elf Magic"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ikNJZRxUjcRLisO6",
      "sourcePath": "pf2e-master/packs/heritages/hobgoblin/elfbane-hobgoblin.json",
      "slug": "elfbane-hobgoblin",
      "image": "systems/pf2e/icons/features/ancestry/unbreakable-goblin.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Hobgoblin",
      "slug": "hobgoblin",
      "uuid": "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
      "sourceId": "piNLXUrm9iaGqD2i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:elusive-vishkanya",
    "kind": "heritage",
    "slug": "elusive-vishkanya",
    "name": "Elusive Vishkanya",
    "description": {
      "sourceHtml": "<p>Your flexible body seems unnaturally fluid to some, though they can rarely put a finger on what seems strange about you. You can escape foes with ease. You gain a +1 circumstance bonus to checks to @UUID[Compendium.pf2e.actionspf2e.Item.Escape]. Additionally, you move twice as fast when Squeezing.</p>",
      "plainText": "Your flexible body seems unnaturally fluid to some, though they can rarely put a finger on what seems strange about you. You can escape foes with ease. You gain a +1 circumstance bonus to checks to . Additionally, you move twice as fast when Squeezing."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:escape"
          ],
          "selector": [
            "athletics",
            "acrobatics"
          ],
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ywNXVLZtwrAStyh1",
      "sourcePath": "pf2e-master/packs/heritages/vishkanya/elusive-vishkanya.json",
      "slug": "elusive-vishkanya",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Vishkanya",
      "slug": "vishkanya",
      "uuid": "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
      "sourceId": "u1VJEXsVlmh3Fyx0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:elytron-surki",
    "kind": "heritage",
    "slug": "elytron-surki",
    "name": "Elytron Surki",
    "description": {
      "sourceHtml": "<p>The top layer of your carapace is especially mobile, and you can unfurl it to catch the air gracefully as you fall. You take no damage from falling, regardless of the distance you fall.</p>\n<ul>\n<li><strong>Evolution</strong> Your shoulder nodes have evolved into a pair of spines that you can energize to project a pair of glowing wings. You can cast @UUID[Compendium.pf2e.spells-srd.Item.Fly] as an innate spell once per day, targeting yourself; while your wings are energized, you shed bright light in a 20-foot radius and dim light for the next 20 feet.</li>\n<li><strong>Evolution</strong> Your shoulder nodes have evolved into a fan of thin membranes that resonate when magic is coursed through them. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Stridulating Song] action.</li>\n</ul>",
      "plainText": "The top layer of your carapace is especially mobile, and you can unfurl it to catch the air gracefully as you fall. You take no damage from falling, regardless of the distance you fall. Evolution Your shoulder nodes have evolved into a pair of spines that you can energize to project a pair of glowing wings. You can cast as an innate spell once per day, targeting yourself; while your wings are energized, you shed bright light in a 20-foot radius and dim light for the next 20 feet. Evolution Your shoulder nodes have evolved into a fan of thin membranes that resonate when magic is coursed through them. You gain the action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "flags.pf2e.surki.evolutions",
          "value": {
            "label": "PF2E.SpecificRule.Surki.Evolutions.GlowingWings",
            "predicate": [
              {
                "not": "evolution:glowing-wings"
              }
            ],
            "value": "glowing-wings"
          }
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "flags.pf2e.surki.evolutions",
          "value": {
            "label": "PF2E.SpecificRule.Surki.Evolutions.ResonatingMembranes",
            "predicate": [
              {
                "not": "evolution:resonating-membranes"
              }
            ],
            "value": "resonating-membranes"
          }
        }
      },
      {
        "key": "TokenLight",
        "data": {
          "key": "TokenLight",
          "predicate": [
            "self:effect:fly",
            "evolution:glowing-wings"
          ],
          "value": {
            "alpha": 0.25,
            "animation": {
              "type": "flame"
            },
            "bright": 20,
            "color": "#4ee9fd",
            "dim": 40,
            "luminosity": 0.3,
            "saturation": -0.25
          }
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:fly",
            "spellcasting:innate",
            "evolution:glowing-wings"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:fly",
            "spellcasting:innate",
            "evolution:glowing-wings"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:surki"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "allowDuplicate": false,
          "key": "GrantItem",
          "predicate": [
            "evolution:resonating-membranes"
          ],
          "reevaluateOnUpdate": true,
          "uuid": "Compendium.pf2e.actionspf2e.Item.Stridulating Song"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "0Anj61DzUimJ1uMS",
      "sourcePath": "pf2e-master/packs/heritages/surki/elytron-surki.json",
      "slug": "elytron-surki",
      "image": "icons/creatures/abilities/wings-birdlike-blue.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Surki",
      "slug": "surki",
      "uuid": "Compendium.pf2e.ancestries.Item.ALOmLePjbc37ca3Y",
      "sourceId": "ALOmLePjbc37ca3Y"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:empty-sky-kitsune",
    "kind": "heritage",
    "slug": "empty-sky-kitsune",
    "name": "Empty Sky Kitsune",
    "description": {
      "sourceHtml": "<p>Your spirit is open to the secrets of beyond, granting you greater access to kitsune magic. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Kitsune Spell Familiarity] ancestry feat. Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form.</p>",
      "plainText": "Your spirit is open to the secrets of beyond, granting you greater access to kitsune magic. You gain the ancestry feat. Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Kitsune Spell Familiarity"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "mBH1L01kYmB8EL56",
      "sourcePath": "pf2e-master/packs/heritages/kitsune/empty-sky-kitsune.json",
      "slug": "empty-sky-kitsune",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kitsune",
      "slug": "kitsune",
      "uuid": "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
      "sourceId": "4BL5wf1VF9feC2rY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:enchanting-lily",
    "kind": "heritage",
    "slug": "enchanting-lily",
    "name": "Enchanting Lily",
    "description": {
      "sourceHtml": "<p>You smell ever so sweet—a delicate, floral scent like the intoxicating fragrance of lilies and the soft scent of lilacs. You're trained in Diplomacy (or another skill if you were already trained in Diplomacy). You also gain a +1 circumstance bonus to checks to @UUID[Compendium.pf2e.actionspf2e.Item.Make an Impression] if the target can smell your fragrance.</p>",
      "plainText": "You smell ever so sweet—a delicate, floral scent like the intoxicating fragrance of lilies and the soft scent of lilacs. You're trained in Diplomacy (or another skill if you were already trained in Diplomacy). You also gain a +1 circumstance bonus to checks to if the target can smell your fragrance."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.diplomacy.rank",
          "value": 1
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:make-an-impression",
            "enchanting-lily"
          ],
          "selector": "diplomacy",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "VqgrYMaAwnNjT9Mn",
      "sourcePath": "pf2e-master/packs/heritages/ghoran/enchanting-lily.json",
      "slug": "enchanting-lily",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ghoran",
      "slug": "ghoran",
      "uuid": "Compendium.pf2e.ancestries.Item.tSurOqRcfumadTfr",
      "sourceId": "tSurOqRcfumadTfr"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:even-tempered-tanuki",
    "kind": "heritage",
    "slug": "even-tempered-tanuki",
    "name": "Even-Tempered Tanuki",
    "description": {
      "sourceHtml": "<p>You're possessed of a serenity uncommon to other tanuki, who always seem to be flying off the handle. You gain a +1 circumstance bonus to saving throws against emotion effects. If you roll a success at a saving throw against an emotion effect, you get a critical success instead, but when you roll a failure at a saving throw against an emotion effect, you get a critical failure instead.</p>",
      "plainText": "You're possessed of a serenity uncommon to other tanuki, who always seem to be flying off the handle. You gain a +1 circumstance bonus to saving throws against emotion effects. If you roll a success at a saving throw against an emotion effect, you get a critical success instead, but when you roll a failure at a saving throw against an emotion effect, you get a critical failure instead."
    },
    "rarity": "common",
    "traits": [
      "tanuki"
    ],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "item:trait:emotion"
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "failure": "to-critical-failure",
            "success": "to-critical-success"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "item:trait:emotion"
          ],
          "selector": "saving-throw"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "uAo0wK1JL9kePcZb",
      "sourcePath": "pf2e-master/packs/heritages/tanuki/even-tempered-tanuki.json",
      "slug": "even-tempered-tanuki",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tanuki",
      "slug": "tanuki",
      "uuid": "Compendium.pf2e.ancestries.Item.pILFsoGsUQkVF5dZ",
      "sourceId": "pILFsoGsUQkVF5dZ"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:farsight-goloma",
    "kind": "heritage",
    "slug": "farsight-goloma",
    "name": "Farsight Goloma",
    "description": {
      "sourceHtml": "<p>Your eyes have adapted to see more in less than favorable conditions. You gain low-light vision.</p>",
      "plainText": "Your eyes have adapted to see more in less than favorable conditions. You gain low-light vision."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "6JKdAZGa8odFzleS",
      "sourcePath": "pf2e-master/packs/heritages/goloma/farsight-goloma.json",
      "slug": "farsight-goloma",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goloma",
      "slug": "goloma",
      "uuid": "Compendium.pf2e.ancestries.Item.c4secsSNG2AO7I5i",
      "sourceId": "c4secsSNG2AO7I5i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:fey-touched-gnome",
    "kind": "heritage",
    "slug": "fey-touched-gnome",
    "name": "Fey-Touched Gnome",
    "description": {
      "sourceHtml": "<p>The blood of the fey flows through your veins, saturating you with their magic and making you truly one of them. You gain the fey trait, in addition to the gnome and humanoid traits. Choose one cantrip from the primal spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. You can change this cantrip to a different one from the same list once per day by meditating to realign yourself with the First World; this is a 10-minute activity that has the concentrate trait.</p>",
      "plainText": "The blood of the fey flows through your veins, saturating you with their magic and making you truly one of them. You gain the fey trait, in addition to the gnome and humanoid traits. Choose one cantrip from the primal spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. You can change this cantrip to a different one from the same list once per day by meditating to realign yourself with the First World; this is a 10-minute activity that has the concentrate trait."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActorTraits",
        "data": {
          "add": [
            "fey"
          ],
          "key": "ActorTraits"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "D3hTAqgwSank8OyO",
      "sourcePath": "pf2e-master/packs/heritages/gnome/fey-touched-gnome.json",
      "slug": "fey-touched-gnome",
      "image": "systems/pf2e/icons/features/ancestry/fey-touched-gnome.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Gnome",
      "slug": "gnome",
      "uuid": "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
      "sourceId": "CYlfsYLJcBOgqKtD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:fishseeker-shoony",
    "kind": "heritage",
    "slug": "fishseeker-shoony",
    "name": "Fishseeker Shoony",
    "description": {
      "sourceHtml": "<p>You come from a long line of fisherfolk and have inherited the quick reflexes necessary to nab and reel in big game. If you roll a success on an attempt to @UUID[Compendium.pf2e.actionspf2e.Item.Grab an Edge], you get a critical success instead; if you roll a critical failure, you get a failure instead. A creature that rolls a failure on a check to @UUID[Compendium.pf2e.actionspf2e.Item.Disarm] you gets a critical failure instead.</p>",
      "plainText": "You come from a long line of fisherfolk and have inherited the quick reflexes necessary to nab and reel in big game. If you roll a success on an attempt to , you get a critical success instead; if you roll a critical failure, you get a failure instead. A creature that rolls a failure on a check to you gets a critical failure instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "criticalFailure": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:grab-an-edge"
          ],
          "selector": "reflex",
          "type": "save"
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:grab-an-edge"
          ],
          "selector": "reflex",
          "type": "save"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "predicate": [
            "action:grab-an-edge"
          ],
          "selector": "reflex",
          "text": "PF2E.SpecificRule.Shoony.FishseekerShoony.Note",
          "title": "{item|name}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "isJhIPhT4MsjJvoq",
      "sourcePath": "pf2e-master/packs/heritages/shoony/fishseeker-shoony.json",
      "slug": "fishseeker-shoony",
      "image": "systems/pf2e/icons/features/ancestry/fishseeker-shoony.webp",
      "publication": {
        "title": "Pathfinder #153: Life's Long Shadows",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Shoony",
      "slug": "shoony",
      "uuid": "Compendium.pf2e.ancestries.Item.q6rsqYARyOGXZA8F",
      "sourceId": "q6rsqYARyOGXZA8F"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:fleetwind-centaur",
    "kind": "heritage",
    "slug": "fleetwind-centaur",
    "name": "Fleetwind Centaur",
    "description": {
      "sourceHtml": "<p>You're sleek of frame and capable of reaching incredible speeds on hooves alone. Your Speed increases by 5 feet.</p>",
      "plainText": "You're sleek of frame and capable of reaching incredible speeds on hooves alone. Your Speed increases by 5 feet."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "selector": "land-speed",
          "value": 5
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "z16zRyLCeTXan0Ae",
      "sourcePath": "pf2e-master/packs/heritages/centaur/fleetwind-centaur.json",
      "slug": "fleetwind-centaur",
      "image": "icons/skills/movement/arrow-upward-yellow.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Centaur",
      "slug": "centaur",
      "uuid": "Compendium.pf2e.ancestries.Item.pJkQlFTvpQ5GjZ5e",
      "sourceId": "pJkQlFTvpQ5GjZ5e"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:flexible-catfolk",
    "kind": "heritage",
    "slug": "flexible-catfolk",
    "name": "Flexible Catfolk",
    "description": {
      "sourceHtml": "<p>You've inherited flexibility beyond that of most humanoids. You don't treat tight spaces that don't require you to Squeeze as difficult terrain. In addition, you get a +1 circumstance bonus to checks when you attempt to Escape.</p>",
      "plainText": "You've inherited flexibility beyond that of most humanoids. You don't treat tight spaces that don't require you to Squeeze as difficult terrain. In addition, you get a +1 circumstance bonus to checks when you attempt to Escape."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "To Escape (Flexible Catfolk)",
          "predicate": [
            "action:escape"
          ],
          "selector": [
            "acrobatics",
            "athletics",
            "attack"
          ],
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "TDc9MXLXkgEFoKdD",
      "sourcePath": "pf2e-master/packs/heritages/catfolk/flexible-catfolk.json",
      "slug": "flexible-catfolk",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Catfolk",
      "slug": "catfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
      "sourceId": "972EkpJOPv9KkQIW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:flying-animal",
    "kind": "heritage",
    "slug": "flying-animal",
    "name": "Flying Animal",
    "description": {
      "sourceHtml": "<p>You are an animal that can take flight for long or sustained bursts, such as an eagle, bat, bee, or flying squirrel.</p>\n<p>The awakening process has disrupted your ability to fly as freely as you once did. What used to be an automatic process is now one that you must apply some thought to until it becomes automatic once again. You can still slow your descent, so you take no damage from falling, regardless of the distance you fall. Most flying awakened animals choose the Take Flight ancestry feat at 1st level to regain a limited ability to fly. You have a land Speed of 20 feet and one animal attack of your choice (typically beak, claw, jaws, talon, or wing).</p>",
      "plainText": "You are an animal that can take flight for long or sustained bursts, such as an eagle, bat, bee, or flying squirrel. The awakening process has disrupted your ability to fly as freely as you once did. What used to be an automatic process is now one that you must apply some thought to until it becomes automatic once again. You can still slow your descent, so you take no damage from falling, regardless of the distance you fall. Most flying awakened animals choose the Take Flight ancestry feat at 1st level to regain a limited ability to fly. You have a land Speed of 20 feet and one animal attack of your choice (typically beak, claw, jaws, talon, or wing)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "land",
          "value": 20
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.ancestryfeatures.Item.Animal Attack"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "QZv2taQQAdeR8Vmg",
      "sourcePath": "pf2e-master/packs/heritages/awakened-animal/flying-animal.json",
      "slug": "flying-animal",
      "image": "icons/creatures/birds/corvid-flying-wings-purple.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Awakened Animal",
      "slug": "awakened-animal",
      "uuid": "Compendium.pf2e.ancestries.Item.GFOgV3MzWkYwJoJW",
      "sourceId": "GFOgV3MzWkYwJoJW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:fodder-skeleton",
    "kind": "heritage",
    "slug": "fodder-skeleton",
    "name": "Fodder Skeleton",
    "description": {
      "sourceHtml": "<p>Humans, and those who are physically closest to them, are the favored material of necromancers. They are readily available, and their physiology has been studied the most extensively, so these skeletons can be easily mass-produced. Despite their name, fodder skeletons make rather mobile foot soldiers due to how efficiently they transfer necromantic energy within their bodies. You have a base Speed of 30 feet, instead of 25 feet.</p>",
      "plainText": "Humans, and those who are physically closest to them, are the favored material of necromancers. They are readily available, and their physiology has been studied the most extensively, so these skeletons can be easily mass-produced. Despite their name, fodder skeletons make rather mobile foot soldiers due to how efficiently they transfer necromantic energy within their bodies. You have a base Speed of 30 feet, instead of 25 feet."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "land",
          "value": 30
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "RZHr0olieS6YdYE9",
      "sourcePath": "pf2e-master/packs/heritages/skeleton/fodder-skeleton.json",
      "slug": "fodder-skeleton",
      "image": "icons/commodities/bones/bones-stack-yellow.webp",
      "publication": {
        "title": "Pathfinder Book of the Dead",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Skeleton",
      "slug": "skeleton",
      "uuid": "Compendium.pf2e.ancestries.Item.58rL5sg2y4arW1i5",
      "sourceId": "58rL5sg2y4arW1i5"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:forge-dwarf",
    "kind": "heritage",
    "slug": "forge-dwarf",
    "name": "Forge Dwarf",
    "description": {
      "sourceHtml": "<p>You have a remarkable adaptation to hot environments. This grants you fire resistance equal to half your level (minimum 1), and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).</p>",
      "plainText": "You have a remarkable adaptation to hot environments. This grants you fire resistance equal to half your level (minimum 1), and you treat environmental heat effects as if they were one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "fire",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "5CqsBKCZuGON53Hk",
      "sourcePath": "pf2e-master/packs/heritages/dwarf/forge-dwarf.json",
      "slug": "forge-dwarf",
      "image": "systems/pf2e/icons/features/ancestry/forge-dwarf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Dwarf",
      "slug": "dwarf",
      "uuid": "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
      "sourceId": "BYj5ZvlXZdpaEgA6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:forge-blessed-dwarf",
    "kind": "heritage",
    "slug": "forge-blessed-dwarf",
    "name": "Forge-Blessed Dwarf",
    "description": {
      "sourceHtml": "<p>You are from a family in Highhelm that venerates a particular dwarven deity above all others. Your birth was blessed by your family's patron deity, granting you a fraction of their power. Choose one deity from the dwarven pantheon. You can cast the 1st-rank spell they grant clerics (such as @UUID[Compendium.pf2e.spells-srd.Item.Soothe] if your family's patron is Bolka) as an innate divine spell once per week.</p>",
      "plainText": "You are from a family in Highhelm that venerates a particular dwarven deity above all others. Your birth was blessed by your family's patron deity, granting you a fraction of their power. Choose one deity from the dwarven pantheon. You can cast the 1st-rank spell they grant clerics (such as if your family's patron is Bolka) as an innate divine spell once per week."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "erZPj5701KiVAqoi",
      "sourcePath": "pf2e-master/packs/heritages/dwarf/forge-blessed-dwarf.json",
      "slug": "forge-blessed-dwarf",
      "image": "icons/tools/smithing/furnace-fire-metal-orange.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Highhelm",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Dwarf",
      "slug": "dwarf",
      "uuid": "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
      "sourceId": "BYj5ZvlXZdpaEgA6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:frightful-goloma",
    "kind": "heritage",
    "slug": "frightful-goloma",
    "name": "Frightful Goloma",
    "description": {
      "sourceHtml": "<p>Your face has a particularly off-putting appearance. You are trained in Intimidation (or another skill of your choice if you were already trained in Intimidation) and gain the @UUID[Compendium.pf2e.feats-srd.Item.Intimidating Glare] skill feat as a bonus feat.</p>\n<hr />\n<p><em>Note: If you are already trained in the skill provided by this feat, you need to manually select an alternative skill.</em></p>",
      "plainText": "Your face has a particularly off-putting appearance. You are trained in Intimidation (or another skill of your choice if you were already trained in Intimidation) and gain the skill feat as a bonus feat. . Note: If you are already trained in the skill provided by this feat, you need to manually select an alternative skill."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.intimidation.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Intimidating Glare"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "KJ2dSDXP9d5hJHzd",
      "sourcePath": "pf2e-master/packs/heritages/goloma/frightful-goloma.json",
      "slug": "frightful-goloma",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goloma",
      "slug": "goloma",
      "uuid": "Compendium.pf2e.ancestries.Item.c4secsSNG2AO7I5i",
      "sourceId": "c4secsSNG2AO7I5i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:frilled-lizardfolk",
    "kind": "heritage",
    "slug": "frilled-lizardfolk",
    "name": "Frilled Lizardfolk",
    "description": {
      "sourceHtml": "<p>You can flare your neck frill and flex your dorsal spines, Demoralizing your foes. When you do, @UUID[Compendium.pf2e.actionspf2e.Item.Demoralize] loses the auditory trait and gains the visual trait, and you don't take a penalty when you attempt to Demoralize a creature that doesn't understand your language. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Threatening Approach] action.</p>",
      "plainText": "You can flare your neck frill and flex your dorsal spines, Demoralizing your foes. When you do, loses the auditory trait and gains the visual trait, and you don't take a penalty when you attempt to Demoralize a creature that doesn't understand your language. You also gain the action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Threatening Approach"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "6rIIsZg3tOyIU3g3",
      "sourcePath": "pf2e-master/packs/heritages/lizardfolk/frilled-lizardfolk.json",
      "slug": "frilled-lizardfolk",
      "image": "systems/pf2e/icons/features/ancestry/frilled-lizardfolk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Lizardfolk",
      "slug": "lizardfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
      "sourceId": "HWEgF7Gmoq55VhTL"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:frozen-wind-kitsune",
    "kind": "heritage",
    "slug": "frozen-wind-kitsune",
    "name": "Frozen Wind Kitsune",
    "description": {
      "sourceHtml": "<p>Your ancestors crossed the Crown of the World or resided on snowy peaks. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on). Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form.</p>",
      "plainText": "Your ancestors crossed the Crown of the World or resided on snowy peaks. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on). Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human), called a tailless form."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "kHT9dFJt5yTjeYoB",
      "sourcePath": "pf2e-master/packs/heritages/kitsune/frozen-wind-kitsune.json",
      "slug": "frozen-wind-kitsune",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kitsune",
      "slug": "kitsune",
      "uuid": "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
      "sourceId": "4BL5wf1VF9feC2rY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:fruit-leshy",
    "kind": "heritage",
    "slug": "fruit-leshy",
    "name": "Fruit Leshy",
    "description": {
      "sourceHtml": "<p>Your body continually produces small fruits imbued with primal magic. At dawn each day, a new fruit ripens. You or an ally can remove this fruit as an Interact action. If a living creature that can derive sustenance from fruit consumes it as an Interact action within the next hour, they regain @Damage[(ceil(@actor.level/2))d8[vitality,healing]|shortLabel] Hit Points, plus an additional 1d8 Hit Points for every 2 of your levels beyond 1st. This effect has the healing and vitality traits.</p>",
      "plainText": "Your body continually produces small fruits imbued with primal magic. At dawn each day, a new fruit ripens. You or an ally can remove this fruit as an Interact action. If a living creature that can derive sustenance from fruit consumes it as an Interact action within the next hour, they regain (ceil(@actor.level/2))d8[vitality,healing|shortLabel] Hit Points, plus an additional 1d8 Hit Points for every 2 of your levels beyond 1st. This effect has the healing and vitality traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "L6zfGzLMDLHbZ7VV",
      "sourcePath": "pf2e-master/packs/heritages/leshy/fruit-leshy.json",
      "slug": "fruit-leshy",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:full-moon-sarangay",
    "kind": "heritage",
    "slug": "full-moon-sarangay",
    "name": "Full Moon Sarangay",
    "description": {
      "sourceHtml": "<p>You were raised in a shamanic tradition transcending a single sarangay community or heritage. You spent your youth under the guidance of a shaman elder, who taught you to commune with spirits in the hope that you'll one day use that knowledge to advise and guide your people. Those from your tradition are priests or shamans who channel the spirits and see things others can't. You gain an ancestry attribute boost to Wisdom instead of Strength, and you gain an attribute flaw in Constitution instead of Wisdom. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Folk Healer] ancestry feat.</p>",
      "plainText": "You were raised in a shamanic tradition transcending a single sarangay community or heritage. You spent your youth under the guidance of a shaman elder, who taught you to commune with spirits in the hope that you'll one day use that knowledge to advise and guide your people. Those from your tradition are priests or shamans who channel the spirits and see things others can't. You gain an ancestry attribute boost to Wisdom instead of Strength, and you gain an attribute flaw in Constitution instead of Wisdom. You gain the ancestry feat."
    },
    "rarity": "common",
    "traits": [
      "sarangay"
    ],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Folk Healer"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "6gK4A6dtN4LCpCXS",
      "sourcePath": "pf2e-master/packs/heritages/sarangay/full-moon-sarangay.json",
      "slug": "full-moon-sarangay",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sarangay",
      "slug": "sarangay",
      "uuid": "Compendium.pf2e.ancestries.Item.7mpMGhVoaPANJnZ8",
      "sourceId": "7mpMGhVoaPANJnZ8"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:fungus-leshy",
    "kind": "heritage",
    "slug": "fungus-leshy",
    "name": "Fungus Leshy",
    "description": {
      "sourceHtml": "<p>Your body was made from fungi that grows in the shade of caves and trees, and you are at home in dark caverns and warrens. You gain darkvision. You lose the plant trait and gain the fungus trait.</p>",
      "plainText": "Your body was made from fungi that grows in the shade of caves and trees, and you are at home in dark caverns and warrens. You gain darkvision. You lose the plant trait and gain the fungus trait."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActorTraits",
        "data": {
          "add": [
            "fungus"
          ],
          "key": "ActorTraits",
          "remove": [
            "plant"
          ]
        }
      },
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "87h0jepQuzIbN7jN",
      "sourcePath": "pf2e-master/packs/heritages/leshy/fungus-leshy.json",
      "slug": "fungus-leshy",
      "image": "systems/pf2e/icons/features/ancestry/fungus-leshy.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:gandharva",
    "kind": "heritage",
    "slug": "gandharva",
    "name": "Gandharva",
    "description": {
      "sourceHtml": "<p>You're descended from the self-proclaimed musicians, poets, and dancers of the gods, with a body that's part humanoid and part horse or bird. If you gain wings, they come in many different brilliant colors. Due to your celestial connection, the tradition of any spells or magical abilities you gain from a sprite heritage or ancestry feat is divine instead of its normal tradition.</p>\n<p>You become trained in Performance (or another skill of your choice if you're already trained in Performance), and you can cast @UUID[Compendium.pf2e.spells-srd.Item.Summon Instrument] as a divine innate cantrip.</p>",
      "plainText": "You're descended from the self-proclaimed musicians, poets, and dancers of the gods, with a body that's part humanoid and part horse or bird. If you gain wings, they come in many different brilliant colors. Due to your celestial connection, the tradition of any spells or magical abilities you gain from a sprite heritage or ancestry feat is divine instead of its normal tradition. You become trained in Performance (or another skill of your choice if you're already trained in Performance), and you can cast as a divine innate cantrip."
    },
    "rarity": "uncommon",
    "traits": [
      "sprite"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.performance.rank",
          "value": 1
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:summon-instrument",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:summon-instrument",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:sprite"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "lBSO9RuEUv2P4rnp",
      "sourcePath": "pf2e-master/packs/heritages/sprite/gandharva.json",
      "slug": "gandharva",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sprite",
      "slug": "sprite",
      "uuid": "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
      "sourceId": "TRqoeYfGAFjQbviF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ghost-bull-minotaur",
    "kind": "heritage",
    "slug": "ghost-bull-minotaur",
    "name": "Ghost Bull Minotaur",
    "description": {
      "sourceHtml": "<p>Your fur is as pale as death, possibly from some connection you or your family has to the afterlife, which lets you supernaturally find your way. You can cast @UUID[Compendium.pf2e.spells-srd.Item.Know the Way] as an occult innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. In addition, you gain a +1 circumstance bonus against spells or effects that cause the @UUID[Compendium.pf2e.conditionitems.Item.Confused] condition.</p>",
      "plainText": "Your fur is as pale as death, possibly from some connection you or your family has to the afterlife, which lets you supernaturally find your way. You can cast as an occult innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. In addition, you gain a +1 circumstance bonus against spells or effects that cause the condition."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "inflicts:confused"
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:know-the-way",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:know-the-way",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:minotaur"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "bHgGh3vtXL7fkhIy",
      "sourcePath": "pf2e-master/packs/heritages/minotaur/ghost-bull-minotaur.json",
      "slug": "ghost-bull-minotaur",
      "image": "icons/creatures/magical/spirit-undead-horned-blue.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Minotaur",
      "slug": "minotaur",
      "uuid": "Compendium.pf2e.ancestries.Item.3wQ49DoWFYQgVsq6",
      "sourceId": "3wQ49DoWFYQgVsq6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ghost-poppet",
    "kind": "heritage",
    "slug": "ghost-poppet",
    "name": "Ghost Poppet",
    "description": {
      "sourceHtml": "<p>You awakened when a bit of another person's life force and a fragment of their soul-possibly, but not always, at the moment of their death-found its way into your constructed body. You don't remember anything more than vague flashes of your \"before life,\" but that life essence still protects you. You gain resistance to void damage equal to half your level (minimum 1).</p>",
      "plainText": "You awakened when a bit of another person's life force and a fragment of their soul-possibly, but not always, at the moment of their death-found its way into your constructed body. You don't remember anything more than vague flashes of your \"before life,\" but that life essence still protects you. You gain resistance to void damage equal to half your level (minimum 1)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "void",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Je15UGsLWYaaGJSW",
      "sourcePath": "pf2e-master/packs/heritages/poppet/ghost-poppet.json",
      "slug": "ghost-poppet",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Grand Bazaar",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Poppet",
      "slug": "poppet",
      "uuid": "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
      "sourceId": "6F2fSFC1Eo1JdpY4"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:glacier-cavern-minotaur",
    "kind": "heritage",
    "slug": "glacier-cavern-minotaur",
    "name": "Glacier Cavern Minotaur",
    "description": {
      "sourceHtml": "<p>Your fur grows thick and warm, well suited to the frozen mountains in which you reside. You gain cold resistance equal to half your level (minimum of 1). Environmental cold effects are one step less extreme for you.</p>",
      "plainText": "Your fur grows thick and warm, well suited to the frozen mountains in which you reside. You gain cold resistance equal to half your level (minimum of 1). Environmental cold effects are one step less extreme for you."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "jP9ORt0jgY5VHyD3",
      "sourcePath": "pf2e-master/packs/heritages/minotaur/glacier-cavern-minotaur.json",
      "slug": "glacier-cavern-minotaur",
      "image": "icons/magic/water/ice-crystal-white.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Minotaur",
      "slug": "minotaur",
      "uuid": "Compendium.pf2e.ancestries.Item.3wQ49DoWFYQgVsq6",
      "sourceId": "3wQ49DoWFYQgVsq6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:gourd-leshy",
    "kind": "heritage",
    "slug": "gourd-leshy",
    "name": "Gourd Leshy",
    "description": {
      "sourceHtml": "<p>You have a large gourd for a skull, and since you don't have a physical brain, you can use the space inside your head. You can store a collection of up to 1 Bulk of objects within your head. The DC of checks to @UUID[Compendium.pf2e.actionspf2e.Item.Steal] objects from inside your head increases by 4. Additionally, if you store only one object within your head, you can draw it effortlessly into your hand as part of another action to use the object. Drawing the item grants this other action the manipulate trait.</p>",
      "plainText": "You have a large gourd for a skull, and since you don't have a physical brain, you can use the space inside your head. You can store a collection of up to 1 Bulk of objects within your head. The DC of checks to objects from inside your head increases by 4. Additionally, if you store only one object within your head, you can draw it effortlessly into your hand as part of another action to use the object. Drawing the item grants this other action the manipulate trait."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "RollOption",
        "data": {
          "domain": "all",
          "key": "RollOption",
          "label": "PF2E.SpecificRule.ToggleProperty.GourdHead",
          "option": "gourd-head",
          "toggleable": true
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:steal",
            "gourd-head"
          ],
          "selector": "perception-dc",
          "value": 4
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "wNnsjird4OQe0s6p",
      "sourcePath": "pf2e-master/packs/heritages/leshy/gourd-leshy.json",
      "slug": "gourd-leshy",
      "image": "systems/pf2e/icons/features/ancestry/goudy-leshy.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:grave-orc",
    "kind": "heritage",
    "slug": "grave-orc",
    "name": "Grave Orc",
    "description": {
      "sourceHtml": "<p>You were exposed to powerful necromantic energies that should have killed you—but you survived. Your skin is cold, clammy, and gray. You gain resistance to void damage equal to half your level (minimum 1). You also gain a +1 circumstance bonus to saving throws against effects with the death or void trait.</p>",
      "plainText": "You were exposed to powerful necromantic energies that should have killed you—but you survived. Your skin is cold, clammy, and gray. You gain resistance to void damage equal to half your level (minimum 1). You also gain a +1 circumstance bonus to saving throws against effects with the death or void trait."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "void",
          "value": "max(1,floor(@actor.level/2))"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "death",
                "void"
              ]
            }
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "VvEAFoxuddYNBmNc",
      "sourcePath": "pf2e-master/packs/heritages/orc/grave-orc.json",
      "slug": "grave-orc",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Orc",
      "slug": "orc",
      "uuid": "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
      "sourceId": "lSGWXjcbOa6O5fTx"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:great-kholo",
    "kind": "heritage",
    "slug": "great-kholo",
    "name": "Great Kholo",
    "description": {
      "sourceHtml": "<p>You're an imposing, powerful kholo, with tawny fur and brown spots on your hide. You gain 10 Hit Points from your ancestry instead of 8 and gain a +1 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Reposition], @UUID[Compendium.pf2e.actionspf2e.Item.Shove], or @UUID[Compendium.pf2e.actionspf2e.Item.Trip].</p>",
      "plainText": "You're an imposing, powerful kholo, with tawny fur and brown spots on your hide. You gain 10 Hit Points from your ancestry instead of 8 and gain a +1 circumstance bonus to Athletics checks to , , or ."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "action:shove",
                "action:trip",
                "action:reposition"
              ]
            }
          ],
          "selector": "athletics",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.attributes.ancestryhp",
          "value": 10
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "SqEcb1c3yeoJMxm0",
      "sourcePath": "pf2e-master/packs/heritages/kholo/great-kholo.json",
      "slug": "great-kholo",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kholo",
      "slug": "kholo",
      "uuid": "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
      "sourceId": "vxbQ1Yw4qwgjTzqo"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:grig",
    "kind": "heritage",
    "slug": "grig",
    "name": "Grig",
    "description": {
      "sourceHtml": "<p>You have the hindquarters of a cricket and adore art and music. Your cricket legs grant you a +2 circumstance bonus on Athletics checks to High Jump or Long Jump, and you gain @UUID[Compendium.pf2e.spells-srd.Item.Ghost Sound] as a primal innate cantrip.</p>",
      "plainText": "You have the hindquarters of a cricket and adore art and music. Your cricket legs grant you a +2 circumstance bonus on Athletics checks to High Jump or Long Jump, and you gain as a primal innate cantrip."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "PF2E.SkillVariant.HighJumpOrLongJump",
          "predicate": [
            {
              "or": [
                "action:high-jump",
                "action:long-jump"
              ]
            }
          ],
          "selector": "athletics",
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:ghost-sound",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:ghost-sound",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:sprite"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "gfXSF1TafBAmZo2u",
      "sourcePath": "pf2e-master/packs/heritages/sprite/grig.json",
      "slug": "grig",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sprite",
      "slug": "sprite",
      "uuid": "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
      "sourceId": "TRqoeYfGAFjQbviF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:gutsy-halfling",
    "kind": "heritage",
    "slug": "gutsy-halfling",
    "name": "Gutsy Halfling",
    "description": {
      "sourceHtml": "<p>Your family line is known for keeping a level head and staving off fear when the chips were down. When you roll a success on a saving throw against an emotion effect, you get a critical success instead.</p>",
      "plainText": "Your family line is known for keeping a level head and staving off fear when the chips were down. When you roll a success on a saving throw against an emotion effect, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "emotion"
          ],
          "selector": "saving-throw",
          "type": "save"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Eq42wZ5OTweJLnLU",
      "sourcePath": "pf2e-master/packs/heritages/halfling/gutsy-halfling.json",
      "slug": "gutsy-halfling",
      "image": "systems/pf2e/icons/features/ancestry/gutsy-halfling.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Halfling",
      "slug": "halfling",
      "uuid": "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
      "sourceId": "GgZAHbrjnzWOZy2v"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:half-moon-sarangay",
    "kind": "heritage",
    "slug": "half-moon-sarangay",
    "name": "Half Moon Sarangay",
    "description": {
      "sourceHtml": "<p>You come from one of many traveling communities that migrate seasonally along Tian Xia's vast rivers and mountains, bringing news and tidings to villages along their path. Your people connect sarangay communities to one another across vast distances and are symbolized by the half moon, which conjoins the light and dark; so too do you conjoin the dark from the bright, the red from the blue, the wind from the sea. Your ancestors were tall and burly with shiny black fur, light spots or markings, and short, tightly curved horns. You become trained in two Lore skills of your choice, and you gain a +1 circumstance bonus to Recall Knowledge checks using those skills.</p>",
      "plainText": "You come from one of many traveling communities that migrate seasonally along Tian Xia's vast rivers and mountains, bringing news and tidings to villages along their path. Your people connect sarangay communities to one another across vast distances and are symbolized by the half moon, which conjoins the light and dark; so too do you conjoin the dark from the bright, the red from the blue, the wind from the sea. Your ancestors were tall and burly with shiny black fur, light spots or markings, and short, tightly curved horns. You become trained in two Lore skills of your choice, and you gain a +1 circumstance bonus to Recall Knowledge checks using those skills."
    },
    "rarity": "common",
    "traits": [
      "sarangay"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ImdAt4Ma9GfaNuZW",
      "sourcePath": "pf2e-master/packs/heritages/sarangay/half-moon-sarangay.json",
      "slug": "half-moon-sarangay",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sarangay",
      "slug": "sarangay",
      "uuid": "Compendium.pf2e.ancestries.Item.7mpMGhVoaPANJnZ8",
      "sourceId": "7mpMGhVoaPANJnZ8"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:hardshell-surki",
    "kind": "heritage",
    "slug": "hardshell-surki",
    "name": "Hardshell Surki",
    "description": {
      "sourceHtml": "<p>Your carapace is much denser than that of other surkis, offering you a suit of your very own armor. Your carapace is medium armor in the plate armor group that grants a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of +3, and has the comfort trait. You can never wear other armor or remove your carapace. You can etch armor runes onto your carapace.</p>\n<ul>\n<li><strong>Evolution</strong> The magical circulatory system that runs between your nodes has become a reinforcing network that strengthens your carapace with magical energy. If you're struck by a critical hit that deals physical damage, you can use your reaction to attempt a @Check[flat|dc:17]. If successful, the attack becomes a normal hit.</li>\n<li><strong>Evolution</strong> Your abdominal nodes can project a field around you that guards you against the type of magic you're most familiar with. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Dampening Harmonics] action.</li>\n</ul>",
      "plainText": "Your carapace is much denser than that of other surkis, offering you a suit of your very own armor. Your carapace is medium armor in the plate armor group that grants a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of +3, and has the comfort trait. You can never wear other armor or remove your carapace. You can etch armor runes onto your carapace. Evolution The magical circulatory system that runs between your nodes has become a reinforcing network that strengthens your carapace with magical energy. If you're struck by a critical hit that deals physical damage, you can use your reaction to attempt a flat check. If successful, the attack becomes a normal hit. Evolution Your abdominal nodes can project a field around you that guards you against the type of magic you're most familiar with. You gain the action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "flags.pf2e.surki.evolutions",
          "value": {
            "label": "PF2E.SpecificRule.Surki.Evolutions.StrengthenedCarapace",
            "predicate": [
              {
                "not": "evolution:strengthened-carapace"
              }
            ],
            "value": "strengthened-carapace"
          }
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "flags.pf2e.surki.evolutions",
          "value": {
            "label": "PF2E.SpecificRule.Surki.Evolutions.DampeningField",
            "predicate": [
              {
                "not": "evolution:dampening-field"
              }
            ],
            "value": "dampening-field"
          }
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "allowDuplicate": false,
          "key": "GrantItem",
          "predicate": [
            "evolution:dampening-field"
          ],
          "reevaluateOnUpdate": true,
          "uuid": "Compendium.pf2e.actionspf2e.Item.Dampening Harmonics"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.equipment-srd.Item.Hardshell Surki Carapace"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "qKn9k3TQt0gsOLn7",
      "sourcePath": "pf2e-master/packs/heritages/surki/hardshell-surki.json",
      "slug": "hardshell-surki",
      "image": "icons/creatures/invertebrates/snail-spiral-green.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Surki",
      "slug": "surki",
      "uuid": "Compendium.pf2e.ancestries.Item.ALOmLePjbc37ca3Y",
      "sourceId": "ALOmLePjbc37ca3Y"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:healer-samsaran",
    "kind": "heritage",
    "slug": "healer-samsaran",
    "name": "Healer Samsaran",
    "description": {
      "sourceHtml": "<p>In seeking enlightenment, your past incarnations have wandered away from the ancestral homelands of Zi Ha, exploring the different nations of Tian Xia and elsewhere in Golarion. Your past incarnations had dangerous encounters while traveling, and you frequently have flashbacks to healing wounds. You become trained in Medicine. If you would automatically become trained in Medicine (from your background or class, for example), you instead become trained in a skill of your choice.</p>\n<p>When you use Medicine to @UUID[Compendium.pf2e.actionspf2e.Item.Treat Wounds] on yourself, you can use your special techniques to add your level to the Hit Points you regain from the treatment.</p>",
      "plainText": "In seeking enlightenment, your past incarnations have wandered away from the ancestral homelands of Zi Ha, exploring the different nations of Tian Xia and elsewhere in Golarion. Your past incarnations had dangerous encounters while traveling, and you frequently have flashbacks to healing wounds. You become trained in Medicine. If you would automatically become trained in Medicine (from your background or class, for example), you instead become trained in a skill of your choice. When you use Medicine to on yourself, you can use your special techniques to add your level to the Hit Points you regain from the treatment."
    },
    "rarity": "common",
    "traits": [
      "samsaran"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.medicine.rank",
          "value": 1
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:treat-wounds",
            "check:statistic:medicine",
            "origin:signature:{actor|signature}"
          ],
          "selector": "healing-received",
          "value": "@actor.level"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "NK88lPzi3SDAT8w5",
      "sourcePath": "pf2e-master/packs/heritages/samsaran/healer-samsaran.json",
      "slug": "healer-samsaran",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Samsaran",
      "slug": "samsaran",
      "uuid": "Compendium.pf2e.ancestries.Item.l7vjMIbPAUvEIosU",
      "sourceId": "l7vjMIbPAUvEIosU"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:heavenscribe-kobold",
    "kind": "heritage",
    "slug": "heavenscribe-kobold",
    "name": "Heavenscribe Kobold",
    "description": {
      "sourceHtml": "<p>Your connection to wise and celestial imperial dragons has led others to seek your advice. You can speak Draconic. Whenever you critically fail a Diplomacy check to @UUID[Compendium.pf2e.actionspf2e.Item.Make an Impression] or @UUID[Compendium.pf2e.actionspf2e.Item.Request], you get a failure instead.</p>",
      "plainText": "Your connection to wise and celestial imperial dragons has led others to seek your advice. You can speak Draconic. Whenever you critically fail a Diplomacy check to or , you get a failure instead."
    },
    "rarity": "uncommon",
    "traits": [
      "kobold"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "system.build.languages.granted",
          "value": {
            "slug": "draconic",
            "source": "{item|name}"
          }
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            {
              "or": [
                "action:make-an-impression",
                "action:request"
              ]
            }
          ],
          "selector": "diplomacy"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "G61eBHmsQaPM4Xge",
      "sourcePath": "pf2e-master/packs/heritages/kobold/heavenscribe-kobold.json",
      "slug": "heavenscribe-kobold",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kobold",
      "slug": "kobold",
      "uuid": "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
      "sourceId": "7oQxL6wgsokD3QXG"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:hillock-halfling",
    "kind": "heritage",
    "slug": "hillock-halfling",
    "name": "Hillock Halfling",
    "description": {
      "sourceHtml": "<p>Accustomed to a calm life in the hills, your people find rest and relaxation especially replenishing, particularly when indulging in creature comforts. When you regain Hit Points overnight, add your level to the Hit Points regained. When anyone uses the Medicine skill to @UUID[Compendium.pf2e.actionspf2e.Item.Treat Wounds]{Treat your Wounds}, you can eat a snack to add your level to the Hit Points you regain from their treatment.</p>",
      "plainText": "Accustomed to a calm life in the hills, your people find rest and relaxation especially replenishing, particularly when indulging in creature comforts. When you regain Hit Points overnight, add your level to the Hit Points regained. When anyone uses the Medicine skill to Treat your Wounds, you can eat a snack to add your level to the Hit Points you regain from their treatment."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "system.attributes.hp.recoveryAddend",
          "value": "@actor.level"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:treat-wounds"
          ],
          "selector": "healing-received",
          "value": "@actor.level"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Mj7uHxxVkRUlOFwJ",
      "sourcePath": "pf2e-master/packs/heritages/halfling/hillock-halfling.json",
      "slug": "hillock-halfling",
      "image": "systems/pf2e/icons/features/ancestry/hillock-halfling.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Halfling",
      "slug": "halfling",
      "uuid": "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
      "sourceId": "GgZAHbrjnzWOZy2v"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:hold-scarred-orc",
    "kind": "heritage",
    "slug": "hold-scarred-orc",
    "name": "Hold-Scarred Orc",
    "description": {
      "sourceHtml": "<p>You are part of an orc community that participates in ritual scarification or tattooing. The marks on your skin show your exceptional hardiness and vitality. You gain 12 Hit Points from your ancestry instead of 10. You also gain the @UUID[Compendium.pf2e.feats-srd.Item.Diehard] feat.</p>",
      "plainText": "You are part of an orc community that participates in ritual scarification or tattooing. The marks on your skin show your exceptional hardiness and vitality. You gain 12 Hit Points from your ancestry instead of 10. You also gain the feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.attributes.ancestryhp",
          "value": 12
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Diehard"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "MTTU2t7x6TjvUDnE",
      "sourcePath": "pf2e-master/packs/heritages/orc/hold-scarred-orc.json",
      "slug": "hold-scarred-orc",
      "image": "systems/pf2e/icons/features/ancestry/hold-scarred-orc.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Orc",
      "slug": "orc",
      "uuid": "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
      "sourceId": "lSGWXjcbOa6O5fTx"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:hooded-nagaji",
    "kind": "heritage",
    "slug": "hooded-nagaji",
    "name": "Hooded Nagaji",
    "description": {
      "sourceHtml": "<p>You bear the hooded head of a spitting cobra, and like such cobras, you can shoot streams of venom from your mouth. You gain a venomous spit ranged unarmed attack with a range increment of 10 feet that deals 1d4 poison damage. On a critical hit, the target takes persistent poison damage equal to the number of weapon damage dice. Your spit doesn't have a weapon group or a critical specialization effect.</p>",
      "plainText": "You bear the hooded head of a spitting cobra, and like such cobras, you can shoot streams of venom from your mouth. You gain a venomous spit ranged unarmed attack with a range increment of 10 feet that deals 1d4 poison damage. On a critical hit, the target takes persistent poison damage equal to the number of weapon damage dice. Your spit doesn't have a weapon group or a critical specialization effect."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "poison",
              "dice": 1,
              "die": "d4"
            }
          },
          "img": "icons/magic/water/tendrils-ice-growth.webp",
          "key": "Strike",
          "label": "PF2E.SpecificRule.Nagaji.VenomSpit.StrikeLabel",
          "predicate": [
            {
              "not": "feat:venom-spit"
            }
          ],
          "range": {
            "increment": 10
          },
          "traits": [
            "unarmed"
          ]
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "criticalSuccess"
          ],
          "predicate": [
            {
              "not": "feat:venom-spit"
            }
          ],
          "selector": "{item|_id}-damage",
          "text": "PF2E.SpecificRule.Nagaji.VenomSpit.CriticalNote",
          "title": "{item|name}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "tf3edMCyS15GhFPx",
      "sourcePath": "pf2e-master/packs/heritages/nagaji/hooded-nagaji.json",
      "slug": "hooded-nagaji",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Nagaji",
      "slug": "nagaji",
      "uuid": "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
      "sourceId": "J7T7bDLaQGoY1sMF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:hopeful-athamaru",
    "kind": "heritage",
    "slug": "hopeful-athamaru",
    "name": "Hopeful Athamaru",
    "description": {
      "sourceHtml": "<p>You have begun to prepare yourself to become an athamaru matriarch, and are likely stepping outside of your community to better prepare yourself as a leader. As part of the physical change, you are substantially taller than you once were. Instead of Medium, your size is Large. In addition, you instill your allies with a feeling of hopefulness. You have a 10-foot aura that grants any ally in it a +1 circumstance bonus to saving throws against fear; this is an emotion and mental effect.</p>",
      "plainText": "You have begun to prepare yourself to become an athamaru matriarch, and are likely stepping outside of your community to better prepare yourself as a leader. As part of the physical change, you are substantially taller than you once were. Instead of Medium, your size is Large. In addition, you instill your allies with a feeling of hopefulness. You have a 10-foot aura that grants any ally in it a +1 circumstance bonus to saving throws against fear; this is an emotion and mental effect."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "large"
        }
      },
      {
        "key": "Aura",
        "data": {
          "effects": [
            {
              "affects": "allies",
              "uuid": "Compendium.pf2e.feat-effects.Item.Effect: Hopeful Athamaru"
            }
          ],
          "key": "Aura",
          "radius": 10,
          "traits": [
            "emotion",
            "mental"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "yEQSw61sNRvgPy4T",
      "sourcePath": "pf2e-master/packs/heritages/athamaru/hopeful-athamaru.json",
      "slug": "hopeful-athamaru",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Athamaru",
      "slug": "athamaru",
      "uuid": "Compendium.pf2e.ancestries.Item.Cg1AMgp3zrGmimWd",
      "sourceId": "Cg1AMgp3zrGmimWd"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:hungerseed",
    "kind": "heritage",
    "slug": "hungerseed",
    "name": "Hungerseed",
    "description": {
      "sourceHtml": "<p>One of your parents was an oni or a hungerseed. You possess a pair of horns, ranging in size from conical nubs to lengthy protrusions. You might have other signs of your parentage, such as colorful skin, fangs and claws, or a third eye in your forehead. You gain the oni trait. You gain a horns unarmed attack that deals 1d6 piercing damage and is in the brawling group. You can select from hungerseed feats and feats from your other parent's ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "One of your parents was an oni or a hungerseed. You possess a pair of horns, ranging in size from conical nubs to lengthy protrusions. You might have other signs of your parentage, such as colorful skin, fangs and claws, or a third eye in your forehead. You gain the oni trait. You gain a horns unarmed attack that deals 1d6 piercing damage and is in the brawling group. You can select from hungerseed feats and feats from your other parent's ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "oni"
    ],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "piercing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "icons/commodities/bones/horn-simple-grey.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Horns",
          "slug": "horns",
          "traits": [
            "unarmed"
          ]
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "weapon",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:id:{item|id}"
          ],
          "property": "other-tags",
          "value": "hungerseed-horns"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "9FlpW1nSczH8f85v",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/hungerseed.json",
      "slug": "hungerseed",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:hunter-automaton",
    "kind": "heritage",
    "slug": "hunter-automaton",
    "name": "Hunter Automaton",
    "description": {
      "sourceHtml": "<p>You were designed to serve as a scout or assassin and have a body resembling a pack hunter like a large cat or wolf. Though you typically move like a quadruped, you can still stand and fight like a biped, allowing you to use all equipment normally. Your quadruped design allows you to move quickly; if you have both hands free, you can increase your Speed to 30 feet as you run on all fours.</p>",
      "plainText": "You were designed to serve as a scout or assassin and have a body resembling a pack hunter like a large cat or wolf. Though you typically move like a quadruped, you can still stand and fight like a biped, allowing you to use all equipment normally. Your quadruped design allows you to move quickly; if you have both hands free, you can increase your Speed to 30 feet as you run on all fours."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "RollOption",
        "data": {
          "domain": "all",
          "key": "RollOption",
          "option": "on-all-fours",
          "toggleable": true
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "PF2E.SpecificRule.Automaton.HunterAutomaton.ToggleLabel",
          "predicate": [
            "on-all-fours"
          ],
          "selector": "land-speed",
          "value": 5
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "2kMltxs2rmxRSxfV",
      "sourcePath": "pf2e-master/packs/heritages/automaton/hunter-automaton.json",
      "slug": "hunter-automaton",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Guns & Gears",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Automaton",
      "slug": "automaton",
      "uuid": "Compendium.pf2e.ancestries.Item.kYsBAJ103T44agJF",
      "sourceId": "kYsBAJ103T44agJF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:hunting-catfolk",
    "kind": "heritage",
    "slug": "hunting-catfolk",
    "name": "Hunting Catfolk",
    "description": {
      "sourceHtml": "<p>You come from a long line of skilled hunters and trackers and have a particularly keen sense of smell. You gain imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine a creature's location. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind.</p>\n<p>In addition, you gain a +2 circumstance bonus to @UUID[Compendium.pf2e.actionspf2e.Item.Track] a creature or object if you've smelled it before.</p>",
      "plainText": "You come from a long line of skilled hunters and trackers and have a particularly keen sense of smell. You gain imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine a creature's location. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind. In addition, you gain a +2 circumstance bonus to a creature or object if you've smelled it before."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "Hunting Catfolk (Track smelled creatures)",
          "predicate": [
            "action:track",
            "target:previously-smelled"
          ],
          "selector": "survival",
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "Sense",
        "data": {
          "acuity": "imprecise",
          "key": "Sense",
          "range": 30,
          "selector": "scent"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "1lv7RMp7t5iqeUFT",
      "sourcePath": "pf2e-master/packs/heritages/catfolk/hunting-catfolk.json",
      "slug": "hunting-catfolk",
      "image": "systems/pf2e/icons/features/ancestry/hunting-catfolk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Catfolk",
      "slug": "catfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
      "sourceId": "972EkpJOPv9KkQIW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:impersonator-android",
    "kind": "heritage",
    "slug": "impersonator-android",
    "name": "Impersonator Android",
    "description": {
      "sourceHtml": "<p>Your body was augmented with processes and an appearance intended to blend in with humans more easily.</p>\n<p>You become trained in Deception (or another skill if you're already trained in Deception). You don't require a disguise kit when attempting Deception checks to @UUID[Compendium.pf2e.actionspf2e.Item.Impersonate] a human.</p>\n<p>In addition, you gain a +4 circumstance bonus to Impersonate checks to pretend that you're a human version of yourself, rather than an android. This bonus doesn't apply to other checks to Impersonate humans.</p>",
      "plainText": "Your body was augmented with processes and an appearance intended to blend in with humans more easily. You become trained in Deception (or another skill if you're already trained in Deception). You don't require a disguise kit when attempting Deception checks to a human. In addition, you gain a +4 circumstance bonus to Impersonate checks to pretend that you're a human version of yourself, rather than an android. This bonus doesn't apply to other checks to Impersonate humans."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "Impersonator Android (to Impersonate a human version of yourself)",
          "predicate": [
            "action:impersonate",
            "disguise:human-self"
          ],
          "selector": "deception",
          "type": "circumstance",
          "value": 4
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.deception.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Mmezbef0c1fbJaVV",
      "sourcePath": "pf2e-master/packs/heritages/android/impersonator-android.json",
      "slug": "impersonator-android",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Android",
      "slug": "android",
      "uuid": "Compendium.pf2e.ancestries.Item.GfLwE884NoRC7cRi",
      "sourceId": "GfLwE884NoRC7cRi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:insightful-goloma",
    "kind": "heritage",
    "slug": "insightful-goloma",
    "name": "Insightful Goloma",
    "description": {
      "sourceHtml": "<p>You've learned to watch for telltale signs of dangerous sentiments to help you avoid trouble. You gain a +1 circumstance bonus to your Perception DC against attempts to Lie to you and your Perception checks to Sense Motive.</p>",
      "plainText": "You've learned to watch for telltale signs of dangerous sentiments to help you avoid trouble. You gain a +1 circumstance bonus to your Perception DC against attempts to Lie to you and your Perception checks to Sense Motive."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:sense-motive"
          ],
          "selector": "perception",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "cnbwtbDmlD0KoLqY",
      "sourcePath": "pf2e-master/packs/heritages/goloma/insightful-goloma.json",
      "slug": "insightful-goloma",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goloma",
      "slug": "goloma",
      "uuid": "Compendium.pf2e.ancestries.Item.c4secsSNG2AO7I5i",
      "sourceId": "c4secsSNG2AO7I5i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:inured-azarketi",
    "kind": "heritage",
    "slug": "inured-azarketi",
    "name": "Inured Azarketi",
    "description": {
      "sourceHtml": "<p>Your ancestors had to survive in polluted water that made every breath noxious. You gain poison resistance equal to half your level (minimum 1). Furthermore, you can survive outside of water for 72 hours before you begin to suffocate.</p>",
      "plainText": "Your ancestors had to survive in polluted water that made every breath noxious. You gain poison resistance equal to half your level (minimum 1). Furthermore, you can survive outside of water for 72 hours before you begin to suffocate."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "poison",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "7ZDCShtRg5QZggrU",
      "sourcePath": "pf2e-master/packs/heritages/azarketi/inured-azarketi.json",
      "slug": "inured-azarketi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Azarketi",
      "slug": "azarketi",
      "uuid": "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
      "sourceId": "yFoojz6q3ZjvceFw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:irongut-goblin",
    "kind": "heritage",
    "slug": "irongut-goblin",
    "name": "Irongut Goblin",
    "description": {
      "sourceHtml": "<p>You can subsist on food that most folks would consider spoiled. You can keep yourself fed with poor meals in a settlement as long as garbage is readily available, without using the @UUID[Compendium.pf2e.actionspf2e.Item.Subsist] downtime activity. You can eat and drink things when you are @UUID[Compendium.pf2e.conditionitems.Item.Sickened].</p>\n<p>You gain a +2 circumstance bonus to saving throws against afflictions, against gaining the sickened condition, and to remove the sickened condition. When you roll a success on a Fortitude save affected by this bonus, you get a critical success instead. All these benefits apply only when the affliction or condition resulted from something you ingested.</p>",
      "plainText": "You can subsist on food that most folks would consider spoiled. You can keep yourself fed with poor meals in a settlement as long as garbage is readily available, without using the downtime activity. You can eat and drink things when you are . You gain a +2 circumstance bonus to saving throws against afflictions, against gaining the sickened condition, and to remove the sickened condition. When you roll a success on a Fortitude save affected by this bonus, you get a critical success instead. All these benefits apply only when the affliction or condition resulted from something you ingested."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "item:trait:ingested",
            {
              "or": [
                "inflicts:sickened",
                "item:type:affliction"
              ]
            }
          ],
          "selector": "saving-throw",
          "slug": "irongut-save-bonus",
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "to-critical-success"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "item:trait:ingested",
            {
              "or": [
                "inflicts:sickened",
                "item:type:affliction"
              ]
            }
          ],
          "selector": "saving-throw"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "consumable",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "self:condition:sickened",
            {
              "or": [
                "item:tag:alchemical-food",
                "item:trait:elixir",
                "item:trait:ingested",
                "item:trait:potion"
              ]
            }
          ],
          "priority": 121,
          "property": "description",
          "value": [
            {
              "text": "PF2E.SpecificRule.Conditions.Sickened.AllowEatOrDrink"
            }
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "gyoN45SVfRZwHMkk",
      "sourcePath": "pf2e-master/packs/heritages/goblin/irongut-goblin.json",
      "slug": "irongut-goblin",
      "image": "systems/pf2e/icons/features/ancestry/irongut-goblin.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goblin",
      "slug": "goblin",
      "uuid": "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
      "sourceId": "sQfjTMDaZbT9DThq"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ironhoof-centaur",
    "kind": "heritage",
    "slug": "ironhoof-centaur",
    "name": "Ironhoof Centaur",
    "description": {
      "sourceHtml": "<p>Your hooves are incredibly strong and serve as formidable weapons. You gain a hoof unarmed attack that deals 1d6 bludgeoning damage. Your hooves are in the brawling group and have the finesse and unarmed traits.</p>",
      "plainText": "Your hooves are incredibly strong and serve as formidable weapons. You gain a hoof unarmed attack that deals 1d6 bludgeoning damage. Your hooves are in the brawling group and have the finesse and unarmed traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "bludgeoning",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "icons/sundries/misc/horseshoe-iron.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Hoof",
          "slug": "hoof",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "XQp3uReCgoXS8hCJ",
      "sourcePath": "pf2e-master/packs/heritages/centaur/ironhoof-centaur.json",
      "slug": "ironhoof-centaur",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Centaur",
      "slug": "centaur",
      "uuid": "Compendium.pf2e.ancestries.Item.pJkQlFTvpQ5GjZ5e",
      "sourceId": "pJkQlFTvpQ5GjZ5e"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:jinxed-halfling",
    "kind": "heritage",
    "slug": "jinxed-halfling",
    "name": "Jinxed Halfling",
    "description": {
      "sourceHtml": "<p>You were born with a strange blessing: bereft of the typical halfling luck, you can instead manipulate the fortunes of others. You can never take the @UUID[Compendium.pf2e.feats-srd.Item.Halfling Luck] feat, and you gain the @UUID[Compendium.pf2e.actionspf2e.Item.Jinx] action.</p>",
      "plainText": "You were born with a strange blessing: bereft of the typical halfling luck, you can instead manipulate the fortunes of others. You can never take the feat, and you gain the action."
    },
    "rarity": "uncommon",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Jinx"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "G9Gwfi8ZIva52uGp",
      "sourcePath": "pf2e-master/packs/heritages/halfling/jinxed-halfling.json",
      "slug": "jinxed-halfling",
      "image": "systems/pf2e/icons/features/ancestry/jinxed-halfling.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Halfling",
      "slug": "halfling",
      "uuid": "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
      "sourceId": "GgZAHbrjnzWOZy2v"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:jinxed-tengu",
    "kind": "heritage",
    "slug": "jinxed-tengu",
    "name": "Jinxed Tengu",
    "description": {
      "sourceHtml": "<p>Your lineage has been exposed to curse after curse, and now they slide off your feathers like rain. If you succeed at a saving throw against a curse or misfortune effect, you get a critical success instead. When you would gain the @UUID[Compendium.pf2e.conditionitems.Item.Doomed] condition, attempt a @Check[flat|dc:17]. On a success, reduce the value of the doomed condition you would gain by 1.</p>",
      "plainText": "Your lineage has been exposed to curse after curse, and now they slide off your feathers like rain. If you succeed at a saving throw against a curse or misfortune effect, you get a critical success instead. When you would gain the condition, attempt a flat check. On a success, reduce the value of the doomed condition you would gain by 1."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            {
              "or": [
                "item:trait:curse",
                "item:trait:misfortune"
              ]
            }
          ],
          "selector": "saving-throw",
          "type": "save"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "g4FRxyuHndZu4KTo",
      "sourcePath": "pf2e-master/packs/heritages/tengu/jinxed-tengu.json",
      "slug": "jinxed-tengu",
      "image": "systems/pf2e/icons/features/ancestry/jinxed-tengu.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tengu",
      "slug": "tengu",
      "uuid": "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
      "sourceId": "18xDKYPDBLEv2myX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:jungle-catfolk",
    "kind": "heritage",
    "slug": "jungle-catfolk",
    "name": "Jungle Catfolk",
    "description": {
      "sourceHtml": "<p>You're descended from jungle stalkers and can move swiftly through scrub and underbrush. You ignore difficult terrain from undergrowth, and greater difficult terrain from undergrowth is only difficult terrain for you.</p>",
      "plainText": "You're descended from jungle stalkers and can move swiftly through scrub and underbrush. You ignore difficult terrain from undergrowth, and greater difficult terrain from undergrowth is only difficult terrain for you."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "HpqQ5VQ0w4HqYgVC",
      "sourcePath": "pf2e-master/packs/heritages/catfolk/jungle-catfolk.json",
      "slug": "jungle-catfolk",
      "image": "systems/pf2e/icons/features/ancestry/jungle-catfolk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Catfolk",
      "slug": "catfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
      "sourceId": "972EkpJOPv9KkQIW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:kaleidoscopic-athamaru",
    "kind": "heritage",
    "slug": "kaleidoscopic-athamaru",
    "name": "Kaleidoscopic Athamaru",
    "description": {
      "sourceHtml": "<p>Your scales are a spectrum of color that shimmers in the light. In areas of bright light or dim light, you gain a +1 circumstance bonus to Performance checks. You also gain the @UUID[Compendium.pf2e.actionspf2e.Item.Dazzle Seeker] reaction.</p>",
      "plainText": "Your scales are a spectrum of color that shimmers in the light. In areas of bright light or dim light, you gain a +1 circumstance bonus to Performance checks. You also gain the reaction."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Dazzle Seeker"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "light:bright",
                "light:dim"
              ]
            }
          ],
          "selector": "performance",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "1w4npGmPzgdZw3Na",
      "sourcePath": "pf2e-master/packs/heritages/athamaru/kaleidoscopic-athamaru.json",
      "slug": "kaleidoscopic-athamaru",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Athamaru",
      "slug": "athamaru",
      "uuid": "Compendium.pf2e.ancestries.Item.Cg1AMgp3zrGmimWd",
      "sourceId": "Cg1AMgp3zrGmimWd"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:kanchil",
    "kind": "heritage",
    "slug": "kanchil",
    "name": "Kanchil",
    "description": {
      "sourceHtml": "<p>You have the head of a mouse deer and hooves instead of feet, with a reputation for being clever and persuasive—able to get yourself out of sticky situations with wordplay and a bit of luck. You become trained in Deception (or another skill if you were already trained in Deception). You gain a +1 circumstance bonus to Deception checks to Lie when specifically attempting to avoid danger or punishment (such as trying to convince a dragon not to eat you), to Deception DCs against @UUID[Compendium.pf2e.actionspf2e.Item.Sense Motive] checks to uncover such lies, and to initiative rolls when you roll Deception for initiative.</p>",
      "plainText": "You have the head of a mouse deer and hooves instead of feet, with a reputation for being clever and persuasive—able to get yourself out of sticky situations with wordplay and a bit of luck. You become trained in Deception (or another skill if you were already trained in Deception). You gain a +1 circumstance bonus to Deception checks to Lie when specifically attempting to avoid danger or punishment (such as trying to convince a dragon not to eat you), to Deception DCs against checks to uncover such lies, and to initiative rolls when you roll Deception for initiative."
    },
    "rarity": "uncommon",
    "traits": [
      "sprite"
    ],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                {
                  "and": [
                    {
                      "or": [
                        "action:lie",
                        "action:sense-motive"
                      ]
                    },
                    "to-avoid-danger"
                  ]
                },
                "initiative"
              ]
            }
          ],
          "selector": "deception",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.deception.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "5WkhF3JYISElgMLL",
      "sourcePath": "pf2e-master/packs/heritages/sprite/kanchil.json",
      "slug": "kanchil",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sprite",
      "slug": "sprite",
      "uuid": "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
      "sourceId": "TRqoeYfGAFjQbviF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:keen-venom-vishkanya",
    "kind": "heritage",
    "slug": "keen-venom-vishkanya",
    "name": "Keen-Venom Vishkanya",
    "description": {
      "sourceHtml": "<p>You're practiced with using your venom in combat, allowing you to employ your venom at a moment's notice. Your @UUID[Compendium.pf2e.actionspf2e.Item.Envenom] action doesn't trigger reactions that normally trigger on a manipulate action. Additionally, you gain the @UUID[Compendium.pf2e.actionspf2e.Item.Venom Draw] action.</p>",
      "plainText": "You're practiced with using your venom in combat, allowing you to employ your venom at a moment's notice. Your action doesn't trigger reactions that normally trigger on a manipulate action. Additionally, you gain the action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Venom Draw"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "BhbwjTFw2V67XF35",
      "sourcePath": "pf2e-master/packs/heritages/vishkanya/keen-venom-vishkanya.json",
      "slug": "keen-venom-vishkanya",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Vishkanya",
      "slug": "vishkanya",
      "uuid": "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
      "sourceId": "u1VJEXsVlmh3Fyx0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:kijimuna-gnome",
    "kind": "heritage",
    "slug": "kijimuna-gnome",
    "name": "Kijimuna Gnome",
    "description": {
      "sourceHtml": "<p>Your ancestors lived in the trees and fished in all the waters of Tian Xia. You gain your choice of the following benefits. Once made, this choice can't be changed.</p><ul><li>You can climb any banyan. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] feat, and if you roll a success on the Athletics check to Climb, you get a critical success instead.</li><li>You can catch any fish. You gain a swim Speed of 15 feet.</li></ul>",
      "plainText": "Your ancestors lived in the trees and fished in all the waters of Tian Xia. You gain your choice of the following benefits. Once made, this choice can't be changed. You can climb any banyan. You gain the feat, and if you roll a success on the Athletics check to Climb, you get a critical success instead.You can catch any fish. You gain a swim Speed of 15 feet."
    },
    "rarity": "uncommon",
    "traits": [
      "gnome"
    ],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "choices": [
            {
              "label": "PF2E.Actor.Speed.Type.Climb",
              "value": "climb"
            },
            {
              "label": "PF2E.Actor.Speed.Type.Swim",
              "value": "swim"
            }
          ],
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.MovementType",
          "rollOption": "kijimuna-gnome"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "predicate": [
            "kijimuna-gnome:climb"
          ],
          "uuid": "Compendium.pf2e.feats-srd.Item.Combat Climber"
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:climb",
            "kijimuna-gnome:climb"
          ],
          "selector": "athletics"
        }
      },
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "predicate": [
            "kijimuna-gnome:swim"
          ],
          "selector": "swim",
          "value": 15
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "8Uw1E3L2Mgo6PxwB",
      "sourcePath": "pf2e-master/packs/heritages/gnome/kijimuna-gnome.json",
      "slug": "kijimuna-gnome",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Gnome",
      "slug": "gnome",
      "uuid": "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
      "sourceId": "CYlfsYLJcBOgqKtD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:laborer-android",
    "kind": "heritage",
    "slug": "laborer-android",
    "name": "Laborer Android",
    "description": {
      "sourceHtml": "<p>Your body is adapted to endure physical hardships or perform hard labor for long periods of time. You become trained in Athletics (or another skill if you're already trained in Athletics), and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Hefty Hauler] skill feat.</p>",
      "plainText": "Your body is adapted to endure physical hardships or perform hard labor for long periods of time. You become trained in Athletics (or another skill if you're already trained in Athletics), and you gain the skill feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.athletics.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Hefty Hauler"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "MQx7miBXUmOHycqJ",
      "sourcePath": "pf2e-master/packs/heritages/android/laborer-android.json",
      "slug": "laborer-android",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Android",
      "slug": "android",
      "uuid": "Compendium.pf2e.ancestries.Item.GfLwE884NoRC7cRi",
      "sourceId": "GfLwE884NoRC7cRi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:lahkgyan-vanara",
    "kind": "heritage",
    "slug": "lahkgyan-vanara",
    "name": "Lahkgyan Vanara",
    "description": {
      "sourceHtml": "<p>Your vanara ancestors might have been born in Ragdya's image, but they found survival only in service to his enemy: the red-faced Lahkgya. You have sharp teeth meant for gnashing and ripping into flesh. You can subsist on raw meat alone. You have a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits.</p>",
      "plainText": "Your vanara ancestors might have been born in Ragdya's image, but they found survival only in service to his enemy: the red-faced Lahkgya. You have sharp teeth meant for gnashing and ripping into flesh. You can subsist on raw meat alone. You have a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "baseType": "jaws",
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "piercing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Jaws",
          "range": null,
          "slug": "jaws",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Kq3k1Z6IWGVsLrmg",
      "sourcePath": "pf2e-master/packs/heritages/vanara/lahkgyan-vanara.json",
      "slug": "lahkgyan-vanara",
      "image": "icons/creatures/abilities/mouth-teeth-long-red.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Vanara",
      "slug": "vanara",
      "uuid": "Compendium.pf2e.ancestries.Item.cLtOGIkuSSa4UDHY",
      "sourceId": "cLtOGIkuSSa4UDHY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:lantern-surki",
    "kind": "heritage",
    "slug": "lantern-surki",
    "name": "Lantern Surki",
    "description": {
      "sourceHtml": "<p>The nodes in your abdomen are particularly luminous. You can use an Interact action to shed light from your abdomen in a 20-foot radius (and dim light for the next 20 feet). This is a magical light effect with a counteract rank equal to half your level rounded up. You can change the color of the light or extinguish it with another Interact action.</p><ul><li><strong>Evolution</strong> Your abdominal nodes have evolved into a pair of secondary limbs that project a magical focusing lens. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Lantern Beam] action.</li><li><strong>Evolution</strong> Secondary light emitters grow from your shoulder nodes that flash in time with your lantern. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Lantern Strobe] action.</li></ul>",
      "plainText": "The nodes in your abdomen are particularly luminous. You can use an Interact action to shed light from your abdomen in a 20-foot radius (and dim light for the next 20 feet). This is a magical light effect with a counteract rank equal to half your level rounded up. You can change the color of the light or extinguish it with another Interact action. Evolution Your abdominal nodes have evolved into a pair of secondary limbs that project a magical focusing lens. You gain the action.Evolution Secondary light emitters grow from your shoulder nodes that flash in time with your lantern. You gain the action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "flags.pf2e.surki.evolutions",
          "value": {
            "label": "PF2E.SpecificRule.Surki.Evolutions.LanternBeam",
            "predicate": [
              {
                "not": "evolution:lantern-beam"
              }
            ],
            "value": "lantern-beam"
          }
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "flags.pf2e.surki.evolutions",
          "value": {
            "label": "PF2E.SpecificRule.Surki.Evolutions.LanternStrobe",
            "predicate": [
              {
                "not": "evolution:lantern-strobe"
              }
            ],
            "value": "lantern-strobe"
          }
        }
      },
      {
        "key": "RollOption",
        "data": {
          "key": "RollOption",
          "label": "PF2E.SpecificRule.Surki.LanternSurki.ToggleLabel",
          "option": "lantern-surki-lit",
          "suboptions": [
            {
              "label": "PF2E.Color.Blue",
              "value": "#0000FF"
            },
            {
              "label": "PF2E.Color.Cyan",
              "value": "#43D6D6"
            },
            {
              "label": "PF2E.Color.Green",
              "value": "#00FF00"
            },
            {
              "label": "PF2E.Color.Indigo",
              "value": "#4B0082"
            },
            {
              "label": "PF2E.Color.Magenta",
              "value": "#FF00FF"
            },
            {
              "label": "PF2E.Color.Orange",
              "value": "#FFA400"
            },
            {
              "label": "PF2E.Color.Red",
              "value": "#FF0000"
            },
            {
              "label": "PF2E.Color.Violet",
              "value": "#9400D3"
            },
            {
              "label": "PF2E.Color.White",
              "value": "#AAAAAA"
            },
            {
              "label": "PF2E.Color.Yellow",
              "value": "#FAFA00"
            }
          ],
          "toggleable": true
        }
      },
      {
        "key": "TokenLight",
        "data": {
          "key": "TokenLight",
          "predicate": [
            "lantern-surki-lit"
          ],
          "value": {
            "alpha": 0.1,
            "bright": 20,
            "color": "{item|flags.pf2e.rulesSelections.lanternSurkiLit}",
            "dim": 40,
            "luminosity": 0.15
          }
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "allowDuplicate": false,
          "key": "GrantItem",
          "predicate": [
            "evolution:lantern-beam"
          ],
          "reevaluateOnUpdate": true,
          "uuid": "Compendium.pf2e.actionspf2e.Item.Lantern Beam"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "allowDuplicate": false,
          "key": "GrantItem",
          "predicate": [
            "evolution:lantern-strobe"
          ],
          "reevaluateOnUpdate": true,
          "uuid": "Compendium.pf2e.actionspf2e.Item.Lantern Strobe"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Wyw1tkO0e199Wm8o",
      "sourcePath": "pf2e-master/packs/heritages/surki/lantern-surki.json",
      "slug": "lantern-surki",
      "image": "icons/magic/light/orb-container-orange.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Surki",
      "slug": "surki",
      "uuid": "Compendium.pf2e.ancestries.Item.ALOmLePjbc37ca3Y",
      "sourceId": "ALOmLePjbc37ca3Y"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:leaf-leshy",
    "kind": "heritage",
    "slug": "leaf-leshy",
    "name": "Leaf Leshy",
    "description": {
      "sourceHtml": "<p>Your body is made mostly from natural foliage, and like a leaf tumbling from a tree, you land from falls with particular grace. You take no damage from falling, regardless of the distance you fall.</p>",
      "plainText": "Your body is made mostly from natural foliage, and like a leaf tumbling from a tree, you land from falls with particular grace. You take no damage from falling, regardless of the distance you fall."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "dQqurQys37aJYb26",
      "sourcePath": "pf2e-master/packs/heritages/leshy/leaf-leshy.json",
      "slug": "leaf-leshy",
      "image": "systems/pf2e/icons/features/ancestry/leafy-leshy.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:lethoci",
    "kind": "heritage",
    "slug": "lethoci",
    "name": "Lethoci",
    "description": {
      "sourceHtml": "<p>You come from a kashrishi family adapted to coastal shores, or inland ponds and lakes. You gain a +2 circumstance bonus to Athletics checks to Swim. If you critically fail an Athletics check to Swim, you get a failure instead.</p>",
      "plainText": "You come from a kashrishi family adapted to coastal shores, or inland ponds and lakes. You gain a +2 circumstance bonus to Athletics checks to Swim. If you critically fail an Athletics check to Swim, you get a failure instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:swim"
          ],
          "selector": "athletics",
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "criticalFailure": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:swim"
          ],
          "selector": "athletics",
          "type": "skill"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Csezts78L4FMaskB",
      "sourcePath": "pf2e-master/packs/heritages/kashrishi/lethoci.json",
      "slug": "lethoci",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kashrishi",
      "slug": "kashrishi",
      "uuid": "Compendium.pf2e.ancestries.Item.dw2K1AJR9mQ25nDP",
      "sourceId": "dw2K1AJR9mQ25nDP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:leungli",
    "kind": "heritage",
    "slug": "leungli",
    "name": "Leungli",
    "description": {
      "sourceHtml": "<p>You have the head of a goldfish or carp and scales that come in an auspicious combination of stark white, black, orange, red, and gold. If you gain wings, they appear much like the wispy hairs of a dragon. You gain a swim Speed of 10 feet and the amphibious trait. Like all creatures with the amphibious trait, you can breathe both water and air.</p>",
      "plainText": "You have the head of a goldfish or carp and scales that come in an auspicious combination of stark white, black, orange, red, and gold. If you gain wings, they appear much like the wispy hairs of a dragon. You gain a swim Speed of 10 feet and the amphibious trait. Like all creatures with the amphibious trait, you can breathe both water and air."
    },
    "rarity": "uncommon",
    "traits": [
      "sprite"
    ],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "swim",
          "value": 10
        }
      },
      {
        "key": "ActorTraits",
        "data": {
          "add": [
            "amphibious"
          ],
          "key": "ActorTraits"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "wxQwFQGsg6yDiMmN",
      "sourcePath": "pf2e-master/packs/heritages/sprite/leungli.json",
      "slug": "leungli",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sprite",
      "slug": "sprite",
      "uuid": "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
      "sourceId": "TRqoeYfGAFjQbviF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:liminal-catfolk",
    "kind": "heritage",
    "slug": "liminal-catfolk",
    "name": "Liminal Catfolk",
    "description": {
      "sourceHtml": "<p>You've inherited a closeness to the far corners of the world, where the boundaries between dimensions grow thin. You can cast the @UUID[Compendium.pf2e.spells-srd.Item.Detect Magic] cantrip as an occult innate spell at will. A cantrip is heightened to half your level rounded up. You also gain a +1 circumstance bonus to Occultism checks to @UUID[Compendium.pf2e.actionspf2e.Item.Recall Knowledge] about creatures that originated on planes other than the Universe.</p>",
      "plainText": "You've inherited a closeness to the far corners of the world, where the boundaries between dimensions grow thin. You can cast the cantrip as an occult innate spell at will. A cantrip is heightened to half your level rounded up. You also gain a +1 circumstance bonus to Occultism checks to about creatures that originated on planes other than the Universe."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:recall-knowledge",
            "target:not-from-universe"
          ],
          "selector": "occultism",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "3F5ffk7cmnrBhPcT",
      "sourcePath": "pf2e-master/packs/heritages/catfolk/liminal-catfolk.json",
      "slug": "liminal-catfolk",
      "image": "icons/creatures/mammals/humanoid-cat-skulking-teal.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Catfolk",
      "slug": "catfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
      "sourceId": "972EkpJOPv9KkQIW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:liminal-fetchling",
    "kind": "heritage",
    "slug": "liminal-fetchling",
    "name": "Liminal Fetchling",
    "description": {
      "sourceHtml": "<p>You come from a line of fetchlings with a closer connection to the Ethereal and Shadow Planes, and you share those realms' affinity with the in-between and unseen. You gain a +1 circumstance bonus to locate @UUID[Compendium.pf2e.conditionitems.Item.Undetected] creatures within 60 feet when using the Seek action. Your flat check to target @UUID[Compendium.pf2e.conditionitems.Item.Concealed] creatures is @Check[flat|dc:3] instead of DC 5, and your flat check to target undetected creatures is @Check[flat|dc:9] instead of DC 11.</p>",
      "plainText": "You come from a line of fetchlings with a closer connection to the Ethereal and Shadow Planes, and you share those realms' affinity with the in-between and unseen. You gain a +1 circumstance bonus to locate creatures within 60 feet when using the Seek action. Your flat check to target creatures is flat check instead of DC 5, and your flat check to target undetected creatures is flat check instead of DC 11."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "To Seek undetected within 60 feet (Liminal Fetchling)",
          "predicate": [
            "action:seek",
            "target:condition:undetected",
            "target:within-60"
          ],
          "selector": "perception",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "PwxbD5VSJ0Yroqvp",
      "sourcePath": "pf2e-master/packs/heritages/fetchling/liminal-fetchling.json",
      "slug": "liminal-fetchling",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fetchling",
      "slug": "fetchling",
      "uuid": "Compendium.pf2e.ancestries.Item.hIA3qiUsxvLZXrFP",
      "sourceId": "hIA3qiUsxvLZXrFP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:littlehorn-minotaur",
    "kind": "heritage",
    "slug": "littlehorn-minotaur",
    "name": "Littlehorn Minotaur",
    "description": {
      "sourceHtml": "<p>Though no less powerful, your frame (and your horns) are smaller than those of most other minotaurs. Instead of Large, your size is Medium. Your horns unarmed attack deals 1d6 piercing damage instead of 1d8, but it has the agile trait.</p>",
      "plainText": "Though no less powerful, your frame (and your horns) are smaller than those of most other minotaurs. Instead of Large, your size is Medium. Your horns unarmed attack deals 1d6 piercing damage instead of 1d8, but it has the agile trait."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "DamageDice",
        "data": {
          "key": "DamageDice",
          "override": {
            "dieSize": "d6"
          },
          "selector": "horns-damage"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "weapon",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:horns"
          ],
          "property": "traits",
          "value": "agile"
        }
      },
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "medium"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "23MEmXuyw75jiGKq",
      "sourcePath": "pf2e-master/packs/heritages/minotaur/littlehorn-minotaur.json",
      "slug": "littlehorn-minotaur",
      "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Minotaur",
      "slug": "minotaur",
      "uuid": "Compendium.pf2e.ancestries.Item.3wQ49DoWFYQgVsq6",
      "sourceId": "3wQ49DoWFYQgVsq6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:longsnout-rat",
    "kind": "heritage",
    "slug": "longsnout-rat",
    "name": "Longsnout Rat",
    "description": {
      "sourceHtml": "<p>Your long snout gives you a keener sense of smell than most ratfolk. You gain imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine a creature's location. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind.</p>\n<p>In addition, you gain a +2 circumstance bonus to Perception checks to @UUID[Compendium.pf2e.actionspf2e.Item.Seek] a creature or object within the range of your scent.</p>",
      "plainText": "Your long snout gives you a keener sense of smell than most ratfolk. You gain imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine a creature's location. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind. In addition, you gain a +2 circumstance bonus to Perception checks to a creature or object within the range of your scent."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "acuity": "imprecise",
          "key": "Sense",
          "range": 30,
          "selector": "scent"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:seek",
            {
              "lte": [
                "target:distance",
                30
              ]
            }
          ],
          "selector": "perception",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "fROPRHGyUn4PgcER",
      "sourcePath": "pf2e-master/packs/heritages/ratfolk/longsnout-rat.json",
      "slug": "longsnout-rat",
      "image": "systems/pf2e/icons/features/ancestry/longsnout-rat.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ratfolk",
      "slug": "ratfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
      "sourceId": "P6PcVnCkh4XMdefw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:lorekeeper-shisk",
    "kind": "heritage",
    "slug": "lorekeeper-shisk",
    "name": "Lorekeeper Shisk",
    "description": {
      "sourceHtml": "<p>You grew up surrounded by knowledge and secrets. You become trained in one Lore skill and one other Intelligence- or Wisdom-based skill of your choice. At 5th level, you become expert in the chosen skills.</p>",
      "plainText": "You grew up surrounded by knowledge and secrets. You become trained in one Lore skill and one other Intelligence- or Wisdom-based skill of your choice. At 5th level, you become expert in the chosen skills."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Fgysc0A1pFQE8PMA",
      "sourcePath": "pf2e-master/packs/heritages/shisk/lorekeeper-shisk.json",
      "slug": "lorekeeper-shisk",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Shisk",
      "slug": "shisk",
      "uuid": "Compendium.pf2e.ancestries.Item.x1YinOddgUxwOLqP",
      "sourceId": "x1YinOddgUxwOLqP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:lotus-leshy",
    "kind": "heritage",
    "slug": "lotus-leshy",
    "name": "Lotus Leshy",
    "description": {
      "sourceHtml": "<p>You effortlessly float on the surface of water. You can walk on the surface of still water and other non-damaging liquids, moving at half your normal Speed. You can also attempt to @UUID[Compendium.pf2e.actionspf2e.Item.Balance] to move across the surface of flowing water, using the DC of a Swim check to move through the water. When you do this, you can't move faster than half your Speed, and if you fail or critically fail, you fall into the water rather than the normal effects.</p>",
      "plainText": "You effortlessly float on the surface of water. You can walk on the surface of still water and other non-damaging liquids, moving at half your normal Speed. You can also attempt to to move across the surface of flowing water, using the DC of a Swim check to move through the water. When you do this, you can't move faster than half your Speed, and if you fail or critically fail, you fall into the water rather than the normal effects."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ievKYUc53q0mroGp",
      "sourcePath": "pf2e-master/packs/heritages/leshy/lotus-leshy.json",
      "slug": "lotus-leshy",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:luminous-sprite",
    "kind": "heritage",
    "slug": "luminous-sprite",
    "name": "Luminous Sprite",
    "description": {
      "sourceHtml": "<p>You glow with magical luminance. You naturally shed light as a @UUID[Compendium.pf2e.equipment-srd.Item.Torch]; this light has the evocation, light, and primal traits. You can extinguish, rekindle, or change the color of this light using a single action, which has the concentrate trait.</p>",
      "plainText": "You glow with magical luminance. You naturally shed light as a ; this light has the evocation, light, and primal traits. You can extinguish, rekindle, or change the color of this light using a single action, which has the concentrate trait."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "RollOption",
        "data": {
          "domain": "all",
          "key": "RollOption",
          "label": "PF2E.SpecificRule.Sprite.LuminousSprite.Light",
          "option": "luminous",
          "toggleable": true
        }
      },
      {
        "key": "TokenLight",
        "data": {
          "key": "TokenLight",
          "predicate": [
            "luminous"
          ],
          "value": {
            "animation": {
              "intensity": 4,
              "speed": 1,
              "type": "torch"
            },
            "bright": 20,
            "color": "#9b7337",
            "dim": 40,
            "luminosity": 0.4,
            "shadows": 0.2
          }
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "LU4i3qXtyzeTGWZQ",
      "sourcePath": "pf2e-master/packs/heritages/sprite/luminous-sprite.json",
      "slug": "luminous-sprite",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sprite",
      "slug": "sprite",
      "uuid": "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
      "sourceId": "TRqoeYfGAFjQbviF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:mage-automaton",
    "kind": "heritage",
    "slug": "mage-automaton",
    "name": "Mage Automaton",
    "description": {
      "sourceHtml": "<p>The chamber housing your core has a more direct connection to the rest of your humanoid shape, allowing you to tap into your core's magical energy. You gain one cantrip from the arcane spell list. You can cast this spell as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>",
      "plainText": "The chamber housing your core has a more direct connection to the rest of your humanoid shape, allowing you to tap into your core's magical energy. You gain one cantrip from the arcane spell list. You can cast this spell as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "J0eAmntxXywr9sGt",
      "sourcePath": "pf2e-master/packs/heritages/automaton/mage-automaton.json",
      "slug": "mage-automaton",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Guns & Gears",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Automaton",
      "slug": "automaton",
      "uuid": "Compendium.pf2e.ancestries.Item.kYsBAJ103T44agJF",
      "sourceId": "kYsBAJ103T44agJF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:makari-lizardfolk",
    "kind": "heritage",
    "slug": "makari-lizardfolk",
    "name": "Makari Lizardfolk",
    "description": {
      "sourceHtml": "<p>You have a trunk-like snout and a connection to the divine. The tradition of any spells or magical abilities you gain from a lizardfolk heritage or ancestry feat is divine instead of its normal tradition (usually primal).</p>\n<p>You gain your choice of the @UUID[Compendium.pf2e.spells-srd.Item.Divine Lance] or @UUID[Compendium.pf2e.spells-srd.Item.Forbidding Ward] cantrips, which you can cast as a divine innate cantrip at will. A cantrip is heightened to a spell rank equal to half your level rounded up. When you cast this cantrip, it loses the manipulate trait, as you cast purely by roaring and flaring your trunk.</p>",
      "plainText": "You have a trunk-like snout and a connection to the divine. The tradition of any spells or magical abilities you gain from a lizardfolk heritage or ancestry feat is divine instead of its normal tradition (usually primal). You gain your choice of the or cantrips, which you can cast as a divine innate cantrip at will. A cantrip is heightened to a spell rank equal to half your level rounded up. When you cast this cantrip, it loses the manipulate trait, as you cast purely by roaring and flaring your trunk."
    },
    "rarity": "uncommon",
    "traits": [
      "lizardfolk"
    ],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "adjustName": false,
          "choices": {
            "filter": [
              {
                "or": [
                  "item:slug:forbidding-ward",
                  "item:slug:divine-lance"
                ]
              }
            ],
            "itemType": "spell",
            "slugsAsValues": true
          },
          "flag": "cantrip",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.Cantrip"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:{item|flags.pf2e.rulesSelections.cantrip}",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:{item|flags.pf2e.rulesSelections.cantrip}",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:lizardfolk"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "remove",
          "predicate": [
            "item:slug:{item|flags.pf2e.rulesSelections.cantrip}",
            "spellcasting:innate"
          ],
          "property": "traits",
          "value": "manipulate"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "e6ykfotynKPzR2PT",
      "sourcePath": "pf2e-master/packs/heritages/lizardfolk/makari-lizardfolk.json",
      "slug": "makari-lizardfolk",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Lizardfolk",
      "slug": "lizardfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
      "sourceId": "HWEgF7Gmoq55VhTL"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:melixie",
    "kind": "heritage",
    "slug": "melixie",
    "name": "Melixie",
    "description": {
      "sourceHtml": "<p>You have the features of a bee, butterfly, or other insect that loves sweets. You can ask questions of and receive answers from arthropods (insects, spiders, scorpions, crabs, and similar invertebrate animals), as well as use Diplomacy to Make an Impression on and Request things of them. Most bees, butterflies, moths, and beetles have an @UUID[Compendium.pf2e.conditionitems.Item.Indifferent] or @UUID[Compendium.pf2e.conditionitems.Item.Friendly] starting attitude toward you and give you time to make your case, though other arthropods react to you like any other adventurer.</p>",
      "plainText": "You have the features of a bee, butterfly, or other insect that loves sweets. You can ask questions of and receive answers from arthropods (insects, spiders, scorpions, crabs, and similar invertebrate animals), as well as use Diplomacy to Make an Impression on and Request things of them. Most bees, butterflies, moths, and beetles have an or starting attitude toward you and give you time to make your case, though other arthropods react to you like any other adventurer."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "TYvzNoL5ldmB5F76",
      "sourcePath": "pf2e-master/packs/heritages/sprite/melixie.json",
      "slug": "melixie",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sprite",
      "slug": "sprite",
      "uuid": "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
      "sourceId": "TRqoeYfGAFjQbviF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:mightyfall-kobold",
    "kind": "heritage",
    "slug": "mightyfall-kobold",
    "name": "Mightyfall Kobold",
    "description": {
      "sourceHtml": "<p>Your proximity to a mighty kaiju has caused you to grow strong and hardy. You gain 10 Hit Points from your ancestry instead of 6. Instead of the normal attribute boosts and flaws, you can choose to gain a boost to Strength, a boost to Charisma, and a flaw in Intelligence.</p>",
      "plainText": "Your proximity to a mighty kaiju has caused you to grow strong and hardy. You gain 10 Hit Points from your ancestry instead of 6. Instead of the normal attribute boosts and flaws, you can choose to gain a boost to Strength, a boost to Charisma, and a flaw in Intelligence."
    },
    "rarity": "uncommon",
    "traits": [
      "kobold"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.attributes.ancestryhp",
          "value": 10
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "SPcTcZgUMy5J4kzs",
      "sourcePath": "pf2e-master/packs/heritages/kobold/mightyfall-kobold.json",
      "slug": "mightyfall-kobold",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kobold",
      "slug": "kobold",
      "uuid": "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
      "sourceId": "7oQxL6wgsokD3QXG"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:mistbreath-azarketi",
    "kind": "heritage",
    "slug": "mistbreath-azarketi",
    "name": "Mistbreath Azarketi",
    "description": {
      "sourceHtml": "<p>You descend from azarketis who migrated to land environments that could support their need for water. Over time, your people adapted to life on land culturally and physically, even resulting in azarketis born with human hair like their Azlanti ancestors. You no longer need to be immersed in water every 24 hours to maintain your skin and can instead mist or wipe your skin with water to live comfortably. Your land Speed is 25 feet, but your swim Speed is only 15 feet.</p>",
      "plainText": "You descend from azarketis who migrated to land environments that could support their need for water. Over time, your people adapted to life on land culturally and physically, even resulting in azarketis born with human hair like their Azlanti ancestors. You no longer need to be immersed in water every 24 hours to maintain your skin and can instead mist or wipe your skin with water to live comfortably. Your land Speed is 25 feet, but your swim Speed is only 15 feet."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "selector": "swim-speed",
          "value": -15
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "selector": "land-speed",
          "value": 5
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "7wdeVadvchdM0aPK",
      "sourcePath": "pf2e-master/packs/heritages/azarketi/mistbreath-azarketi.json",
      "slug": "mistbreath-azarketi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Absalom, City of Lost Omens",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Azarketi",
      "slug": "azarketi",
      "uuid": "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
      "sourceId": "yFoojz6q3ZjvceFw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:monstrous-skeleton",
    "kind": "heritage",
    "slug": "monstrous-skeleton",
    "name": "Monstrous Skeleton",
    "description": {
      "sourceHtml": "<p>Inhuman skeletons are often created for both their deadly physical attacks and their terrifying appearances. Beasts and monstrous humanoids with the strangest skeletons tend to be the centerpiece of the collection of a necromancer skilled enough to raise one. You gain a claw, horn, tail, or wing unarmed attack that deals 1d6 damage. A claw deals slashing damage, a horn deals piercing damage, and a tail or wing deals bludgeoning damage. This unarmed attack is in the brawling group and has the finesse and unarmed traits.</p>",
      "plainText": "Inhuman skeletons are often created for both their deadly physical attacks and their terrifying appearances. Beasts and monstrous humanoids with the strangest skeletons tend to be the centerpiece of the collection of a necromancer skilled enough to raise one. You gain a claw, horn, tail, or wing unarmed attack that deals 1d6 damage. A claw deals slashing damage, a horn deals piercing damage, and a tail or wing deals bludgeoning damage. This unarmed attack is in the brawling group and has the finesse and unarmed traits."
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
              "label": "PF2E.BattleForm.Attack.Claw",
              "value": "claw"
            },
            {
              "label": "PF2E.BattleForm.Attack.Horn",
              "value": "horn"
            },
            {
              "label": "PF2E.BattleForm.Attack.Tail",
              "value": "tail"
            },
            {
              "label": "PF2E.BattleForm.Attack.Wing",
              "value": "wing"
            }
          ],
          "flag": "primaryStrike",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Automaton.AutomatonArmament.Prompt",
          "rollOption": "ancestry:skeleton:monstrous"
        }
      },
      {
        "key": "Strike",
        "data": {
          "baseType": "claw",
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "slashing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "icons/commodities/claws/claw-bear-brown-grey.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Claw",
          "predicate": [
            "ancestry:skeleton:monstrous:claw"
          ],
          "range": null,
          "slug": "claw",
          "traits": [
            "unarmed",
            "finesse"
          ]
        }
      },
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "piercing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "systems/pf2e/icons/unarmed-attacks/horn.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Horn",
          "predicate": [
            "ancestry:skeleton:monstrous:horn"
          ],
          "range": null,
          "slug": "horn",
          "traits": [
            "unarmed",
            "finesse"
          ]
        }
      },
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "bludgeoning",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "icons/creatures/abilities/tail-swipe-green.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Tail",
          "predicate": [
            "ancestry:skeleton:monstrous:tail"
          ],
          "range": null,
          "slug": "tail",
          "traits": [
            "unarmed",
            "finesse"
          ]
        }
      },
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "bludgeoning",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "systems/pf2e/icons/unarmed-attacks/wing.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Wing",
          "predicate": [
            "ancestry:skeleton:monstrous:wing"
          ],
          "range": null,
          "slug": "wing",
          "traits": [
            "unarmed",
            "finesse"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "wB8xiQB4RDbzOOvR",
      "sourcePath": "pf2e-master/packs/heritages/skeleton/monstrous-skeleton.json",
      "slug": "monstrous-skeleton",
      "image": "icons/commodities/bones/skull-feline-grey.webp",
      "publication": {
        "title": "Pathfinder Book of the Dead",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Skeleton",
      "slug": "skeleton",
      "uuid": "Compendium.pf2e.ancestries.Item.58rL5sg2y4arW1i5",
      "sourceId": "58rL5sg2y4arW1i5"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:mottle-coat-centaur",
    "kind": "heritage",
    "slug": "mottle-coat-centaur",
    "name": "Mottle-Coat Centaur",
    "description": {
      "sourceHtml": "<p>Your coat is mottled or striped, granting you natural camouflage in your home environment. Select a terrain from the following: arctic, desert, forest, mountain, plains, or swamp. In your selected terrain, you gain a +1 circumstance bonus to Stealth checks to @UUID[Compendium.pf2e.actionspf2e.Item.Hide] or @UUID[Compendium.pf2e.actionspf2e.Item.Sneak] and to Deception checks to @UUID[Compendium.pf2e.actionspf2e.Item.Feint].</p>",
      "plainText": "Your coat is mottled or striped, granting you natural camouflage in your home environment. Select a terrain from the following: arctic, desert, forest, mountain, plains, or swamp. In your selected terrain, you gain a +1 circumstance bonus to Stealth checks to or and to Deception checks to ."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "choices": [
            {
              "label": "PF2E.Terrain.Arctic",
              "value": "arctic"
            },
            {
              "label": "PF2E.Terrain.Desert",
              "value": "desert"
            },
            {
              "label": "PF2E.Terrain.Forest",
              "value": "forest"
            },
            {
              "label": "PF2E.Terrain.Mountain",
              "value": "mountain"
            },
            {
              "label": "PF2E.Terrain.Plains",
              "value": "plain"
            },
            {
              "label": "PF2E.Terrain.Swamp",
              "value": "swamp"
            }
          ],
          "flag": "terrain",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.TerrainExpertise.Prompt"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "terrain:{item|flags.pf2e.rulesSelections.terrain}",
            {
              "or": [
                "action:hide",
                "action:sneak",
                "action:feint"
              ]
            }
          ],
          "selector": [
            "stealth",
            "deception"
          ],
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "3aKeX3q9hRdxgP1J",
      "sourcePath": "pf2e-master/packs/heritages/centaur/mottle-coat-centaur.json",
      "slug": "mottle-coat-centaur",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Centaur",
      "slug": "centaur",
      "uuid": "Compendium.pf2e.ancestries.Item.pJkQlFTvpQ5GjZ5e",
      "sourceId": "pJkQlFTvpQ5GjZ5e"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:mountaineer-samsaran",
    "kind": "heritage",
    "slug": "mountaineer-samsaran",
    "name": "Mountaineer Samsaran",
    "description": {
      "sourceHtml": "<p>Your past incarnations dwelled in the caves on the snowcapped mountains of Tian Xia, so your body has become adept at surviving frigid storms. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
      "plainText": "Your past incarnations dwelled in the caves on the snowcapped mountains of Tian Xia, so your body has become adept at surviving frigid storms. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [
      "samsaran"
    ],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "IZqIVO1IOK3fAp30",
      "sourcePath": "pf2e-master/packs/heritages/samsaran/mountaineer-samsaran.json",
      "slug": "mountaineer-samsaran",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Samsaran",
      "slug": "samsaran",
      "uuid": "Compendium.pf2e.ancestries.Item.l7vjMIbPAUvEIosU",
      "sourceId": "l7vjMIbPAUvEIosU"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:mountainkeeper-tengu",
    "kind": "heritage",
    "slug": "mountainkeeper-tengu",
    "name": "Mountainkeeper Tengu",
    "description": {
      "sourceHtml": "<p>You come from a line of tengu ascetics, leaving you with a link to the spirits of the world and the Great Beyond. You can cast the @UUID[Compendium.pf2e.spells-srd.Item.Vitality Lash] cantrip as a primal innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. Each time you cast a spell from a tengu heritage or ancestry feat, you can decide whether it's a divine or primal spell.</p>",
      "plainText": "You come from a line of tengu ascetics, leaving you with a link to the spirits of the world and the Great Beyond. You can cast the cantrip as a primal innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. Each time you cast a spell from a tengu heritage or ancestry feat, you can decide whether it's a divine or primal spell."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:vitality-lash",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:vitality-lash",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:tengu"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ptpK6H1rM4Bu3ry4",
      "sourcePath": "pf2e-master/packs/heritages/tengu/mountainkeeper-tengu.json",
      "slug": "mountainkeeper-tengu",
      "image": "systems/pf2e/icons/features/ancestry/mountainkeeper-tengu.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tengu",
      "slug": "tengu",
      "uuid": "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
      "sourceId": "18xDKYPDBLEv2myX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:murkeyed-azarketi",
    "kind": "heritage",
    "slug": "murkeyed-azarketi",
    "name": "Murkeyed Azarketi",
    "description": {
      "sourceHtml": "<p>You live in murky waters and have grown accustomed to life in a low-visibility environment. You need only a successful @Check[flat|dc:3] when targeting a concealed creature and a successful @Check[flat|dc:9] when targeting a hidden creature.</p>",
      "plainText": "You live in murky waters and have grown accustomed to life in a low-visibility environment. You need only a successful flat check when targeting a concealed creature and a successful flat check when targeting a hidden creature."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "MtH5bq0MhaMQbJEL",
      "sourcePath": "pf2e-master/packs/heritages/azarketi/murkeyed-azarketi.json",
      "slug": "murkeyed-azarketi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Azarketi",
      "slug": "azarketi",
      "uuid": "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
      "sourceId": "yFoojz6q3ZjvceFw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:mutated-fleshwarp",
    "kind": "heritage",
    "slug": "mutated-fleshwarp",
    "name": "Mutated Fleshwarp",
    "description": {
      "sourceHtml": "<p>Transformed by uncontrolled magic, you originated in a the Mana Wastes or another region similarly devastated by uncontrolled magic. Due to your toughened or redundant organs, the DC for your checks to recover from persistent bleed damage is 10 instead of 15, and it's reduced to @Check[flat|dc:5] instead of 10 if you have particularly effective assistance recovering from the persistent damage.</p>",
      "plainText": "Transformed by uncontrolled magic, you originated in a the Mana Wastes or another region similarly devastated by uncontrolled magic. Due to your toughened or redundant organs, the DC for your checks to recover from persistent bleed damage is 10 instead of 15, and it's reduced to flat check instead of 10 if you have particularly effective assistance recovering from the persistent damage."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "condition",
          "key": "ItemAlteration",
          "mode": "downgrade",
          "predicate": [
            "item:damage:type:bleed"
          ],
          "property": "pd-recovery-dc",
          "value": 10
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "CCwTBSNTw0caN1jd",
      "sourcePath": "pf2e-master/packs/heritages/fleshwarp/mutated-fleshwarp.json",
      "slug": "mutated-fleshwarp",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fleshwarp",
      "slug": "fleshwarp",
      "uuid": "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
      "sourceId": "FXlXmNBFiiz9oasi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:naari",
    "kind": "heritage",
    "slug": "naari",
    "name": "Naari",
    "description": {
      "sourceHtml": "<p>You descend from fire elementals or bear the mark of the Inner Spheres, and your features illustrate the influence that elemental fire has over you. You gain the naari trait, in addition to the traits from your ancestry. You gain resistance to fire equal to half your level (minimum 1), and you treat environmental heat effects as if they were one step less severe (incredible heat becomes extreme, extreme heat becomes severe, and so on). You can choose from naari feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "You descend from fire elementals or bear the mark of the Inner Spheres, and your features illustrate the influence that elemental fire has over you. You gain the naari trait, in addition to the traits from your ancestry. You gain resistance to fire equal to half your level (minimum 1), and you treat environmental heat effects as if they were one step less severe (incredible heat becomes extreme, extreme heat becomes severe, and so on). You can choose from naari feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "naari"
    ],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "fire",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Svk2CHwvurK1QQhD",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/naari.json",
      "slug": "naari",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:nascent",
    "kind": "heritage",
    "slug": "nascent",
    "name": "Nascent",
    "description": {
      "sourceHtml": "<p>While most kashrishi are fully adapted to their environment by the time they reach adulthood, some retain unrealized potential well into adulthood before unlocking it. You gain a 1st-level kashrishi ancestry feat for which you meet the prerequisites, if any.</p>",
      "plainText": "While most kashrishi are fully adapted to their environment by the time they reach adulthood, some retain unrealized potential well into adulthood before unlocking it. You gain a 1st-level kashrishi ancestry feat for which you meet the prerequisites, if any."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "adjustName": false,
          "choices": {
            "filter": [
              "item:level:1",
              "item:category:ancestry",
              "item:trait:kashrishi"
            ],
            "itemType": "feat"
          },
          "flag": "nascent",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.AncestralParagon.Prompt"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "{item|flags.pf2e.rulesSelections.nascent}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "pJ395g22dKNoufIK",
      "sourcePath": "pf2e-master/packs/heritages/kashrishi/nascent.json",
      "slug": "nascent",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kashrishi",
      "slug": "kashrishi",
      "uuid": "Compendium.pf2e.ancestries.Item.dw2K1AJR9mQ25nDP",
      "sourceId": "dw2K1AJR9mQ25nDP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:nephilim",
    "kind": "heritage",
    "slug": "nephilim",
    "name": "Nephilim",
    "description": {
      "sourceHtml": "<p>Your nature is influenced by celestials, fiends, or monitors. This manifests as a combination of features that belie your heritage, such as golden eyes, a halo, horns, or a tail. You gain the nephilim trait, in addition to the traits from your ancestry. You gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from nephilim feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "Your nature is influenced by celestials, fiends, or monitors. This manifests as a combination of features that belie your heritage, such as golden eyes, a halo, horns, or a tail. You gain the nephilim trait, in addition to the traits from your ancestry. You gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from nephilim feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "nephilim"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      },
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "predicate": [
            "self:low-light-vision:from-ancestry"
          ],
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "1oLMOmLpurfWTTff",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/nephilim.json",
      "slug": "nephilim",
      "image": "systems/pf2e/icons/features/ancestry/aasimar.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:new-moon-sarangay",
    "kind": "heritage",
    "slug": "new-moon-sarangay",
    "name": "New Moon Sarangay",
    "description": {
      "sourceHtml": "<p>Some people call you a dwarf sarangay and your kind \"hiding ones.\" Others whisper you go out with the moon when the moon \"goes hunting\"—a common folk saying for when the new moon vanishes from the sky. Your elusive ancestors built their lodgings in the shade of bamboo thickets, and your ancestral communities valued caution and independence, passing down the knowledge of walking lightly and moving like smoke through bamboo. Your ancestors had dark brown or gray fur with white markings and a V-shaped pair of flat, triangular horns. Your size is Small instead of Medium. You gain 10 Hit Points from your ancestry instead of 8 and gain a +2 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Shove].</p>",
      "plainText": "Some people call you a dwarf sarangay and your kind \"hiding ones.\" Others whisper you go out with the moon when the moon \"goes hunting\"—a common folk saying for when the new moon vanishes from the sky. Your elusive ancestors built their lodgings in the shade of bamboo thickets, and your ancestral communities valued caution and independence, passing down the knowledge of walking lightly and moving like smoke through bamboo. Your ancestors had dark brown or gray fur with white markings and a V-shaped pair of flat, triangular horns. Your size is Small instead of Medium. You gain 10 Hit Points from your ancestry instead of 8 and gain a +2 circumstance bonus to Athletics checks to ."
    },
    "rarity": "common",
    "traits": [
      "sarangay"
    ],
    "rules": [
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "small"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.attributes.ancestryhp",
          "value": 10
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:shove"
          ],
          "selector": "athletics",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "H2mbY3aypl6ikaSR",
      "sourcePath": "pf2e-master/packs/heritages/sarangay/new-moon-sarangay.json",
      "slug": "new-moon-sarangay",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sarangay",
      "slug": "sarangay",
      "uuid": "Compendium.pf2e.ancestries.Item.7mpMGhVoaPANJnZ8",
      "sourceId": "7mpMGhVoaPANJnZ8"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:nightglider-strix",
    "kind": "heritage",
    "slug": "nightglider-strix",
    "name": "Nightglider Strix",
    "description": {
      "sourceHtml": "<p>You are a dedicated nocturnal avian, keeping watch and predating in the most lightless environments. You gain darkvision.</p>",
      "plainText": "You are a dedicated nocturnal avian, keeping watch and predating in the most lightless environments. You gain darkvision."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "9mS8EGLlGUOzSAzP",
      "sourcePath": "pf2e-master/packs/heritages/strix/nightglider-strix.json",
      "slug": "nightglider-strix",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Strix",
      "slug": "strix",
      "uuid": "Compendium.pf2e.ancestries.Item.GXcC6oVa5quzgNHD",
      "sourceId": "GXcC6oVa5quzgNHD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:nine-lives-catfolk",
    "kind": "heritage",
    "slug": "nine-lives-catfolk",
    "name": "Nine Lives Catfolk",
    "description": {
      "sourceHtml": "<p>Your family has always seems to bounce back from disaster, not through physical hardiness or specialized skill, but from sheer luck. Other catfolk whisper that you have nine lives. While you're @UUID[Compendium.pf2e.conditionitems.Item.Dying], you don't add your dying value to the DC of your recovery checks (this means the DC is typically 10). In addition, you gain the @UUID[Compendium.pf2e.feats-srd.Item.Diehard] general feat.</p>",
      "plainText": "Your family has always seems to bounce back from disaster, not through physical hardiness or specialized skill, but from sheer luck. Other catfolk whisper that you have nine lives. While you're , you don't add your dying value to the DC of your recovery checks (this means the DC is typically 10). In addition, you gain the general feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Diehard"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "subtract",
          "path": "system.attributes.dying.recoveryDC",
          "predicate": [
            "self:condition:dying"
          ],
          "value": "@actor.conditions.dying.badge.value"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "hOPOyyt7qZXYYCOU",
      "sourcePath": "pf2e-master/packs/heritages/catfolk/nine-lives-catfolk.json",
      "slug": "nine-lives-catfolk",
      "image": "systems/pf2e/icons/features/ancestry/nine-lives-catfolk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Catfolk",
      "slug": "catfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
      "sourceId": "972EkpJOPv9KkQIW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:nomadic-halfling",
    "kind": "heritage",
    "slug": "nomadic-halfling",
    "name": "Nomadic Halfling",
    "description": {
      "sourceHtml": "<p>Your ancestors have traveled from place to place for generations, never content to settle down. You gain two additional languages of your choice, chosen from among the common and uncommon languages available to you, and every time you take the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] feat, you gain another new language.</p>",
      "plainText": "Your ancestors have traveled from place to place for generations, never content to settle down. You gain two additional languages of your choice, chosen from among the common and uncommon languages available to you, and every time you take the feat, you gain another new language."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "system.build.languages.max",
          "value": 2
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.multilingualTaken",
          "priority": 19,
          "value": 0
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "add",
          "path": "system.build.languages.max",
          "priority": 21,
          "value": "@actor.flags.pf2e.multilingualTaken"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "idGDjqi1q3Ft8bAZ",
      "sourcePath": "pf2e-master/packs/heritages/halfling/nomadic-halfling.json",
      "slug": "nomadic-halfling",
      "image": "systems/pf2e/icons/features/ancestry//nomadic-halfling.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Halfling",
      "slug": "halfling",
      "uuid": "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
      "sourceId": "GgZAHbrjnzWOZy2v"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:nyktera",
    "kind": "heritage",
    "slug": "nyktera",
    "name": "Nyktera",
    "description": {
      "sourceHtml": "<p>You have batlike features, an affinity for batkind, and hearing that is second to none. As long as you can hear normally, you can use the Seek action to sense @UUID[Compendium.pf2e.conditionitems.Item.Undetected] creatures in a @Template[cone|distance:60] instead of a @Template[cone|distance:30]. You also gain a +2 circumstance bonus to locate undetected creatures that you could hear within 30 feet with a Seek action.</p>",
      "plainText": "You have batlike features, an affinity for batkind, and hearing that is second to none. As long as you can hear normally, you can use the Seek action to sense creatures in a @Template[cone|distance:60] instead of a @Template[cone|distance:30]. You also gain a +2 circumstance bonus to locate undetected creatures that you could hear within 30 feet with a Seek action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "To seek undetected you can hear within 30 feet (Nyktera)",
          "predicate": [
            "action:seek",
            "target:audible",
            "target:condition:undetected",
            "target:within-30"
          ],
          "selector": "perception",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "h2VKMYAlUIFAAXVG",
      "sourcePath": "pf2e-master/packs/heritages/sprite/nyktera.json",
      "slug": "nyktera",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sprite",
      "slug": "sprite",
      "uuid": "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
      "sourceId": "TRqoeYfGAFjQbviF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:oathkeeper-dwarf",
    "kind": "heritage",
    "slug": "oathkeeper-dwarf",
    "name": "Oathkeeper Dwarf",
    "description": {
      "sourceHtml": "<p>Growing up, you never tried to lie to get what you wanted, and even when necessary, lying makes you uncomfortable. The especially faithful might even have thought that you were blessed by the dwarven god of duty, @UUID[Compendium.pf2e.deities.Item.Kols].</p>\n<p>You gain a +1 circumstance bonus to Perception checks to @UUID[Compendium.pf2e.actionspf2e.Item.Sense Motive] and to Perception DCs against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Lie] to you.</p>\n<p>Furthermore, you gain a +2 circumstance bonus to Diplomacy checks to convince others you speak the truth when you are telling the truth, and you take a -4 circumstance penalty to lie and to your Deception DC against @UUID[Compendium.pf2e.actionspf2e.Item.Sense Motive].</p>",
      "plainText": "Growing up, you never tried to lie to get what you wanted, and even when necessary, lying makes you uncomfortable. The especially faithful might even have thought that you were blessed by the dwarven god of duty, . You gain a +1 circumstance bonus to Perception checks to and to Perception DCs against attempts to to you. Furthermore, you gain a +2 circumstance bonus to Diplomacy checks to convince others you speak the truth when you are telling the truth, and you take a -4 circumstance penalty to lie and to your Deception DC against ."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "PF2E.SkillVariant.SenseMotive",
          "predicate": [
            "action:sense-motive"
          ],
          "selector": "perception",
          "slug": "oathkeeper-dwarf-to-sense-motive",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "PF2E.SkillVariant.TellTheTruth",
          "predicate": [
            "tell-truth"
          ],
          "selector": "diplomacy",
          "slug": "oathkeeper-dwarf-tell-the-truth",
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "PF2E.SkillVariant.Lie",
          "predicate": [
            "action:lie"
          ],
          "selector": "deception",
          "slug": "oathkeeper-dwarf-lie",
          "type": "circumstance",
          "value": -4
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "hideIfDisabled": true,
          "key": "FlatModifier",
          "predicate": [
            "action:lie"
          ],
          "selector": "perception",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "hideIfDisabled": true,
          "key": "FlatModifier",
          "predicate": [
            "action:sense-motive"
          ],
          "selector": "deception",
          "type": "circumstance",
          "value": -4
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "85tRKGZUTFa6pKpG",
      "sourcePath": "pf2e-master/packs/heritages/dwarf/oathkeeper-dwarf.json",
      "slug": "oathkeeper-dwarf",
      "image": "systems/pf2e/icons/features/ancestry/oathkeeper-dwarf.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Character Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Dwarf",
      "slug": "dwarf",
      "uuid": "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
      "sourceId": "BYj5ZvlXZdpaEgA6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:observant-halfling",
    "kind": "heritage",
    "slug": "observant-halfling",
    "name": "Observant Halfling",
    "description": {
      "sourceHtml": "<p>Your finely honed senses quickly clue you in to danger or trickery. You gain a +1 circumstance bonus to your Perception DC, though not to your Perception checks.</p>",
      "plainText": "Your finely honed senses quickly clue you in to danger or trickery. You gain a +1 circumstance bonus to your Perception DC, though not to your Perception checks."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "selector": "perception-dc",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Lp7ywxabmm88Gei6",
      "sourcePath": "pf2e-master/packs/heritages/halfling/observant-halfling.json",
      "slug": "observant-halfling",
      "image": "systems/pf2e/icons/features/ancestry/observant-halfling.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Character Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Halfling",
      "slug": "halfling",
      "uuid": "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
      "sourceId": "GgZAHbrjnzWOZy2v"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:old-blood-vishkanya",
    "kind": "heritage",
    "slug": "old-blood-vishkanya",
    "name": "Old-Blood Vishkanya",
    "description": {
      "sourceHtml": "<p>You have a direct matrilineal line to the original group of vishkanyas upon the Vudrani ships that came to reclaim Jalmeray. Since then, your family has adjusted well to a new life in the Inner Sea. You become trained in Society (or another skill of your choice if you're already trained in Society), and you gain your choice of the @UUID[Compendium.pf2e.feats-srd.Item.Courtly Graces] or @UUID[Compendium.pf2e.feats-srd.Item.Streetwise] feat.</p>",
      "plainText": "You have a direct matrilineal line to the original group of vishkanyas upon the Vudrani ships that came to reclaim Jalmeray. Since then, your family has adjusted well to a new life in the Inner Sea. You become trained in Society (or another skill of your choice if you're already trained in Society), and you gain your choice of the or feat."
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
              "value": "Compendium.pf2e.feats-srd.Item.Streetwise"
            },
            {
              "value": "Compendium.pf2e.feats-srd.Item.Courtly Graces"
            }
          ],
          "flag": "feat",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.SkillFeat"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "{item|flags.pf2e.rulesSelections.feat}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "PbXqlzRdQbKLQx1R",
      "sourcePath": "pf2e-master/packs/heritages/vishkanya/old-blood-vishkanya.json",
      "slug": "old-blood-vishkanya",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Vishkanya",
      "slug": "vishkanya",
      "uuid": "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
      "sourceId": "u1VJEXsVlmh3Fyx0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:oracular-samsaran",
    "kind": "heritage",
    "slug": "oracular-samsaran",
    "name": "Oracular Samsaran",
    "description": {
      "sourceHtml": "<p>Your past lives have provided heightened insight to the spiritual world and current and future events, as history repeats itself. Choose arcane, divine, or occult. You gain one cantrip from that magical tradition's spell list. You can Cast this Spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>",
      "plainText": "Your past lives have provided heightened insight to the spiritual world and current and future events, as history repeats itself. Choose arcane, divine, or occult. You gain one cantrip from that magical tradition's spell list. You can Cast this Spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell rank equal to half your level rounded up."
    },
    "rarity": "common",
    "traits": [
      "samsaran"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "DR6okTFLHi3MYbzK",
      "sourcePath": "pf2e-master/packs/heritages/samsaran/oracular-samsaran.json",
      "slug": "oracular-samsaran",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Samsaran",
      "slug": "samsaran",
      "uuid": "Compendium.pf2e.ancestries.Item.l7vjMIbPAUvEIosU",
      "sourceId": "l7vjMIbPAUvEIosU"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:oread",
    "kind": "heritage",
    "slug": "oread",
    "name": "Oread",
    "description": {
      "sourceHtml": "<p>An earth elemental ancestor has influenced your bloodline, and your features highlight this elemental planar connection. You might have a crystalline or metallic sheen to your skin or hair, rough and stony flesh, or glittering gemstone eyes. You gain the oread trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from oread feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "An earth elemental ancestor has influenced your bloodline, and your features highlight this elemental planar connection. You might have a crystalline or metallic sheen to your skin or hair, rough and stony flesh, or glittering gemstone eyes. You gain the oread trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from oread feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "oread"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      },
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "predicate": [
            "self:low-light-vision:from-ancestry"
          ],
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ITgkqfnAOJCbcIys",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/oread.json",
      "slug": "oread",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:paddler-shoony",
    "kind": "heritage",
    "slug": "paddler-shoony",
    "name": "Paddler Shoony",
    "description": {
      "sourceHtml": "<p>You hail from shoonies who have lived long and successfully among the reeds and cattails of swamps and marshes, and have adapted to the challenges of living near waterlogged areas. You ignore difficult terrain and greater difficult terrain from bogs. When you roll a success to @UUID[Compendium.pf2e.actionspf2e.Item.Swim], you get a critical success instead.</p>",
      "plainText": "You hail from shoonies who have lived long and successfully among the reeds and cattails of swamps and marshes, and have adapted to the challenges of living near waterlogged areas. You ignore difficult terrain and greater difficult terrain from bogs. When you roll a success to , you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "predicate": [
            "action:swim"
          ],
          "selector": "athletics",
          "text": "When you roll a success to Swim, you get a critical success instead.",
          "title": "{item|name}"
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:swim"
          ],
          "selector": "athletics",
          "type": "skill"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "mnhpCk9dIwMuFegM",
      "sourcePath": "pf2e-master/packs/heritages/shoony/paddler-shoony.json",
      "slug": "paddler-shoony",
      "image": "systems/pf2e/icons/features/ancestry/paddler-shoony.webp",
      "publication": {
        "title": "Pathfinder #153: Life's Long Shadows",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Shoony",
      "slug": "shoony",
      "uuid": "Compendium.pf2e.ancestries.Item.q6rsqYARyOGXZA8F",
      "sourceId": "q6rsqYARyOGXZA8F"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:palace-echoes-kitsune",
    "kind": "heritage",
    "slug": "palace-echoes-kitsune",
    "name": "Palace Echoes Kitsune",
    "description": {
      "sourceHtml": "<p>You descend from kitsune who possessed such compelling powers of persuasion that they could walk into a palace at sunrise and end up as the power behind the throne by nightfall. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Nudging Whisper] action.</p>\n<p>Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human) called a tailless form.</p>",
      "plainText": "You descend from kitsune who possessed such compelling powers of persuasion that they could walk into a palace at sunrise and end up as the power behind the throne by nightfall. You gain the action. Your alternate form is a common Medium humanoid ancestry prevalent where you grew up (typically human) called a tailless form."
    },
    "rarity": "common",
    "traits": [
      "kitsune"
    ],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Nudging Whisper"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "SienSObWb4deLQig",
      "sourcePath": "pf2e-master/packs/heritages/kitsune/palace-echoes-kitsune.json",
      "slug": "palace-echoes-kitsune",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kitsune",
      "slug": "kitsune",
      "uuid": "Compendium.pf2e.ancestries.Item.4BL5wf1VF9feC2rY",
      "sourceId": "4BL5wf1VF9feC2rY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:peachchild-leshy",
    "kind": "heritage",
    "slug": "peachchild-leshy",
    "name": "Peachchild Leshy",
    "description": {
      "sourceHtml": "<p>Your leshy spirit took hold in a massive peach fruit before your body split forth from it, possibly emulating a past hero who was born in the same manner. You look like a human child, though with a perpetual flush of pink to your complexion and perhaps a few peach leaves growing from your body. The nature spirit inside you puts certain animals at ease.</p>\n<p>You can ask questions of and receive answers from household animals and livestock, such as dogs or pheasants, as well as use Diplomacy to Make an Impression on and Request things of them. Most domesticated animals have an indifferent or friendly starting attitude toward you and give you time to make your case, though other animals react to you like any other adventurer.</p>",
      "plainText": "Your leshy spirit took hold in a massive peach fruit before your body split forth from it, possibly emulating a past hero who was born in the same manner. You look like a human child, though with a perpetual flush of pink to your complexion and perhaps a few peach leaves growing from your body. The nature spirit inside you puts certain animals at ease. You can ask questions of and receive answers from household animals and livestock, such as dogs or pheasants, as well as use Diplomacy to Make an Impression on and Request things of them. Most domesticated animals have an indifferent or friendly starting attitude toward you and give you time to make your case, though other animals react to you like any other adventurer."
    },
    "rarity": "uncommon",
    "traits": [
      "leshy"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "G5U7zxwxDmERm3EY",
      "sourcePath": "pf2e-master/packs/heritages/leshy/peachchild-leshy.json",
      "slug": "peachchild-leshy",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:pelagic-merfolk",
    "kind": "heritage",
    "slug": "pelagic-merfolk",
    "name": "Pelagic Merfolk",
    "description": {
      "sourceHtml": "<p>You're a merfolk of the open seas. Your tail is patterned after the silvery tuna and herring that school by the million in your hunting grounds. Water obeys your will, and with a quick word, you can draw a sheathe of it around you. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Shielding Wave] action.</p>",
      "plainText": "You're a merfolk of the open seas. Your tail is patterned after the silvery tuna and herring that school by the million in your hunting grounds. Water obeys your will, and with a quick word, you can draw a sheathe of it around you. You gain the action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Shielding Wave"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "OOkgTzDU4mBvV98Z",
      "sourcePath": "pf2e-master/packs/heritages/merfolk/pelagic-merfolk.json",
      "slug": "pelagic-merfolk",
      "image": "icons/magic/water/elemental-water.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Merfolk",
      "slug": "merfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.FUqZRllwn6kmFA8K",
      "sourceId": "FUqZRllwn6kmFA8K"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:pine-leshy",
    "kind": "heritage",
    "slug": "pine-leshy",
    "name": "Pine Leshy",
    "description": {
      "sourceHtml": "<p>You excrete a thick, sticky sap from your bark-like flesh, making it easier to climb and hold onto your gear. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] feat as a bonus feat, and you gain a +2 circumstance bonus to your Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Disarm] you.</p>",
      "plainText": "You excrete a thick, sticky sap from your bark-like flesh, making it easier to climb and hold onto your gear. You gain the feat as a bonus feat, and you gain a +2 circumstance bonus to your Reflex DC against attempts to you."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Combat Climber"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "hideIfDisabled": true,
          "key": "FlatModifier",
          "predicate": [
            "action:disarm"
          ],
          "selector": "reflex",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "KaokXdiE3ewXprdL",
      "sourcePath": "pf2e-master/packs/heritages/leshy/pine-leshy.json",
      "slug": "pine-leshy",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder #176: Lost Mammoth Valley",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:pixie",
    "kind": "heritage",
    "slug": "pixie",
    "name": "Pixie",
    "description": {
      "sourceHtml": "<p>You are larger than other sprites. Instead of Tiny, your size is Small.</p>",
      "plainText": "You are larger than other sprites. Instead of Tiny, your size is Small."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "sm"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "KbG2BZ3Sbr3xU1sW",
      "sourcePath": "pf2e-master/packs/heritages/sprite/pixie.json",
      "slug": "pixie",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sprite",
      "slug": "sprite",
      "uuid": "Compendium.pf2e.ancestries.Item.TRqoeYfGAFjQbviF",
      "sourceId": "TRqoeYfGAFjQbviF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:poisonhide-tripkee",
    "kind": "heritage",
    "slug": "poisonhide-tripkee",
    "name": "Poisonhide Tripkee",
    "description": {
      "sourceHtml": "<p>You may be small, but the poison glands concealed across your body hide a deadly defense. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Toxic Skin] reaction.</p>",
      "plainText": "You may be small, but the poison glands concealed across your body hide a deadly defense. You gain the reaction."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Toxic Skin"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "bmA9JK06rnOKpNLr",
      "sourcePath": "pf2e-master/packs/heritages/tripkee/poisonhide-tripkee.json",
      "slug": "poisonhide-tripkee",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tripkee",
      "slug": "tripkee",
      "uuid": "Compendium.pf2e.ancestries.Item.hXM5jXezIki1cMI2",
      "sourceId": "hXM5jXezIki1cMI2"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:polychromatic-anadi",
    "kind": "heritage",
    "slug": "polychromatic-anadi",
    "name": "Polychromatic Anadi",
    "description": {
      "sourceHtml": "<p>Your body is covered with exceptionally colorful hairs that create vibrant, eye-catching patterns, some of which might even show in your human form. You become trained in Performance (or another skill if you were already trained in Performance), and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Impressive Performance] feat.</p>\n<hr />\n<p><em>Note: If you are already trained in the skill provided by this feat, you need to manually select an alternative skill.</em></p>",
      "plainText": "Your body is covered with exceptionally colorful hairs that create vibrant, eye-catching patterns, some of which might even show in your human form. You become trained in Performance (or another skill if you were already trained in Performance), and you gain the feat. . Note: If you are already trained in the skill provided by this feat, you need to manually select an alternative skill."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.performance.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Impressive Performance"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "daaXga11ov9YQVNq",
      "sourcePath": "pf2e-master/packs/heritages/anadi/polychromatic-anadi.json",
      "slug": "polychromatic-anadi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Anadi",
      "slug": "anadi",
      "uuid": "Compendium.pf2e.ancestries.Item.TQEqWqc7BYiadUdY",
      "sourceId": "TQEqWqc7BYiadUdY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:polyglot-android",
    "kind": "heritage",
    "slug": "polyglot-android",
    "name": "Polyglot Android",
    "description": {
      "sourceHtml": "<p>You were preprogrammed with a multitude of linguistic proficiencies, likely to act as a translator. You learn two new languages, chosen from common languages and any uncommon languages you have access to. These languages take the same form (signed or spoken) as your other languages. If you select the @UUID[Compendium.pf2e.feats-srd.Item.Multilingual] feat, you learn three new languages instead of two.</p>",
      "plainText": "You were preprogrammed with a multitude of linguistic proficiencies, likely to act as a translator. You learn two new languages, chosen from common languages and any uncommon languages you have access to. These languages take the same form (signed or spoken) as your other languages. If you select the feat, you learn three new languages instead of two."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "BjuZKA7lzFSjKbif",
      "sourcePath": "pf2e-master/packs/heritages/android/polyglot-android.json",
      "slug": "polyglot-android",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Android",
      "slug": "android",
      "uuid": "Compendium.pf2e.ancestries.Item.GfLwE884NoRC7cRi",
      "sourceId": "GfLwE884NoRC7cRi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ponygait-centaur",
    "kind": "heritage",
    "slug": "ponygait-centaur",
    "name": "Ponygait Centaur",
    "description": {
      "sourceHtml": "<p>You are smaller than most other centaurs, though no less fleet of foot. Instead of Large, your size is Medium. You gain a +1 circumstance bonus to Reflex saving throws.</p>",
      "plainText": "You are smaller than most other centaurs, though no less fleet of foot. Instead of Large, your size is Medium. You gain a +1 circumstance bonus to Reflex saving throws."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "medium"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "selector": "reflex",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "2GmWdSNbH4yx9pzY",
      "sourcePath": "pf2e-master/packs/heritages/centaur/ponygait-centaur.json",
      "slug": "ponygait-centaur",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Centaur",
      "slug": "centaur",
      "uuid": "Compendium.pf2e.ancestries.Item.pJkQlFTvpQ5GjZ5e",
      "sourceId": "pJkQlFTvpQ5GjZ5e"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:predator-strix",
    "kind": "heritage",
    "slug": "predator-strix",
    "name": "Predator Strix",
    "description": {
      "sourceHtml": "<p>You come from a line of strix with exceptionally broad wings and lengthy talons. You gain a talon melee unarmed attack that deals @Damage[1d4[slashing]] damage. Your talon attack is in the brawling group and has the agile, finesse, and unarmed traits.</p>",
      "plainText": "You come from a line of strix with exceptionally broad wings and lengthy talons. You gain a talon melee unarmed attack that deals 1d4[slashing] damage. Your talon attack is in the brawling group and has the agile, finesse, and unarmed traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "slashing",
              "dice": 1,
              "die": "d4"
            }
          },
          "group": "brawling",
          "img": "systems/pf2e/icons/unarmed-attacks/talon.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Talon",
          "range": null,
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "MUujYQYWg6PNVaaN",
      "sourcePath": "pf2e-master/packs/heritages/strix/predator-strix.json",
      "slug": "predator-strix",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Strix",
      "slug": "strix",
      "uuid": "Compendium.pf2e.ancestries.Item.GXcC6oVa5quzgNHD",
      "sourceId": "GXcC6oVa5quzgNHD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:prismatic-vishkanya",
    "kind": "heritage",
    "slug": "prismatic-vishkanya",
    "name": "Prismatic Vishkanya",
    "description": {
      "sourceHtml": "<p>Your scales shimmer and catch the light in an intoxicating display of colors. You become trained in Performance (or another skill of your choice if you're already trained in Performance) and gain the @UUID[Compendium.pf2e.feats-srd.Item.Fascinating Performance] feat.</p>",
      "plainText": "Your scales shimmer and catch the light in an intoxicating display of colors. You become trained in Performance (or another skill of your choice if you're already trained in Performance) and gain the feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.performance.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Fascinating Performance"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "vrU3lmDO7FYzmuQc",
      "sourcePath": "pf2e-master/packs/heritages/vishkanya/prismatic-vishkanya.json",
      "slug": "prismatic-vishkanya",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Vishkanya",
      "slug": "vishkanya",
      "uuid": "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
      "sourceId": "u1VJEXsVlmh3Fyx0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:quillcoat-shisk",
    "kind": "heritage",
    "slug": "quillcoat-shisk",
    "name": "Quillcoat Shisk",
    "description": {
      "sourceHtml": "<p>Your body has adapted a defensive mechanism to break off your quills in an attacker, allowing you to defend yourself against aggressive predators, though it takes a while for the quills to grow back. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Barbed Quills] reaction.</p>",
      "plainText": "Your body has adapted a defensive mechanism to break off your quills in an attacker, allowing you to defend yourself against aggressive predators, though it takes a while for the quills to grow back. You gain the reaction."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Barbed Quills"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "vDEfNzjLpGJU54cz",
      "sourcePath": "pf2e-master/packs/heritages/shisk/quillcoat-shisk.json",
      "slug": "quillcoat-shisk",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Shisk",
      "slug": "shisk",
      "uuid": "Compendium.pf2e.ancestries.Item.x1YinOddgUxwOLqP",
      "sourceId": "x1YinOddgUxwOLqP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:quilled-athamaru",
    "kind": "heritage",
    "slug": "quilled-athamaru",
    "name": "Quilled Athamaru",
    "description": {
      "sourceHtml": "<p>Sharp quills on your head can pierce your foes deeply. Most athamarus use such quills for defense, but a well-timed headbash can be devastatingly effective. You gain a quills melee unarmed attack that deals 1d6 piercing damage. Your quills are in the brawling group and have the agile, finesse, and unarmed traits.</p>",
      "plainText": "Sharp quills on your head can pierce your foes deeply. Most athamarus use such quills for defense, but a well-timed headbash can be devastatingly effective. You gain a quills melee unarmed attack that deals 1d6 piercing damage. Your quills are in the brawling group and have the agile, finesse, and unarmed traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "piercing",
              "dice": 1,
              "die": "d6"
            }
          },
          "img": "systems/pf2e/icons/unarmed-attacks/bone-shard.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Quill",
          "range": null,
          "slug": "quill",
          "traits": [
            "unarmed",
            "agile",
            "finesse"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "CkrTRdLfDDDUOCqP",
      "sourcePath": "pf2e-master/packs/heritages/athamaru/quilled-athamaru.json",
      "slug": "quilled-athamaru",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Athamaru",
      "slug": "athamaru",
      "uuid": "Compendium.pf2e.ancestries.Item.Cg1AMgp3zrGmimWd",
      "sourceId": "Cg1AMgp3zrGmimWd"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:ragdyan-vanara",
    "kind": "heritage",
    "slug": "ragdyan-vanara",
    "name": "Ragdyan Vanara",
    "description": {
      "sourceHtml": "<p>Keepers of traditions and tellers of ancient tales, your family traces its lineage to those born directly from Ragdya's whims. When you speak, others are inclined to listen to you, perhaps due to the divine spark of your connection to Ragdya. You gain one cantrip from the divine spell list; this cantrip can't deal damage or otherwise cause direct harm. You can cast this spell as a divine innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>",
      "plainText": "Keepers of traditions and tellers of ancient tales, your family traces its lineage to those born directly from Ragdya's whims. When you speak, others are inclined to listen to you, perhaps due to the divine spark of your connection to Ragdya. You gain one cantrip from the divine spell list; this cantrip can't deal damage or otherwise cause direct harm. You can cast this spell as a divine innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "By1y7HCfVPgX2GmI",
      "sourcePath": "pf2e-master/packs/heritages/vanara/ragdyan-vanara.json",
      "slug": "ragdyan-vanara",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Vanara",
      "slug": "vanara",
      "uuid": "Compendium.pf2e.ancestries.Item.cLtOGIkuSSa4UDHY",
      "sourceId": "cLtOGIkuSSa4UDHY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:rainfall-orc",
    "kind": "heritage",
    "slug": "rainfall-orc",
    "name": "Rainfall Orc",
    "description": {
      "sourceHtml": "<p>You were born in a rain forest with only tangles of trees providing protection from torrential rainstorms and flash floods. You've learned to move adeptly through jungle terrain and resist the various ailments common in humid environs. You gain a +2 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Climb] or @UUID[Compendium.pf2e.actionspf2e.Item.Swim] and a +1 circumstance bonus to saving throws against diseases.</p>",
      "plainText": "You were born in a rain forest with only tangles of trees providing protection from torrential rainstorms and flash floods. You've learned to move adeptly through jungle terrain and resist the various ailments common in humid environs. You gain a +2 circumstance bonus to Athletics checks to or and a +1 circumstance bonus to saving throws against diseases."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "action:climb",
                "action:swim"
              ]
            }
          ],
          "selector": "athletics",
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "disease"
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "dwKCwwtWetvPmJks",
      "sourcePath": "pf2e-master/packs/heritages/orc/rainfall-orc.json",
      "slug": "rainfall-orc",
      "image": "systems/pf2e/icons/features/ancestry/rainfall-orc.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Orc",
      "slug": "orc",
      "uuid": "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
      "sourceId": "lSGWXjcbOa6O5fTx"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:razortooth-goblin",
    "kind": "heritage",
    "slug": "razortooth-goblin",
    "name": "Razortooth Goblin",
    "description": {
      "sourceHtml": "<p>Your family's teeth are formidable weapons. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits.</p>",
      "plainText": "Your family's teeth are formidable weapons. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "baseType": "jaws",
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "piercing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "key": "Strike",
          "label": "PF2E.Weapon.Base.jaws",
          "slug": "razortooth-jaws",
          "traits": [
            "finesse"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "a6F2WjYU8D0suT8T",
      "sourcePath": "pf2e-master/packs/heritages/goblin/razortooth-goblin.json",
      "slug": "razortooth-goblin",
      "image": "systems/pf2e/icons/features/ancestry/razortooth-goblin.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goblin",
      "slug": "goblin",
      "uuid": "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
      "sourceId": "sQfjTMDaZbT9DThq"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:reef-merfolk",
    "kind": "heritage",
    "slug": "reef-merfolk",
    "name": "Reef Merfolk",
    "description": {
      "sourceHtml": "<p>You were raised amid colorful corals and schools of tropical fish. Compared to most merfolk, your body is vividly hued with stripes, spots, and patterns like a clownfish or angelfish. You're used to the occasionally toxic denizens of your home and are bothered little by stings or petty poisons. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison.</p>",
      "plainText": "You were raised amid colorful corals and schools of tropical fish. Compared to most merfolk, your body is vividly hued with stripes, spots, and patterns like a clownfish or angelfish. You're used to the occasionally toxic denizens of your home and are bothered little by stings or petty poisons. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "poison",
          "value": "max(1,floor(@actor.level/2))"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "success"
          ],
          "predicate": [
            "item:trait:poison",
            {
              "not": "item:trait:virulent"
            }
          ],
          "selector": "saving-throw",
          "text": "PF2E.SpecificRule.Merfolk.ReefMerfolk.SuccessNote",
          "title": "{item|name}"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "criticalSuccess"
          ],
          "predicate": [
            "item:trait:poison",
            {
              "not": "item:trait:virulent"
            }
          ],
          "selector": "saving-throw",
          "text": "PF2E.SpecificRule.Merfolk.ReefMerfolk.CriticalSuccessNote",
          "title": "{item|name}"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "success"
          ],
          "predicate": [
            "item:trait:poison",
            "item:trait:virulent"
          ],
          "selector": "saving-throw",
          "text": "PF2E.SpecificRule.Merfolk.ReefMerfolk.VirulentSuccessNote",
          "title": "{item|name}"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "criticalSuccess"
          ],
          "predicate": [
            "item:trait:poison",
            "item:trait:virulent"
          ],
          "selector": "saving-throw",
          "text": "PF2E.SpecificRule.Merfolk.ReefMerfolk.VirulentCriticalSuccessNote",
          "title": "{item|name}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Q5NrFWKDMCoVn9qR",
      "sourcePath": "pf2e-master/packs/heritages/merfolk/reef-merfolk.json",
      "slug": "reef-merfolk",
      "image": "systems/pf2e/icons/spells/prismatic-armor.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Merfolk",
      "slug": "merfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.FUqZRllwn6kmFA8K",
      "sourceId": "FUqZRllwn6kmFA8K"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:reflection",
    "kind": "heritage",
    "slug": "reflection",
    "name": "Reflection",
    "description": {
      "sourceHtml": "<p>You were created as a duplicate of another creature, intentionally or accidentally, though you might not know of your origins. Other than a minor mark or two, you look just like your progenitor. You gain the reflection trait, in addition to the traits from your ancestry. You don't need to attempt Deception checks to Impersonate your progenitor unless you're interacting with people who know them personally or you do something known to be out of character for them. The GM might require you to roll a Deception check in other circumstances, such as if you're mirror-risen and interacting with someone who has seen an accurate likeness of your progenitor and might notice a distinguishing feature on the reverse side. You can choose from reflection feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "You were created as a duplicate of another creature, intentionally or accidentally, though you might not know of your origins. Other than a minor mark or two, you look just like your progenitor. You gain the reflection trait, in addition to the traits from your ancestry. You don't need to attempt Deception checks to Impersonate your progenitor unless you're interacting with people who know them personally or you do something known to be out of character for them. The GM might require you to roll a Deception check in other circumstances, such as if you're mirror-risen and interacting with someone who has seen an accurate likeness of your progenitor and might notice a distinguishing feature on the reverse side. You can choose from reflection feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "rare",
    "traits": [
      "reflection"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "gKLTlzAVapXTQ86V",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/reflection.json",
      "slug": "reflection",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Dark Archive",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:resolute-fetchling",
    "kind": "heritage",
    "slug": "resolute-fetchling",
    "name": "Resolute Fetchling",
    "description": {
      "sourceHtml": "<p>Your ancestors have long dealt with the horrific—in the Shadow Plane or elsewhere—and you bear their mental fortitude. When you roll a success on a saving throw against an emotion effect, you get a critical success instead.</p>",
      "plainText": "Your ancestors have long dealt with the horrific—in the Shadow Plane or elsewhere—and you bear their mental fortitude. When you roll a success on a saving throw against an emotion effect, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "emotion"
          ],
          "selector": "saving-throw",
          "type": "skill"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "VAo6NnrCEAAOUSkc",
      "sourcePath": "pf2e-master/packs/heritages/fetchling/resolute-fetchling.json",
      "slug": "resolute-fetchling",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fetchling",
      "slug": "fetchling",
      "uuid": "Compendium.pf2e.ancestries.Item.hIA3qiUsxvLZXrFP",
      "sourceId": "hIA3qiUsxvLZXrFP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:respite-of-a-thousand-roofs",
    "kind": "heritage",
    "slug": "respite-of-a-thousand-roofs",
    "name": "Respite of a Thousand Roofs",
    "description": {
      "sourceHtml": "<p>You swore a vow to shelter and feed the poor. Your vow grants you adroitness with carpentry, cook pot, and cloth; you become trained in Crafting and Cooking Lore, and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Improvise Tool] skill feat.</p><hr /><p><strong>Additional Edict</strong> help the impoverished to the extent you're able by repairing their abodes and clothing or by feeding them</p>",
      "plainText": "You swore a vow to shelter and feed the poor. Your vow grants you adroitness with carpentry, cook pot, and cloth; you become trained in Crafting and Cooking Lore, and you gain the skill feat. . Additional Edict help the impoverished to the extent you're able by repairing their abodes and clothing or by feeding them"
    },
    "rarity": "common",
    "traits": [
      "yaksha"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.crafting.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Improvise Tool"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "q7b4yu3Nty0jZLOi",
      "sourcePath": "pf2e-master/packs/heritages/yaksha/respite-of-a-thousand-roofs.json",
      "slug": "respite-of-a-thousand-roofs",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaksha",
      "slug": "yaksha",
      "uuid": "Compendium.pf2e.ancestries.Item.k3zyr6du4gV0Ftuh",
      "sourceId": "k3zyr6du4gV0Ftuh"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:respite-of-cloudless-paths",
    "kind": "heritage",
    "slug": "respite-of-cloudless-paths",
    "name": "Respite of Cloudless Paths",
    "description": {
      "sourceHtml": "<p>You swore a vow to protect the waylaid and the lost. Both environmental heat effects and environmental cold effects are one step less extreme for you (incredible heat becomes extreme, extreme cold becomes severe, and so on), and you gain a + 1 circumstance bonus to saving throws against environmental features or hazards, such as floods, rockslides, and sandstorms.</p><hr /><p><strong>Additional Edict</strong> assist lost or incapacitated travelers</p>",
      "plainText": "You swore a vow to protect the waylaid and the lost. Both environmental heat effects and environmental cold effects are one step less extreme for you (incredible heat becomes extreme, extreme cold becomes severe, and so on), and you gain a + 1 circumstance bonus to saving throws against environmental features or hazards, such as floods, rockslides, and sandstorms. . Additional Edict assist lost or incapacitated travelers"
    },
    "rarity": "common",
    "traits": [
      "yaksha"
    ],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "environmental-hazard"
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "aPqNdvtKHv4amLcO",
      "sourcePath": "pf2e-master/packs/heritages/yaksha/respite-of-cloudless-paths.json",
      "slug": "respite-of-cloudless-paths",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaksha",
      "slug": "yaksha",
      "uuid": "Compendium.pf2e.ancestries.Item.k3zyr6du4gV0Ftuh",
      "sourceId": "k3zyr6du4gV0Ftuh"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:respite-of-loam-and-leaf",
    "kind": "heritage",
    "slug": "respite-of-loam-and-leaf",
    "name": "Respite of Loam and Leaf",
    "description": {
      "sourceHtml": "<p>You swore a vow to preserve the very foundation of sanctuary: the great earth and all that grows upon it. Your vow grants you the land's spiritual power; you gain one cantrip from the primal spell list. You can cast this spell as an innate primal spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. Your roots in the world grant you the plant trait.</p><hr /><p><strong>Additional Edict</strong> cure or remove blight and pollution from the plants and soil you encounter</p>",
      "plainText": "You swore a vow to preserve the very foundation of sanctuary: the great earth and all that grows upon it. Your vow grants you the land's spiritual power; you gain one cantrip from the primal spell list. You can cast this spell as an innate primal spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. Your roots in the world grant you the plant trait. . Additional Edict cure or remove blight and pollution from the plants and soil you encounter"
    },
    "rarity": "common",
    "traits": [
      "plant",
      "yaksha"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "WczVM4KQq7xybsPZ",
      "sourcePath": "pf2e-master/packs/heritages/yaksha/respite-of-loam-and-leaf.json",
      "slug": "respite-of-loam-and-leaf",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Yaksha",
      "slug": "yaksha",
      "uuid": "Compendium.pf2e.ancestries.Item.k3zyr6du4gV0Ftuh",
      "sourceId": "k3zyr6du4gV0Ftuh"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:rite-of-invocation",
    "kind": "heritage",
    "slug": "rite-of-invocation",
    "name": "Rite of Invocation",
    "description": {
      "sourceHtml": "<p>You augmented your exoskeleton with magic. You gain one cantrip from the arcane or occult spell list. You can cast this spell as an innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>",
      "plainText": "You augmented your exoskeleton with magic. You gain one cantrip from the arcane or occult spell list. You can cast this spell as an innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "GpnHIonrLN8TFZci",
      "sourcePath": "pf2e-master/packs/heritages/conrasu/rite-of-invocation.json",
      "slug": "rite-of-invocation",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Conrasu",
      "slug": "conrasu",
      "uuid": "Compendium.pf2e.ancestries.Item.tZn4qIHCUA6wCdnI",
      "sourceId": "tZn4qIHCUA6wCdnI"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:rite-of-knowing",
    "kind": "heritage",
    "slug": "rite-of-knowing",
    "name": "Rite of Knowing",
    "description": {
      "sourceHtml": "<p>You enhanced your exoskeleton with a connection to Axis, allowing you to tap into the infinite knowledge of the plane. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Call to Axis] action.</p>",
      "plainText": "You enhanced your exoskeleton with a connection to Axis, allowing you to tap into the infinite knowledge of the plane. You gain the action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Call to Axis"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "faLb2rczsrxAuOTt",
      "sourcePath": "pf2e-master/packs/heritages/conrasu/rite-of-knowing.json",
      "slug": "rite-of-knowing",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Conrasu",
      "slug": "conrasu",
      "uuid": "Compendium.pf2e.ancestries.Item.tZn4qIHCUA6wCdnI",
      "sourceId": "tZn4qIHCUA6wCdnI"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:rite-of-light",
    "kind": "heritage",
    "slug": "rite-of-light",
    "name": "Rite of Light",
    "description": {
      "sourceHtml": "<p>Your exoskeleton bears small shoots that can share life. When using your @UUID[Compendium.pf2e.ancestryfeatures.Item.Sunlight Healing], you can restore the Hit Points of an adjacent ally instead of yourself. That ally becomes temporarily immune to all uses of Sunlight Healing for 1 day.</p>",
      "plainText": "Your exoskeleton bears small shoots that can share life. When using your , you can restore the Hit Points of an adjacent ally instead of yourself. That ally becomes temporarily immune to all uses of Sunlight Healing for 1 day."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "EoWwvDdoMqN5x0c9",
      "sourcePath": "pf2e-master/packs/heritages/conrasu/rite-of-light.json",
      "slug": "rite-of-light",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Conrasu",
      "slug": "conrasu",
      "uuid": "Compendium.pf2e.ancestries.Item.tZn4qIHCUA6wCdnI",
      "sourceId": "tZn4qIHCUA6wCdnI"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:rite-of-passage",
    "kind": "heritage",
    "slug": "rite-of-passage",
    "name": "Rite of Passage",
    "description": {
      "sourceHtml": "<p>Your exoskeleton remains connected with the plants that created it. You can ignore difficult terrain and uneven ground caused by undergrowth. In addition, when you use the Acrobatics skill to Balance on narrow surfaces or uneven ground within forests, you aren't off-guard. When you roll a success attempting one of these Acrobatics checks, you get a critical success instead.</p>",
      "plainText": "Your exoskeleton remains connected with the plants that created it. You can ignore difficult terrain and uneven ground caused by undergrowth. In addition, when you use the Acrobatics skill to Balance on narrow surfaces or uneven ground within forests, you aren't off-guard. When you roll a success attempting one of these Acrobatics checks, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:balance",
            "terrain:forest"
          ],
          "selector": "acrobatics",
          "type": "skill"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "predicate": [
            "action:balance"
          ],
          "selector": "acrobatics",
          "text": "PF2E.SpecificRule.Conrasu.RiteOfPassage.Note",
          "title": "{item|name}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "yVtcyAbLmWCIHHZi",
      "sourcePath": "pf2e-master/packs/heritages/conrasu/rite-of-passage.json",
      "slug": "rite-of-passage",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Conrasu",
      "slug": "conrasu",
      "uuid": "Compendium.pf2e.ancestries.Item.tZn4qIHCUA6wCdnI",
      "sourceId": "tZn4qIHCUA6wCdnI"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:rite-of-reinforcement",
    "kind": "heritage",
    "slug": "rite-of-reinforcement",
    "name": "Rite of Reinforcement",
    "description": {
      "sourceHtml": "<p>Your woven exoskeleton rivals the hardest armors that can be found. Your exoskeleton is medium armor in the plate armor group that grants a +4 item bonus to AC, a Dex cap of +1, a check penalty of -2, a speed penalty of -5 feet, and a Strength value of +3, and has the comfort trait. You can never wear other armor or remove your exoskeleton. You can etch armor runes onto your exoskeleton as normal.</p>\n<p>@UUID[Compendium.pf2e.equipment-srd.Item.Rite of Reinforcement Exoskeleton]</p>",
      "plainText": "Your woven exoskeleton rivals the hardest armors that can be found. Your exoskeleton is medium armor in the plate armor group that grants a +4 item bonus to AC, a Dex cap of +1, a check penalty of -2, a speed penalty of -5 feet, and a Strength value of +3, and has the comfort trait. You can never wear other armor or remove your exoskeleton. You can etch armor runes onto your exoskeleton as normal."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.equipment-srd.Item.Rite of Reinforcement Exoskeleton"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "q2omqJ9t0skGTYki",
      "sourcePath": "pf2e-master/packs/heritages/conrasu/rite-of-reinforcement.json",
      "slug": "rite-of-reinforcement",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Conrasu",
      "slug": "conrasu",
      "uuid": "Compendium.pf2e.ancestries.Item.tZn4qIHCUA6wCdnI",
      "sourceId": "tZn4qIHCUA6wCdnI"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:river-azarketi",
    "kind": "heritage",
    "slug": "river-azarketi",
    "name": "River Azarketi",
    "description": {
      "sourceHtml": "<p>You come from azarketis who abandoned the oceans for the fresh water of inland life. The varied geography of rivers required you to develop advanced physical skills to swim against rapids, leap through cascading waters, and deftly navigate shallow and narrow channels.</p>\n<p>When you succeed at an Athletics check to Swim, you get a critical success instead.</p>",
      "plainText": "You come from azarketis who abandoned the oceans for the fresh water of inland life. The varied geography of rivers required you to develop advanced physical skills to swim against rapids, leap through cascading waters, and deftly navigate shallow and narrow channels. When you succeed at an Athletics check to Swim, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "predicate": [
            "action:swim"
          ],
          "selector": "athletics",
          "text": "When you succeed at an Athletics check to Swim, you get a critical success instead.",
          "title": "{item|name}"
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:swim"
          ],
          "selector": "athletics"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "GlejQr3rBh3sn8sL",
      "sourcePath": "pf2e-master/packs/heritages/azarketi/river-azarketi.json",
      "slug": "river-azarketi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Absalom, City of Lost Omens",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Azarketi",
      "slug": "azarketi",
      "uuid": "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
      "sourceId": "yFoojz6q3ZjvceFw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:riverside-tripkee",
    "kind": "heritage",
    "slug": "riverside-tripkee",
    "name": "Riverside Tripkee",
    "description": {
      "sourceHtml": "<p>Your ancestors live in and on the water. You gain a 15-foot swim Speed.</p>",
      "plainText": "Your ancestors live in and on the water. You gain a 15-foot swim Speed."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "swim",
          "value": 15
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "87Eej7uEvTxXeli7",
      "sourcePath": "pf2e-master/packs/heritages/tripkee/riverside-tripkee.json",
      "slug": "riverside-tripkee",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tripkee",
      "slug": "tripkee",
      "uuid": "Compendium.pf2e.ancestries.Item.hXM5jXezIki1cMI2",
      "sourceId": "hXM5jXezIki1cMI2"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:roaming-minotaur",
    "kind": "heritage",
    "slug": "roaming-minotaur",
    "name": "Roaming Minotaur",
    "description": {
      "sourceHtml": "<p>Your hooves are broad and powerful, perfect for clearing away rubble as you step. You become trained in Survival (or another skill if you were already trained in Survival) and gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Expertise] skill feat. You ignore difficult terrain caused by natural uneven ground while in the terrain chosen for your Terrain Expertise feat.</p>",
      "plainText": "Your hooves are broad and powerful, perfect for clearing away rubble as you step. You become trained in Survival (or another skill if you were already trained in Survival) and gain the skill feat. You ignore difficult terrain caused by natural uneven ground while in the terrain chosen for your Terrain Expertise feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.survival.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Terrain Expertise"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "HAo0S8ysFipf6S2B",
      "sourcePath": "pf2e-master/packs/heritages/minotaur/roaming-minotaur.json",
      "slug": "roaming-minotaur",
      "image": "icons/environment/wilderness/terrain-river-road-gray.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Minotaur",
      "slug": "minotaur",
      "uuid": "Compendium.pf2e.ancestries.Item.3wQ49DoWFYQgVsq6",
      "sourceId": "3wQ49DoWFYQgVsq6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:rock-dwarf",
    "kind": "heritage",
    "slug": "rock-dwarf",
    "name": "Rock Dwarf",
    "description": {
      "sourceHtml": "<p>Your ancestors lived and worked among the ancient stones of the mountains or the depths of the earth. This makes you solid as a rock when you plant your feet. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Reposition], @UUID[Compendium.pf2e.actionspf2e.Item.Shove], or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] you. This bonus also applies to saving throws against spells or effects that attempt to force you to move or knock you @UUID[Compendium.pf2e.conditionitems.Item.Prone].</p>\n<p>In addition, if any effect would force you to move 10 feet or more, you are moved only half the distance.</p>",
      "plainText": "Your ancestors lived and worked among the ancient stones of the mountains or the depths of the earth. This makes you solid as a rock when you plant your feet. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to , , or you. This bonus also applies to saving throws against spells or effects that attempt to force you to move or knock you . In addition, if any effect would force you to move 10 feet or more, you are moved only half the distance."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "hideIfDisabled": true,
          "key": "FlatModifier",
          "label": "PF2E.SkillVariant.VsShoveOrTrip",
          "predicate": [
            {
              "or": [
                "action:shove",
                "action:trip",
                "action:reposition"
              ]
            }
          ],
          "selector": [
            "fortitude",
            "reflex"
          ],
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "PF2E.SkillVariant.VsProne",
          "predicate": [
            "inflicts:prone"
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "VSyOvtgJ1ZNpIVgC",
      "sourcePath": "pf2e-master/packs/heritages/dwarf/rock-dwarf.json",
      "slug": "rock-dwarf",
      "image": "systems/pf2e/icons/features/ancestry/rock-dwarf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Dwarf",
      "slug": "dwarf",
      "uuid": "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
      "sourceId": "BYj5ZvlXZdpaEgA6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:root-leshy",
    "kind": "heritage",
    "slug": "root-leshy",
    "name": "Root Leshy",
    "description": {
      "sourceHtml": "<p>Your body is made from hardy roots that attach you firmly to the ground. You gain 10 Hit Points from your ancestry instead of 8. You can go without sunlight for 2 weeks before you begin to starve. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Reposition], @UUID[Compendium.pf2e.actionspf2e.Item.Shove], or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] you. This bonus also applies to saving throws against spells or effects that attempt to move you or knock you @UUID[Compendium.pf2e.conditionitems.Item.Prone].</p>",
      "plainText": "Your body is made from hardy roots that attach you firmly to the ground. You gain 10 Hit Points from your ancestry instead of 8. You can go without sunlight for 2 weeks before you begin to starve. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to , , or you. This bonus also applies to saving throws against spells or effects that attempt to move you or knock you ."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.attributes.ancestryhp",
          "value": 10
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "hideIfDisabled": true,
          "key": "FlatModifier",
          "label": "PF2E.SkillVariant.VsShoveOrTrip",
          "predicate": [
            {
              "or": [
                "action:shove",
                "action:trip",
                "action:reposition",
                "inflicts:prone",
                "inflicts:forced-movement"
              ]
            }
          ],
          "selector": [
            "fortitude",
            "reflex"
          ],
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "CZx9HMmoOwcpkLY8",
      "sourcePath": "pf2e-master/packs/heritages/leshy/root-leshy.json",
      "slug": "root-leshy",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:running-animal",
    "kind": "heritage",
    "slug": "running-animal",
    "name": "Running Animal",
    "description": {
      "sourceHtml": "<p>You are an animal meant for running at great speeds across land. Typically, you run on all fours like a dog, cheetah, or an iguana, but you could also use two legs like a kangaroo, emu, or penguin.</p>\n<p>You have a land Speed of 30 feet and one animal attack of your choice (typically claw, jaws, or tail).</p>",
      "plainText": "You are an animal meant for running at great speeds across land. Typically, you run on all fours like a dog, cheetah, or an iguana, but you could also use two legs like a kangaroo, emu, or penguin. You have a land Speed of 30 feet and one animal attack of your choice (typically claw, jaws, or tail)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "land",
          "value": 30
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.ancestryfeatures.Item.Animal Attack"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "bsXA1l5mxNnmBh5M",
      "sourcePath": "pf2e-master/packs/heritages/awakened-animal/running-animal.json",
      "slug": "running-animal",
      "image": "icons/creatures/mammals/deer-movement-leap-green.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Awakened Animal",
      "slug": "awakened-animal",
      "uuid": "Compendium.pf2e.ancestries.Item.GFOgV3MzWkYwJoJW",
      "sourceId": "GFOgV3MzWkYwJoJW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:runtboss-hobgoblin",
    "kind": "heritage",
    "slug": "runtboss-hobgoblin",
    "name": "Runtboss Hobgoblin",
    "description": {
      "sourceHtml": "<p>You come from a long line of hobgoblins who commanded goblins. You are smaller than other hobgoblins, but goblins still listen to any commands you bellow. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Group Coercion] skill feat. If you roll a success on an Intimidation check to @UUID[Compendium.pf2e.actionspf2e.Item.Coerce] a goblin, you get a critical success instead; if you roll a critical failure, you get a failure instead.</p>",
      "plainText": "You come from a long line of hobgoblins who commanded goblins. You are smaller than other hobgoblins, but goblins still listen to any commands you bellow. You gain the skill feat. If you roll a success on an Intimidation check to a goblin, you get a critical success instead; if you roll a critical failure, you get a failure instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Group Coercion"
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "criticalFailure": "one-degree-better",
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            {
              "or": [
                "target:trait:goblin",
                "action:coerce"
              ]
            }
          ],
          "selector": "intimidation"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "CzOHITB2ihLGqMuJ",
      "sourcePath": "pf2e-master/packs/heritages/hobgoblin/runtboss-hobgoblin.json",
      "slug": "runtboss-hobgoblin",
      "image": "systems/pf2e/icons/features/ancestry/runtboss-hobgoblin.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Hobgoblin",
      "slug": "hobgoblin",
      "uuid": "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
      "sourceId": "piNLXUrm9iaGqD2i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sacred-nagaji",
    "kind": "heritage",
    "slug": "sacred-nagaji",
    "name": "Sacred Nagaji",
    "description": {
      "sourceHtml": "<p>You stand out from most nagaji, with the upper body of a beautiful human and the lower body of a green or white snake. Legends claim your ancestors were faithful snakes uplifted by Nalinivati rather than nagaji created by the goddess. Instead of a fangs unarmed attack, you have a tail attack that deals 1d6 bludgeoning damage, is in the brawling weapon group, and has the finesse and unarmed traits. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Grapple] or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] you. This bonus also applies to saving throws against effects that would @UUID[Compendium.pf2e.conditionitems.Item.Grabbed]{Grab} you, @UUID[Compendium.pf2e.conditionitems.Item.Restrained]{Restrain} you, or knock you @UUID[Compendium.pf2e.conditionitems.Item.Prone].</p>",
      "plainText": "You stand out from most nagaji, with the upper body of a beautiful human and the lower body of a green or white snake. Legends claim your ancestors were faithful snakes uplifted by Nalinivati rather than nagaji created by the goddess. Instead of a fangs unarmed attack, you have a tail attack that deals 1d6 bludgeoning damage, is in the brawling weapon group, and has the finesse and unarmed traits. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to or you. This bonus also applies to saving throws against effects that would Grab you, Restrain you, or knock you ."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "action:grapple",
                "action:trip",
                "inflicts:grabbed",
                "inflicts:restrained",
                "inflicts:prone"
              ]
            }
          ],
          "selector": [
            "fortitude",
            "reflex"
          ],
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "bludgeoning",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "icons/creatures/abilities/tail-swipe-green.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Tail",
          "range": null,
          "traits": [
            "unarmed",
            "finesse"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "iOREr80Q0SsvPP8B",
      "sourcePath": "pf2e-master/packs/heritages/nagaji/sacred-nagaji.json",
      "slug": "sacred-nagaji",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Nagaji",
      "slug": "nagaji",
      "uuid": "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
      "sourceId": "J7T7bDLaQGoY1sMF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sailfish-merfolk",
    "kind": "heritage",
    "slug": "sailfish-merfolk",
    "name": "Sailfish Merfolk",
    "description": {
      "sourceHtml": "<p>The lower half of your body resembles a powerful sailfish, complete with a large dorsal fin. Using this fin, you can move through the water faster and leap farther. Your swim Speed increases to 30 feet. When you attempt a @UUID[Compendium.pf2e.actionspf2e.Item.High Jump] or @UUID[Compendium.pf2e.actionspf2e.Item.Long Jump], you gain a +1 circumstance bonus to the Athletics check, and you can Swim instead of Striding before attempting the jump.</p>",
      "plainText": "The lower half of your body resembles a powerful sailfish, complete with a large dorsal fin. Using this fin, you can move through the water faster and leap farther. Your swim Speed increases to 30 feet. When you attempt a or , you gain a +1 circumstance bonus to the Athletics check, and you can Swim instead of Striding before attempting the jump."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "swim",
          "value": 30
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "action:high-jump",
                "action:long-jump"
              ]
            }
          ],
          "selector": "athletics",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "4BiGekRGfBRC7DoI",
      "sourcePath": "pf2e-master/packs/heritages/merfolk/sailfish-merfolk.json",
      "slug": "sailfish-merfolk",
      "image": "icons/creatures/fish/fish-shark-swimming.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Merfolk",
      "slug": "merfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.FUqZRllwn6kmFA8K",
      "sourceId": "FUqZRllwn6kmFA8K"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sanctuary-samsaran",
    "kind": "heritage",
    "slug": "sanctuary-samsaran",
    "name": "Sanctuary Samsaran",
    "description": {
      "sourceHtml": "<p>Your past incarnations were reborn in sanctuaries in northern Zi Ha, and you have recollections of being trained to concentrate and focus for long periods of time. Your hazy flashbacks also reveal useful scripture in the books your past lives had eagerly consumed. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Tap the Past] action.</p>",
      "plainText": "Your past incarnations were reborn in sanctuaries in northern Zi Ha, and you have recollections of being trained to concentrate and focus for long periods of time. Your hazy flashbacks also reveal useful scripture in the books your past lives had eagerly consumed. You gain the action."
    },
    "rarity": "common",
    "traits": [
      "samsaran"
    ],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Tap the Past"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "MoeWxhJEtteD3v9z",
      "sourcePath": "pf2e-master/packs/heritages/samsaran/sanctuary-samsaran.json",
      "slug": "sanctuary-samsaran",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Samsaran",
      "slug": "samsaran",
      "uuid": "Compendium.pf2e.ancestries.Item.l7vjMIbPAUvEIosU",
      "sourceId": "l7vjMIbPAUvEIosU"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sandstrider-lizardfolk",
    "kind": "heritage",
    "slug": "sandstrider-lizardfolk",
    "name": "Sandstrider Lizardfolk",
    "description": {
      "sourceHtml": "<p>Your thick scales help you retain water and combat the sun's glare. You gain fire resistance equal to half your level (minimum 1). Environmental heat effects are one step less extreme for you, and you can go 10 times as long as normal before you are affected by starvation or thirst. However, unless you wear protective gear or take shelter, environmental cold effects are one step more extreme for you.</p>",
      "plainText": "Your thick scales help you retain water and combat the sun's glare. You gain fire resistance equal to half your level (minimum 1). Environmental heat effects are one step less extreme for you, and you can go 10 times as long as normal before you are affected by starvation or thirst. However, unless you wear protective gear or take shelter, environmental cold effects are one step more extreme for you."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "fire",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "6xxXtgj3fcCi53lt",
      "sourcePath": "pf2e-master/packs/heritages/lizardfolk/sandstrider-lizardfolk.json",
      "slug": "sandstrider-lizardfolk",
      "image": "systems/pf2e/icons/features/ancestry/sandstrider-lizardfolk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Lizardfolk",
      "slug": "lizardfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
      "sourceId": "HWEgF7Gmoq55VhTL"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:scalekeeper-vishkanya",
    "kind": "heritage",
    "slug": "scalekeeper-vishkanya",
    "name": "Scalekeeper Vishkanya",
    "description": {
      "sourceHtml": "<p>You are part of the family of vishkanyas in your community tasked with keeping records of the history and experiences of your people. Your scholarly skill affords you a quick mind. Once per day, you can attempt to Recall Knowledge as a free action.</p>",
      "plainText": "You are part of the family of vishkanyas in your community tasked with keeping records of the history and experiences of your people. Your scholarly skill affords you a quick mind. Once per day, you can attempt to Recall Knowledge as a free action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ohOJHeFenX97sBHf",
      "sourcePath": "pf2e-master/packs/heritages/vishkanya/scalekeeper-vishkanya.json",
      "slug": "scalekeeper-vishkanya",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Vishkanya",
      "slug": "vishkanya",
      "uuid": "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
      "sourceId": "u1VJEXsVlmh3Fyx0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:scavenger-strix",
    "kind": "heritage",
    "slug": "scavenger-strix",
    "name": "Scavenger Strix",
    "description": {
      "sourceHtml": "<p>Your ancestors originated from a land where food was scarce and threats were many. You are trained in Survival. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Forager] skill feat as a bonus feat. Your thoroughness when gathering food provides you a +1 circumstance bonus to Survival checks to Subsist.</p>",
      "plainText": "Your ancestors originated from a land where food was scarce and threats were many. You are trained in Survival. You gain the skill feat as a bonus feat. Your thoroughness when gathering food provides you a +1 circumstance bonus to Survival checks to Subsist."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.survival.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Forager"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:subsist"
          ],
          "selector": "survival",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "j0R1SyJP8k4G2Hkn",
      "sourcePath": "pf2e-master/packs/heritages/strix/scavenger-strix.json",
      "slug": "scavenger-strix",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Strix",
      "slug": "strix",
      "uuid": "Compendium.pf2e.ancestries.Item.GXcC6oVa5quzgNHD",
      "sourceId": "GXcC6oVa5quzgNHD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:seaweed-leshy",
    "kind": "heritage",
    "slug": "seaweed-leshy",
    "name": "Seaweed Leshy",
    "description": {
      "sourceHtml": "<p>Your body is made from woven seaweed, and you're just as comfortable underwater as on land. You gain a swim Speed of 20 feet, and you can always breathe underwater. However, your land Speed is reduced by 5 feet (to 20 feet for most seaweed leshies).</p>",
      "plainText": "Your body is made from woven seaweed, and you're just as comfortable underwater as on land. You gain a swim Speed of 20 feet, and you can always breathe underwater. However, your land Speed is reduced by 5 feet (to 20 feet for most seaweed leshies)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "swim",
          "value": 20
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "selector": "land-speed",
          "value": -5
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "hTl3uc6y1kTuo9ac",
      "sourcePath": "pf2e-master/packs/heritages/leshy/seaweed-leshy.json",
      "slug": "seaweed-leshy",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:seer-elf",
    "kind": "heritage",
    "slug": "seer-elf",
    "name": "Seer Elf",
    "description": {
      "sourceHtml": "<p>You have an inborn ability to detect and understand magical phenomena. You can cast the @UUID[Compendium.pf2e.spells-srd.Item.Detect Magic] cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>\n<p>In addition, you gain a +1 circumstance bonus to checks to @UUID[Compendium.pf2e.actionspf2e.Item.Identify Magic] and to @UUID[Compendium.pf2e.actionspf2e.Item.Decipher Writing] of a magical nature. These skill actions typically use the Arcana, Nature, Occultism, or Religion skill.</p>",
      "plainText": "You have an inborn ability to detect and understand magical phenomena. You can cast the cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. In addition, you gain a +1 circumstance bonus to checks to and to of a magical nature. These skill actions typically use the Arcana, Nature, Occultism, or Religion skill."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "action:identify-magic",
                "action:decipher-writing"
              ]
            }
          ],
          "selector": "skill-check",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:detect-magic",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:detect-magic",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:elf"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "jEtVesbqYcWGbBYk",
      "sourcePath": "pf2e-master/packs/heritages/elf/seer-elf.json",
      "slug": "seer-elf",
      "image": "systems/pf2e/icons/features/ancestry/seer-elf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Elf",
      "slug": "elf",
      "uuid": "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
      "sourceId": "PgKmsA2aKdbLU6O0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sensate-gnome",
    "kind": "heritage",
    "slug": "sensate-gnome",
    "name": "Sensate Gnome",
    "description": {
      "sourceHtml": "<p>You see all colors as brighter, hear all sounds as richer, and especially smell all scents with incredible detail. You gain a special sense: imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine the exact location of a creature. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind.</p>\n<p>In addition, you gain a +2 circumstance bonus to Perception checks whenever you're trying to locate an undetected creature that is within the range of your scent.</p>",
      "plainText": "You see all colors as brighter, hear all sounds as richer, and especially smell all scents with incredible detail. You gain a special sense: imprecise scent with a range of 30 feet. This means you can use your sense of smell to determine the exact location of a creature. The GM will usually double the range if you're downwind from the creature or halve the range if you're upwind. In addition, you gain a +2 circumstance bonus to Perception checks whenever you're trying to locate an undetected creature that is within the range of your scent."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:seek",
            {
              "lte": [
                "target:distance",
                30
              ]
            }
          ],
          "selector": "perception",
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "Sense",
        "data": {
          "acuity": "imprecise",
          "key": "Sense",
          "range": 30,
          "selector": "scent"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "tXC5Gwn9D5x0ouJh",
      "sourcePath": "pf2e-master/packs/heritages/gnome/sensate-gnome.json",
      "slug": "sensate-gnome",
      "image": "systems/pf2e/icons/features/ancestry/sensate-gnome.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Gnome",
      "slug": "gnome",
      "uuid": "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
      "sourceId": "CYlfsYLJcBOgqKtD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sewer-rat",
    "kind": "heritage",
    "slug": "sewer-rat",
    "name": "Sewer Rat",
    "description": {
      "sourceHtml": "<p>You come from a long line of ratfolk with a community based in the sewers beneath a large settlement. You are immune to the disease putrid plague. You gain a +1 circumstance bonus to saving throws against diseases and poisons. If you roll a success on a saving throw against a disease or poison, you get a critical success instead. If you have a different ability that would improve the save in this way (such as the @UUID[Compendium.pf2e.classfeatures.Item.Battle Hardened] fighter class feature), if you roll a critical failure on the save you get a failure instead.</p>",
      "plainText": "You come from a long line of ratfolk with a community based in the sewers beneath a large settlement. You are immune to the disease putrid plague. You gain a +1 circumstance bonus to saving throws against diseases and poisons. If you roll a success on a saving throw against a disease or poison, you get a critical success instead. If you have a different ability that would improve the save in this way (such as the fighter class feature), if you roll a critical failure on the save you get a failure instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            {
              "or": [
                "item:trait:disease",
                "item:trait:poison"
              ]
            }
          ],
          "selector": "saving-throw"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "item:trait:disease",
                "item:trait:poison"
              ]
            }
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "eFsD7W6hnK33jlDQ",
      "sourcePath": "pf2e-master/packs/heritages/ratfolk/sewer-rat.json",
      "slug": "sewer-rat",
      "image": "systems/pf2e/icons/features/ancestry/sewer-rat.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ratfolk",
      "slug": "ratfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
      "sourceId": "P6PcVnCkh4XMdefw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shadow-of-the-courtier",
    "kind": "heritage",
    "slug": "shadow-of-the-courtier",
    "name": "Shadow of the Courtier",
    "description": {
      "sourceHtml": "<p>Your shadow dances alongside you. You gain the Impressive Performance skill feat, allowing you to @UUID[Compendium.pf2e.actionspf2e.Item.Make an Impression] using Performance instead of Diplomacy. Once per day, if you fail, but not critically fail, a check to Make an Impression, you can play it off as part of a performance, allowing you to reroll the check; this is a fortune effect.</p>",
      "plainText": "Your shadow dances alongside you. You gain the Impressive Performance skill feat, allowing you to using Performance instead of Diplomacy. Once per day, if you fail, but not critically fail, a check to Make an Impression, you can play it off as part of a performance, allowing you to reroll the check; this is a fortune effect."
    },
    "rarity": "common",
    "traits": [
      "wayang"
    ],
    "rules": [
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "criticalFailure"
          ],
          "predicate": [
            "action:make-an-impression"
          ],
          "selector": "diplomacy",
          "text": "PF2E.SpecificRule.Wayang.ShadowOfTheCourtier",
          "title": "{item|name}"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Impressive Performance"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "GvtOzLp4kIuYfx1R",
      "sourcePath": "pf2e-master/packs/heritages/wayang/shadow-of-the-courtier.json",
      "slug": "shadow-of-the-courtier",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Wayang",
      "slug": "wayang",
      "uuid": "Compendium.pf2e.ancestries.Item.8FpI46oVxYVku04u",
      "sourceId": "8FpI46oVxYVku04u"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shadow-of-the-hermit",
    "kind": "heritage",
    "slug": "shadow-of-the-hermit",
    "name": "Shadow of the Hermit",
    "description": {
      "sourceHtml": "<p>Your shadow seems somehow full of secrets and mysteries—secrets that it shares with you. Choose one cantrip from the occult spell list. You can cast this spell as an occult innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>",
      "plainText": "Your shadow seems somehow full of secrets and mysteries—secrets that it shares with you. Choose one cantrip from the occult spell list. You can cast this spell as an occult innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up."
    },
    "rarity": "common",
    "traits": [
      "wayang"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "yxZtNE87im9yZFXk",
      "sourcePath": "pf2e-master/packs/heritages/wayang/shadow-of-the-hermit.json",
      "slug": "shadow-of-the-hermit",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Wayang",
      "slug": "wayang",
      "uuid": "Compendium.pf2e.ancestries.Item.8FpI46oVxYVku04u",
      "sourceId": "8FpI46oVxYVku04u"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shadow-of-the-sailor",
    "kind": "heritage",
    "slug": "shadow-of-the-sailor",
    "name": "Shadow of the Sailor",
    "description": {
      "sourceHtml": "<p>Your shadow flits across the surface of the water, and so do you. You can walk on the surface of still water and other non-damaging liquids, moving at half your normal Speed. You can attempt to walk along the surface of flowing water as well, still moving at half Speed, but to do so, you must succeed at an Acrobatics check to @UUID[Compendium.pf2e.actionspf2e.Item.Balance] using the DC of a Swim check to move through the water; on a failure, you fall into the water. This Acrobatics check doesn't use an action.</p>",
      "plainText": "Your shadow flits across the surface of the water, and so do you. You can walk on the surface of still water and other non-damaging liquids, moving at half your normal Speed. You can attempt to walk along the surface of flowing water as well, still moving at half Speed, but to do so, you must succeed at an Acrobatics check to using the DC of a Swim check to move through the water; on a failure, you fall into the water. This Acrobatics check doesn't use an action."
    },
    "rarity": "common",
    "traits": [
      "wayang"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "5apoJtHGL0lIz1cz",
      "sourcePath": "pf2e-master/packs/heritages/wayang/shadow-of-the-sailor.json",
      "slug": "shadow-of-the-sailor",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Wayang",
      "slug": "wayang",
      "uuid": "Compendium.pf2e.ancestries.Item.8FpI46oVxYVku04u",
      "sourceId": "8FpI46oVxYVku04u"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shadow-of-the-smith",
    "kind": "heritage",
    "slug": "shadow-of-the-smith",
    "name": "Shadow of the Smith",
    "description": {
      "sourceHtml": "<p>Your shadow is thick and liquid, like it could quench the finest ore. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Inscribe Shadow Pamor] action.</p>",
      "plainText": "Your shadow is thick and liquid, like it could quench the finest ore. You gain the action."
    },
    "rarity": "common",
    "traits": [
      "wayang"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "VHln8G1GNaSzNNHq",
      "sourcePath": "pf2e-master/packs/heritages/wayang/shadow-of-the-smith.json",
      "slug": "shadow-of-the-smith",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Wayang",
      "slug": "wayang",
      "uuid": "Compendium.pf2e.ancestries.Item.8FpI46oVxYVku04u",
      "sourceId": "8FpI46oVxYVku04u"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shadow-of-the-wanderer",
    "kind": "heritage",
    "slug": "shadow-of-the-wanderer",
    "name": "Shadow of the Wanderer",
    "description": {
      "sourceHtml": "<p>Your shadow blazes out ahead of you, clearing your path. Your Speed increases by 5 feet.</p>",
      "plainText": "Your shadow blazes out ahead of you, clearing your path. Your Speed increases by 5 feet."
    },
    "rarity": "common",
    "traits": [
      "wayang"
    ],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "selector": "land-speed",
          "value": 5
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "fcsYmaIfMR9iXv06",
      "sourcePath": "pf2e-master/packs/heritages/wayang/shadow-of-the-wanderer.json",
      "slug": "shadow-of-the-wanderer",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Wayang",
      "slug": "wayang",
      "uuid": "Compendium.pf2e.ancestries.Item.8FpI46oVxYVku04u",
      "sourceId": "8FpI46oVxYVku04u"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shadow-rat",
    "kind": "heritage",
    "slug": "shadow-rat",
    "name": "Shadow Rat",
    "description": {
      "sourceHtml": "<p>Your ancestors lived in dark spaces underground, granting you dark fur and a vaguely unnatural mien. You gain the trained proficiency rank in Intimidation and can use Intimidation to @UUID[Compendium.pf2e.actionspf2e.Item.Coerce] animals. When you @UUID[Compendium.pf2e.actionspf2e.Item.Demoralize] an animal, you don't take a penalty for not sharing a language with it. If you would automatically become trained in Intimidation (from your background or class, for example), you become trained in another skill of your choice.</p>\n<p>Animals' attitudes toward you begin one degree worse than normal, usually starting at unfriendly instead of indifferent for domesticated animals, and hostile instead of unfriendly for wild animals.</p>",
      "plainText": "Your ancestors lived in dark spaces underground, granting you dark fur and a vaguely unnatural mien. You gain the trained proficiency rank in Intimidation and can use Intimidation to animals. When you an animal, you don't take a penalty for not sharing a language with it. If you would automatically become trained in Intimidation (from your background or class, for example), you become trained in another skill of your choice. Animals' attitudes toward you begin one degree worse than normal, usually starting at unfriendly instead of indifferent for domesticated animals, and hostile instead of unfriendly for wild animals."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.intimidation.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "tarfuEXmi0E0Enfy",
      "sourcePath": "pf2e-master/packs/heritages/ratfolk/shadow-rat.json",
      "slug": "shadow-rat",
      "image": "systems/pf2e/icons/features/ancestry/shadow-rat.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ratfolk",
      "slug": "ratfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
      "sourceId": "P6PcVnCkh4XMdefw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shapewrought-fleshwarp",
    "kind": "heritage",
    "slug": "shapewrought-fleshwarp",
    "name": "Shapewrought Fleshwarp",
    "description": {
      "sourceHtml": "<p>A victim of fleshwarping, you likely bear loose flesh, bony spurs, or features of inhuman creatures sprouting from your skin. You have nevertheless turned the psychic toll of your transformation into a strength. You gain resistance to mental damage equal to half your level (minimum 1).</p>",
      "plainText": "A victim of fleshwarping, you likely bear loose flesh, bony spurs, or features of inhuman creatures sprouting from your skin. You have nevertheless turned the psychic toll of your transformation into a strength. You gain resistance to mental damage equal to half your level (minimum 1)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "mental",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "uxtcKTkD62SmrUoh",
      "sourcePath": "pf2e-master/packs/heritages/fleshwarp/shapewrought-fleshwarp.json",
      "slug": "shapewrought-fleshwarp",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fleshwarp",
      "slug": "fleshwarp",
      "uuid": "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
      "sourceId": "FXlXmNBFiiz9oasi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sharp-eared-catfolk",
    "kind": "heritage",
    "slug": "sharp-eared-catfolk",
    "name": "Sharp-Eared Catfolk",
    "description": {
      "sourceHtml": "<p>You were born with big, expressive ears that move with your moods and perk up at any unexpected sound. You gain a +2 circumstance bonus to locate undetected creatures that you could hear within 30 feet with a @UUID[Compendium.pf2e.actionspf2e.Item.Seek] action. As long as you're aware of a creature via sound, once per round, your ears can help you @UUID[Compendium.pf2e.actionspf2e.Item.Point Out] the creature to all allies as a free action.</p>",
      "plainText": "You were born with big, expressive ears that move with your moods and perk up at any unexpected sound. You gain a +2 circumstance bonus to locate undetected creatures that you could hear within 30 feet with a action. As long as you're aware of a creature via sound, once per round, your ears can help you the creature to all allies as a free action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:seek",
            {
              "lte": [
                "target:distance",
                30
              ]
            }
          ],
          "selector": "perception",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "NWsZ0cIeghyzk9bU",
      "sourcePath": "pf2e-master/packs/heritages/catfolk/sharp-eared-catfolk.json",
      "slug": "sharp-eared-catfolk",
      "image": "icons/creatures/mammals/humanoid-fox-cat-archer.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Catfolk",
      "slug": "catfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
      "sourceId": "972EkpJOPv9KkQIW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sharpshooter-automaton",
    "kind": "heritage",
    "slug": "sharpshooter-automaton",
    "name": "Sharpshooter Automaton",
    "description": {
      "sourceHtml": "<p>Your lithe, humanoid shape is designed for speed and accuracy suitable for ranged combat. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Automaton Aim] action.</p>",
      "plainText": "Your lithe, humanoid shape is designed for speed and accuracy suitable for ranged combat. You gain the action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Automaton Aim"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "j1nzBc9Pui7vsJ9o",
      "sourcePath": "pf2e-master/packs/heritages/automaton/sharpshooter-automaton.json",
      "slug": "sharpshooter-automaton",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Guns & Gears",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Automaton",
      "slug": "automaton",
      "uuid": "Compendium.pf2e.ancestries.Item.kYsBAJ103T44agJF",
      "sourceId": "kYsBAJ103T44agJF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shifting-skeleton",
    "kind": "heritage",
    "slug": "shifting-skeleton",
    "name": "Shifting Skeleton",
    "description": {
      "sourceHtml": "<p>Constructed from the bones of various shapechanging creatures, shifting skeletons retain a measure of reconfigurability, allowing them to shift forms. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Rearrange Bones] action.</p>",
      "plainText": "Constructed from the bones of various shapechanging creatures, shifting skeletons retain a measure of reconfigurability, allowing them to shift forms. You gain the action."
    },
    "rarity": "rare",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Rearrange Bones"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "idJ2lSKEmmwqG5eT",
      "sourcePath": "pf2e-master/packs/heritages/skeleton/shifting-skeleton.json",
      "slug": "shifting-skeleton",
      "image": "icons/commodities/bones/bones-stack-brown.webp",
      "publication": {
        "title": "Pathfinder Wake the Dead #4",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Skeleton",
      "slug": "skeleton",
      "uuid": "Compendium.pf2e.ancestries.Item.58rL5sg2y4arW1i5",
      "sourceId": "58rL5sg2y4arW1i5"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shimmertongue-nagaji",
    "kind": "heritage",
    "slug": "shimmertongue-nagaji",
    "name": "Shimmertongue Nagaji",
    "description": {
      "sourceHtml": "<p>You were born with a keen sense for magic, able to taste its unique effects in the air. You gain magicsense as a vague sense that has a range of 30 feet—like all vague senses, it's only about as precise as an average human's sense of smell, meaning you generally can predict only if magic is present; however, each tradition of magic has a unique taste to you, allowing you to identify the tradition of magic present.</p>",
      "plainText": "You were born with a keen sense for magic, able to taste its unique effects in the air. You gain magicsense as a vague sense that has a range of 30 feet—like all vague senses, it's only about as precise as an average human's sense of smell, meaning you generally can predict only if magic is present; however, each tradition of magic has a unique taste to you, allowing you to identify the tradition of magic present."
    },
    "rarity": "common",
    "traits": [
      "nagaji"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "acuity": "imprecise",
          "key": "Sense",
          "range": 30,
          "selector": "magicsense"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Cmj0pI0GPHl7kBUB",
      "sourcePath": "pf2e-master/packs/heritages/nagaji/shimmertongue-nagaji.json",
      "slug": "shimmertongue-nagaji",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Nagaji",
      "slug": "nagaji",
      "uuid": "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
      "sourceId": "J7T7bDLaQGoY1sMF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shoreline-strix",
    "kind": "heritage",
    "slug": "shoreline-strix",
    "name": "Shoreline Strix",
    "description": {
      "sourceHtml": "<p>You're the descendant of strix who traveled to the coasts. Your feathers are especially water-repellent and sleekly angled for diving, allowing you to catch fish and other prey in the shallows. You are trained in Athletics, and you gain the @UUID[Compendium.pf2e.feats-srd.Item.Underwater Marauder] skill feat as a bonus skill feat.</p>",
      "plainText": "You're the descendant of strix who traveled to the coasts. Your feathers are especially water-repellent and sleekly angled for diving, allowing you to catch fish and other prey in the shallows. You are trained in Athletics, and you gain the skill feat as a bonus skill feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.athletics.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Underwater Marauder"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "RxNBBMFZwPA3Vlg3",
      "sourcePath": "pf2e-master/packs/heritages/strix/shoreline-strix.json",
      "slug": "shoreline-strix",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Strix",
      "slug": "strix",
      "uuid": "Compendium.pf2e.ancestries.Item.GXcC6oVa5quzgNHD",
      "sourceId": "GXcC6oVa5quzgNHD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:shortshanks-hobgoblin",
    "kind": "heritage",
    "slug": "shortshanks-hobgoblin",
    "name": "Shortshanks Hobgoblin",
    "description": {
      "sourceHtml": "<p>You have a longer torso and broader shoulders than most hobgoblins, making your legs seem short by comparison. This gives you a strong, muscular core and lowers your center of gravity—features that assist you in riding and climbing—and you've trained at riding in a saddle from an extremely early age. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Ride] feat. Additionally, you are not @UUID[Compendium.pf2e.conditionitems.Item.Off-Guard] while you Climb.</p>",
      "plainText": "You have a longer torso and broader shoulders than most hobgoblins, making your legs seem short by comparison. This gives you a strong, muscular core and lowers your center of gravity—features that assist you in riding and climbing—and you've trained at riding in a saddle from an extremely early age. You gain the feat. Additionally, you are not while you Climb."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Ride"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "rQJBtQ9uKUzK9ktK",
      "sourcePath": "pf2e-master/packs/heritages/hobgoblin/shortshanks-hobgoblin.json",
      "slug": "shortshanks-hobgoblin",
      "image": "systems/pf2e/icons/features/ancestry/warmarch-hobgoblin.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Hobgoblin",
      "slug": "hobgoblin",
      "uuid": "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
      "sourceId": "piNLXUrm9iaGqD2i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:skilled-human",
    "kind": "heritage",
    "slug": "skilled-human",
    "name": "Skilled Human",
    "description": {
      "sourceHtml": "<p>Your ingenuity allows you to train in a wide variety of skills. You become trained in one skill of your choice. At 5th level, you become an expert in the chosen skill.</p>",
      "plainText": "Your ingenuity allows you to train in a wide variety of skills. You become trained in one skill of your choice. At 5th level, you become an expert in the chosen skill."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "choices": {
            "config": "skills"
          },
          "flag": "skill",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.Skill"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
          "value": "ternary(gte(@actor.level,5),2,1)"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "zVf0Hlp5xG0Q7kmc",
      "sourcePath": "pf2e-master/packs/heritages/human/skilled-human.json",
      "slug": "skilled-human",
      "image": "icons/tools/navigation/map-chart-tan.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Human",
      "slug": "human",
      "uuid": "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
      "sourceId": "IiG7DgeLWYrSNXuX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:skyborn-tengu",
    "kind": "heritage",
    "slug": "skyborn-tengu",
    "name": "Skyborn Tengu",
    "description": {
      "sourceHtml": "<p>Your bones may be especially light, you may be a rare tengu with wings, or your connection to the spirits of wind and sky might be stronger than most, slowing your descent through the air. You take no damage from falling, regardless of the distance you fall.</p>",
      "plainText": "Your bones may be especially light, you may be a rare tengu with wings, or your connection to the spirits of wind and sky might be stronger than most, slowing your descent through the air. You take no damage from falling, regardless of the distance you fall."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "rKV11HWREwjjMIum",
      "sourcePath": "pf2e-master/packs/heritages/tengu/skyborn-tengu.json",
      "slug": "skyborn-tengu",
      "image": "systems/pf2e/icons/features/ancestry/skyborn-tengu.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tengu",
      "slug": "tengu",
      "uuid": "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
      "sourceId": "18xDKYPDBLEv2myX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:slabsoul-minotaur",
    "kind": "heritage",
    "slug": "slabsoul-minotaur",
    "name": "Slabsoul Minotaur",
    "description": {
      "sourceHtml": "<p>Your deep connection with stone and walls allows you to conjure massive slabs of granite that collapse on your foes. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Raise Slabs] activity.</p>",
      "plainText": "Your deep connection with stone and walls allows you to conjure massive slabs of granite that collapse on your foes. You gain the activity."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Raise Slabs"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "mPVEc7hFZQhv0gqJ",
      "sourcePath": "pf2e-master/packs/heritages/minotaur/slabsoul-minotaur.json",
      "slug": "slabsoul-minotaur",
      "image": "icons/magic/earth/barrier-stone-explosion-debris.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Minotaur",
      "slug": "minotaur",
      "uuid": "Compendium.pf2e.ancestries.Item.3wQ49DoWFYQgVsq6",
      "sourceId": "3wQ49DoWFYQgVsq6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:smokeworker-hobgoblin",
    "kind": "heritage",
    "slug": "smokeworker-hobgoblin",
    "name": "Smokeworker Hobgoblin",
    "description": {
      "sourceHtml": "<p>Your family have been alchemists, engineers, and scientists for generations, laboring on projects that bring smoke and fire to the field of battle. You gain fire resistance equal to half your level (minimum 1). You automatically succeed at the DC 5 flat check to target a @UUID[Compendium.pf2e.conditionitems.Item.Concealed] creature if that creature is concealed only by smoke.</p>",
      "plainText": "Your family have been alchemists, engineers, and scientists for generations, laboring on projects that bring smoke and fire to the field of battle. You gain fire resistance equal to half your level (minimum 1). You automatically succeed at the DC 5 flat check to target a creature if that creature is concealed only by smoke."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "fire",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "n2eJEjA8pnOMiuCm",
      "sourcePath": "pf2e-master/packs/heritages/hobgoblin/smokeworker-hobgoblin.json",
      "slug": "smokeworker-hobgoblin",
      "image": "systems/pf2e/icons/features/ancestry/smokeworker-hobgoblin.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Hobgoblin",
      "slug": "hobgoblin",
      "uuid": "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
      "sourceId": "piNLXUrm9iaGqD2i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:snaptongue-tripkee",
    "kind": "heritage",
    "slug": "snaptongue-tripkee",
    "name": "Snaptongue Tripkee",
    "description": {
      "sourceHtml": "<p>Your tongue is especially long, and you can launch it with extraordinary range and precision. You can use your tongue to deliver spells with a range of touch and perform extremely simple Interact actions, such as opening some types of unlocked doors. Your tongue can't perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish, and you can't use it to hold items.</p>",
      "plainText": "Your tongue is especially long, and you can launch it with extraordinary range and precision. You can use your tongue to deliver spells with a range of touch and perform extremely simple Interact actions, such as opening some types of unlocked doors. Your tongue can't perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish, and you can't use it to hold items."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "2kSzKDtwbcILZTIe",
      "sourcePath": "pf2e-master/packs/heritages/tripkee/snaptongue-tripkee.json",
      "slug": "snaptongue-tripkee",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tripkee",
      "slug": "tripkee",
      "uuid": "Compendium.pf2e.ancestries.Item.hXM5jXezIki1cMI2",
      "sourceId": "hXM5jXezIki1cMI2"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:snaring-anadi",
    "kind": "heritage",
    "slug": "snaring-anadi",
    "name": "Snaring Anadi",
    "description": {
      "sourceHtml": "<p>You were hatched with hooked fangs that give you an edge when hunting in your true form. Your fangs attack gains the grapple and trip traits.</p>",
      "plainText": "You were hatched with hooked fangs that give you an edge when hunting in your true form. Your fangs attack gains the grapple and trip traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "weapon",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:fangs"
          ],
          "property": "traits",
          "value": "grapple"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "weapon",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:fangs"
          ],
          "property": "traits",
          "value": "trip"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "cwOUw7kofcAiY01I",
      "sourcePath": "pf2e-master/packs/heritages/anadi/snaring-anadi.json",
      "slug": "snaring-anadi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Anadi",
      "slug": "anadi",
      "uuid": "Compendium.pf2e.ancestries.Item.TQEqWqc7BYiadUdY",
      "sourceId": "TQEqWqc7BYiadUdY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:snow-goblin",
    "kind": "heritage",
    "slug": "snow-goblin",
    "name": "Snow Goblin",
    "description": {
      "sourceHtml": "<p>You are acclimated to living in frigid lands and have skin ranging from sky blue to navy in color, as well as blue fur. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
      "plainText": "You are acclimated to living in frigid lands and have skin ranging from sky blue to navy in color, as well as blue fur. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "gQyPU441J3rGt8mD",
      "sourcePath": "pf2e-master/packs/heritages/goblin/snow-goblin.json",
      "slug": "snow-goblin",
      "image": "systems/pf2e/icons/features/ancestry/snow-goblin.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goblin",
      "slug": "goblin",
      "uuid": "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
      "sourceId": "sQfjTMDaZbT9DThq"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:snow-rat",
    "kind": "heritage",
    "slug": "snow-rat",
    "name": "Snow Rat",
    "description": {
      "sourceHtml": "<p>You have a thicker coat and bulkier frame to defend against the cold, granting you cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
      "plainText": "You have a thicker coat and bulkier frame to defend against the cold, granting you cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "7lFPhRMAFXQsXUP2",
      "sourcePath": "pf2e-master/packs/heritages/ratfolk/snow-rat.json",
      "slug": "snow-rat",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ratfolk",
      "slug": "ratfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
      "sourceId": "P6PcVnCkh4XMdefw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:songbird-strix",
    "kind": "heritage",
    "slug": "songbird-strix",
    "name": "Songbird Strix",
    "description": {
      "sourceHtml": "<p>You descend from a talented line of strix storytellers. From the highest mountains and purest landscapes where your lungs fill with glorious clean air, you trill, whistle, and croon sweet songs. While natural sounds make you predisposed to sing, voices make you predisposed to mimicry. You receive a +1 circumstance bonus on Deception checks to Impersonate a mimicked voice, where the sound of the voice is the only factor; if you are a master in Deception, you gain a +2 circumstance bonus instead. You also gain a +1 circumstance bonus on Performance checks to sing; if you are a master in Performance, you gain a +2 circumstance bonus instead.</p>",
      "plainText": "You descend from a talented line of strix storytellers. From the highest mountains and purest landscapes where your lungs fill with glorious clean air, you trill, whistle, and croon sweet songs. While natural sounds make you predisposed to sing, voices make you predisposed to mimicry. You receive a +1 circumstance bonus on Deception checks to Impersonate a mimicked voice, where the sound of the voice is the only factor; if you are a master in Deception, you gain a +2 circumstance bonus instead. You also gain a +1 circumstance bonus on Performance checks to sing; if you are a master in Performance, you gain a +2 circumstance bonus instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:impersonate",
            "voice-only"
          ],
          "selector": "deception",
          "type": "circumstance",
          "value": "ternary(gte(@actor.system.skills.deception.rank,3),2,1)"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:perform:singing"
          ],
          "selector": "performance",
          "type": "circumstance",
          "value": "ternary(gte(@actor.system.skills.performance.rank,3),2,1)"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "fWT7Mo2vFC10H4Wq",
      "sourcePath": "pf2e-master/packs/heritages/strix/songbird-strix.json",
      "slug": "songbird-strix",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Strix",
      "slug": "strix",
      "uuid": "Compendium.pf2e.ancestries.Item.GXcC6oVa5quzgNHD",
      "sourceId": "GXcC6oVa5quzgNHD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:spellhorn-kobold",
    "kind": "heritage",
    "slug": "spellhorn-kobold",
    "name": "Spellhorn Kobold",
    "description": {
      "sourceHtml": "<p>Since hatching in the vicinity of a powerful source of magic, a trace of it flows through your veins. Choose one common cantrip from the arcane spell list. You can Cast this Spell as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. You are trained in the spell attack modifier and spell DC statistics, and your key spellcasting ability is Charisma.</p>",
      "plainText": "Since hatching in the vicinity of a powerful source of magic, a trace of it flows through your veins. Choose one common cantrip from the arcane spell list. You can Cast this Spell as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. You are trained in the spell attack modifier and spell DC statistics, and your key spellcasting ability is Charisma."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "VRyX00OuPGsJSurM",
      "sourcePath": "pf2e-master/packs/heritages/kobold/spellhorn-kobold.json",
      "slug": "spellhorn-kobold",
      "image": "systems/pf2e/icons/features/ancestry/spellscale-kobold.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kobold",
      "slug": "kobold",
      "uuid": "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
      "sourceId": "7oQxL6wgsokD3QXG"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:spellkeeper-shisk",
    "kind": "heritage",
    "slug": "spellkeeper-shisk",
    "name": "Spellkeeper Shisk",
    "description": {
      "sourceHtml": "<p>Your magical knowledge allows you to cast simple spells. Choose occult or primal. You gain one cantrip from that magical tradition's spell list. You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>",
      "plainText": "Your magical knowledge allows you to cast simple spells. Choose occult or primal. You gain one cantrip from that magical tradition's spell list. You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell rank equal to half your level rounded up."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "0TFf82gcfxXG9A54",
      "sourcePath": "pf2e-master/packs/heritages/shisk/spellkeeper-shisk.json",
      "slug": "spellkeeper-shisk",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Shisk",
      "slug": "shisk",
      "uuid": "Compendium.pf2e.ancestries.Item.x1YinOddgUxwOLqP",
      "sourceId": "x1YinOddgUxwOLqP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:spindly-anadi",
    "kind": "heritage",
    "slug": "spindly-anadi",
    "name": "Spindly Anadi",
    "description": {
      "sourceHtml": "<p>Your limbs are exceptionally long in both forms, allowing you to skitter about with surprising agility. Your Speed increases from 25 to 30 feet.</p>",
      "plainText": "Your limbs are exceptionally long in both forms, allowing you to skitter about with surprising agility. Your Speed increases from 25 to 30 feet."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "selector": "land-speed",
          "value": 5
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "WxcbLvufI6JBpLt0",
      "sourcePath": "pf2e-master/packs/heritages/anadi/spindly-anadi.json",
      "slug": "spindly-anadi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Anadi",
      "slug": "anadi",
      "uuid": "Compendium.pf2e.ancestries.Item.TQEqWqc7BYiadUdY",
      "sourceId": "TQEqWqc7BYiadUdY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:spined-azarketi",
    "kind": "heritage",
    "slug": "spined-azarketi",
    "name": "Spined Azarketi",
    "description": {
      "sourceHtml": "<p>Your fins conceal launchable toxic spines. You have a spine ranged unarmed attack with the unarmed trait that deals @Damage[1d4[poison]] damage, has a range increment of 10 feet, and is in the dart weapon group.</p>",
      "plainText": "Your fins conceal launchable toxic spines. You have a spine ranged unarmed attack with the unarmed trait that deals 1d4[poison] damage, has a range increment of 10 feet, and is in the dart weapon group."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "poison",
              "dice": 1,
              "die": "d4"
            }
          },
          "group": "dart",
          "img": "systems/pf2e/icons/unarmed-attacks/spine.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Spine",
          "range": {
            "increment": 10
          },
          "traits": [
            "unarmed"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "9Iu1gFEuvVz9zaYU",
      "sourcePath": "pf2e-master/packs/heritages/azarketi/spined-azarketi.json",
      "slug": "spined-azarketi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Azarketi",
      "slug": "azarketi",
      "uuid": "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
      "sourceId": "yFoojz6q3ZjvceFw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:stalker-minotaur",
    "kind": "heritage",
    "slug": "stalker-minotaur",
    "name": "Stalker Minotaur",
    "description": {
      "sourceHtml": "<p>Despite your heavy frame, you walk on shaggy hooves that muffle your footfalls, allowing you to surprise your prey. You become trained in Stealth (or another skill if you were already trained in Stealth) and gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Stalker] skill feat, except you must choose rubble and you can @UUID[Compendium.pf2e.actionspf2e.Item.Sneak] no more than 10 feet instead of 5 feet without attempting a Stealth check.</p>",
      "plainText": "Despite your heavy frame, you walk on shaggy hooves that muffle your footfalls, allowing you to surprise your prey. You become trained in Stealth (or another skill if you were already trained in Stealth) and gain the skill feat, except you must choose rubble and you can no more than 10 feet instead of 5 feet without attempting a Stealth check."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.stealth.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Terrain Stalker"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "tYrb9KOv1etjE5wK",
      "sourcePath": "pf2e-master/packs/heritages/minotaur/stalker-minotaur.json",
      "slug": "stalker-minotaur",
      "image": "icons/magic/perception/silhouette-stealth-shadow.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Minotaur",
      "slug": "minotaur",
      "uuid": "Compendium.pf2e.ancestries.Item.3wQ49DoWFYQgVsq6",
      "sourceId": "3wQ49DoWFYQgVsq6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:steadfast-tanuki",
    "kind": "heritage",
    "slug": "steadfast-tanuki",
    "name": "Steadfast Tanuki",
    "description": {
      "sourceHtml": "<p>Your pride in your true tanuki form knows no bounds. You gain your choice of @UUID[Compendium.pf2e.feats-srd.Item.Everyday Form] or @UUID[Compendium.pf2e.feats-srd.Item.Teakettle Form] as a bonus ancestry feat.</p>",
      "plainText": "Your pride in your true tanuki form knows no bounds. You gain your choice of or as a bonus ancestry feat."
    },
    "rarity": "common",
    "traits": [
      "tanuki"
    ],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "adjustName": false,
          "choices": [
            {
              "value": "Compendium.pf2e.feats-srd.Item.Everyday Form"
            },
            {
              "value": "Compendium.pf2e.feats-srd.Item.Teakettle Form"
            }
          ],
          "flag": "steadfastTanuki",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.Feat"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "{item|flags.pf2e.rulesSelections.steadfastTanuki}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "5gqcEsJ4gkE6W5jj",
      "sourcePath": "pf2e-master/packs/heritages/tanuki/steadfast-tanuki.json",
      "slug": "steadfast-tanuki",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tanuki",
      "slug": "tanuki",
      "uuid": "Compendium.pf2e.ancestries.Item.pILFsoGsUQkVF5dZ",
      "sourceId": "pILFsoGsUQkVF5dZ"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:steelskin-hobgoblin",
    "kind": "heritage",
    "slug": "steelskin-hobgoblin",
    "name": "Steelskin Hobgoblin",
    "description": {
      "sourceHtml": "<p>When you are cut or burned, your body responds by forming tough but flexible callouses over the site of the injury. Over time, this makes the most vulnerable sections of your body harder and more resistant to damage. Many steelskin hobgoblins intentionally use blades and flame to scar themselves in intricate patterns, though this isn't universal. Your flat check to recover from persistent physical (including bleed), energy, or poison damage is DC 13 (rather than DC 15), or @Check[flat|dc:8] when provided particularly effective assistance.</p>",
      "plainText": "When you are cut or burned, your body responds by forming tough but flexible callouses over the site of the injury. Over time, this makes the most vulnerable sections of your body harder and more resistant to damage. Many steelskin hobgoblins intentionally use blades and flame to scar themselves in intricate patterns, though this isn't universal. Your flat check to recover from persistent physical (including bleed), energy, or poison damage is DC 13 (rather than DC 15), or flat check when provided particularly effective assistance."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "condition",
          "key": "ItemAlteration",
          "mode": "downgrade",
          "predicate": [
            {
              "or": [
                "item:damage:category:energy",
                "item:damage:category:physical",
                "item:damage:type:poison"
              ]
            }
          ],
          "property": "pd-recovery-dc",
          "value": 13
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "BFOsMnWfXL1oaWkY",
      "sourcePath": "pf2e-master/packs/heritages/hobgoblin/steelskin-hobgoblin.json",
      "slug": "steelskin-hobgoblin",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Hobgoblin",
      "slug": "hobgoblin",
      "uuid": "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
      "sourceId": "piNLXUrm9iaGqD2i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:stickytoe-tripkee",
    "kind": "heritage",
    "slug": "stickytoe-tripkee",
    "name": "Stickytoe Tripkee",
    "description": {
      "sourceHtml": "<p>Your hands and feet exude a film that helps them adhere to surfaces. You gain a +2 circumstance bonus to your Fortitude and Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Disarm], @UUID[Compendium.pf2e.actionspf2e.Item.Shove], @UUID[Compendium.pf2e.actionspf2e.Item.Reposition], or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] you. When ascending trees, vines, and other foliage, if you roll a success on the Athletics check to Climb, you get a critical success instead.</p>",
      "plainText": "Your hands and feet exude a film that helps them adhere to surfaces. You gain a +2 circumstance bonus to your Fortitude and Reflex DC against attempts to , , , or you. When ascending trees, vines, and other foliage, if you roll a success on the Athletics check to Climb, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "action:disarm",
                "action:shove",
                "action:trip",
                "action:reposition"
              ]
            }
          ],
          "selector": [
            "fortitude-dc",
            "reflex-dc"
          ],
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:climb",
            {
              "or": [
                "terrain:forest",
                "terrain:foliage"
              ]
            }
          ],
          "selector": "athletics"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "rFdVYKtHsZzRCsSd",
      "sourcePath": "pf2e-master/packs/heritages/tripkee/stickytoe-tripkee.json",
      "slug": "stickytoe-tripkee",
      "image": "systems/pf2e/icons/features/ancestry/stickeytoe-tripkee.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tripkee",
      "slug": "tripkee",
      "uuid": "Compendium.pf2e.ancestries.Item.hXM5jXezIki1cMI2",
      "sourceId": "hXM5jXezIki1cMI2"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:stonestep-shisk",
    "kind": "heritage",
    "slug": "stonestep-shisk",
    "name": "Stonestep Shisk",
    "description": {
      "sourceHtml": "<p>Navigating mountains and other rocky terrain is second nature to you. You can ignore non-magical difficult terrain caused by rubble and uneven ground made of stone and earth.</p>",
      "plainText": "Navigating mountains and other rocky terrain is second nature to you. You can ignore non-magical difficult terrain caused by rubble and uneven ground made of stone and earth."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "lDT5h3f5GXRj42Ir",
      "sourcePath": "pf2e-master/packs/heritages/shisk/stonestep-shisk.json",
      "slug": "stonestep-shisk",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Shisk",
      "slug": "shisk",
      "uuid": "Compendium.pf2e.ancestries.Item.x1YinOddgUxwOLqP",
      "sourceId": "x1YinOddgUxwOLqP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:stormtossed-tengu",
    "kind": "heritage",
    "slug": "stormtossed-tengu",
    "name": "Stormtossed Tengu",
    "description": {
      "sourceHtml": "<p>Whether due to a blessing from Hei Feng or hatching from your egg during a squall, you are resistant to storms. You gain electricity resistance equal to half your level (minimum 1). You automatically succeed at the flat check to target a @UUID[Compendium.pf2e.conditionitems.Item.Concealed] creature if that creature is concealed only by rain or fog.</p>",
      "plainText": "Whether due to a blessing from Hei Feng or hatching from your egg during a squall, you are resistant to storms. You gain electricity resistance equal to half your level (minimum 1). You automatically succeed at the flat check to target a creature if that creature is concealed only by rain or fog."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "electricity",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "7vHLPleFpSqKAjWG",
      "sourcePath": "pf2e-master/packs/heritages/tengu/stormtossed-tengu.json",
      "slug": "stormtossed-tengu",
      "image": "systems/pf2e/icons/features/ancestry/stormtossed-tengu.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tengu",
      "slug": "tengu",
      "uuid": "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
      "sourceId": "18xDKYPDBLEv2myX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:stoutheart-centaur",
    "kind": "heritage",
    "slug": "stoutheart-centaur",
    "name": "Stoutheart Centaur",
    "description": {
      "sourceHtml": "<p>You're a hardy centaur, firm of stance and strong of heart. You gain 10 Hit Points from your ancestry instead of 8 and gain a +1 circumstance bonus to Acrobatics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Balance] and to your Reflex DC to avoid being tripped.</p>",
      "plainText": "You're a hardy centaur, firm of stance and strong of heart. You gain 10 Hit Points from your ancestry instead of 8 and gain a +1 circumstance bonus to Acrobatics checks to and to your Reflex DC to avoid being tripped."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.attributes.ancestryhp",
          "priority": 51,
          "value": 10
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:balance"
          ],
          "selector": "acrobatics",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:trip"
          ],
          "selector": "reflex-dc",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "raDHBXYpc2MvWWgh",
      "sourcePath": "pf2e-master/packs/heritages/centaur/stoutheart-centaur.json",
      "slug": "stoutheart-centaur",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Centaur",
      "slug": "centaur",
      "uuid": "Compendium.pf2e.ancestries.Item.pJkQlFTvpQ5GjZ5e",
      "sourceId": "pJkQlFTvpQ5GjZ5e"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:strong-oak",
    "kind": "heritage",
    "slug": "strong-oak",
    "name": "Strong Oak",
    "description": {
      "sourceHtml": "<p>Most ghorans have bodies of pliable vines and tough stems, but you're covered in sturdy, rough bark and your legs are stable as roots. You gain a +2 circumstance bonus on your Fortitude or Reflex DC against attempts to @UUID[Compendium.pf2e.actionspf2e.Item.Grapple] or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] you. This bonus also applies to saving throws against effects that would @UUID[Compendium.pf2e.conditionitems.Item.Grabbed]{Grab} you, @UUID[Compendium.pf2e.conditionitems.Item.Restrained]{Restrain} you, or knock you @UUID[Compendium.pf2e.conditionitems.Item.Prone]. You also gain a +2 circumstance bonus on Acrobatics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Balance].</p>",
      "plainText": "Most ghorans have bodies of pliable vines and tough stems, but you're covered in sturdy, rough bark and your legs are stable as roots. You gain a +2 circumstance bonus on your Fortitude or Reflex DC against attempts to or you. This bonus also applies to saving throws against effects that would Grab you, Restrain you, or knock you . You also gain a +2 circumstance bonus on Acrobatics checks to ."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "action:grapple",
                "action:trip",
                "inflicts:grabbed",
                "inflicts:restrained",
                "inflicts:prone"
              ]
            }
          ],
          "selector": [
            "fortitude",
            "reflex"
          ],
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:balance"
          ],
          "selector": "acrobatics",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "bKr34Uvxc2XClr9q",
      "sourcePath": "pf2e-master/packs/heritages/ghoran/strong-oak.json",
      "slug": "strong-oak",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ghoran",
      "slug": "ghoran",
      "uuid": "Compendium.pf2e.ancestries.Item.tSurOqRcfumadTfr",
      "sourceId": "tSurOqRcfumadTfr"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:strong-blooded-dwarf",
    "kind": "heritage",
    "slug": "strong-blooded-dwarf",
    "name": "Strong-Blooded Dwarf",
    "description": {
      "sourceHtml": "<p>Your blood runs hearty and strong, and you can shake off toxins. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison.</p>",
      "plainText": "Your blood runs hearty and strong, and you can shake off toxins. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "success",
            "criticalSuccess"
          ],
          "predicate": [
            "poison"
          ],
          "selector": "saving-throw",
          "text": "PF2E.SpecificRule.Dwarf.StrongBloodedDwarf.Note",
          "title": "{item|name}"
        }
      },
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "poison",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "UV2sABrTC5teOXTE",
      "sourcePath": "pf2e-master/packs/heritages/dwarf/strong-blooded-dwarf.json",
      "slug": "strong-blooded-dwarf",
      "image": "systems/pf2e/icons/features/ancestry/strong-blooded-dwarf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Dwarf",
      "slug": "dwarf",
      "uuid": "Compendium.pf2e.ancestries.Item.BYj5ZvlXZdpaEgA6",
      "sourceId": "BYj5ZvlXZdpaEgA6"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:stronggut-shisk",
    "kind": "heritage",
    "slug": "stronggut-shisk",
    "name": "Stronggut Shisk",
    "description": {
      "sourceHtml": "<p>Your metabolism is slow, allowing you to go for days without food and process maladies at a slower rate. You can go for 1 week without food before you begin to starve Additionally, the onset times and lengths of stages for all diseases and poisons that affect you are increased by 50%. If the onset time or stage is instant or lasts only 1 round, this ability has no effect.</p>",
      "plainText": "Your metabolism is slow, allowing you to go for days without food and process maladies at a slower rate. You can go for 1 week without food before you begin to starve Additionally, the onset times and lengths of stages for all diseases and poisons that affect you are increased by 50%. If the onset time or stage is instant or lasts only 1 round, this ability has no effect."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "KcozzlkFAqShDEzo",
      "sourcePath": "pf2e-master/packs/heritages/shisk/stronggut-shisk.json",
      "slug": "stronggut-shisk",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Shisk",
      "slug": "shisk",
      "uuid": "Compendium.pf2e.ancestries.Item.x1YinOddgUxwOLqP",
      "sourceId": "x1YinOddgUxwOLqP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:strongjaw-kobold",
    "kind": "heritage",
    "slug": "strongjaw-kobold",
    "name": "Strongjaw Kobold",
    "description": {
      "sourceHtml": "<p>Your warren is noted for their powerful jaws and sharp teeth, either to help protect against natural predators or due to reverence of a mighty beast. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits.</p>",
      "plainText": "Your warren is noted for their powerful jaws and sharp teeth, either to help protect against natural predators or due to reverence of a mighty beast. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "baseType": "jaws",
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "piercing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "icons/creatures/abilities/mouth-teeth-long-red.webp",
          "key": "Strike",
          "label": "PF2E.Weapon.Base.jaws",
          "range": null,
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "WaCn0mcivFv1omNK",
      "sourcePath": "pf2e-master/packs/heritages/kobold/strongjaw-kobold.json",
      "slug": "strongjaw-kobold",
      "image": "systems/pf2e/icons/features/ancestry/strongjaw-kobold.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kobold",
      "slug": "kobold",
      "uuid": "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
      "sourceId": "7oQxL6wgsokD3QXG"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:stuffed-poppet",
    "kind": "heritage",
    "slug": "stuffed-poppet",
    "name": "Stuffed Poppet",
    "description": {
      "sourceHtml": "<p>You have little inside you other than cotton, sawdust, or dried leaves. You take no damage from falling, regardless of the distance you fall.</p>",
      "plainText": "You have little inside you other than cotton, sawdust, or dried leaves. You take no damage from falling, regardless of the distance you fall."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "7kHg780SAsu2FNfP",
      "sourcePath": "pf2e-master/packs/heritages/poppet/stuffed-poppet.json",
      "slug": "stuffed-poppet",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Grand Bazaar",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Poppet",
      "slug": "poppet",
      "uuid": "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
      "sourceId": "6F2fSFC1Eo1JdpY4"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sturdy-skeleton",
    "kind": "heritage",
    "slug": "sturdy-skeleton",
    "name": "Sturdy Skeleton",
    "description": {
      "sourceHtml": "<p>Certain hazardous conditions are not suitable for the average skeleton, so a necromancer might choose to reanimate the bones of a dwarf, orc, or other creature with a reputation for sturdiness. You have 10 Hit Points instead of 6 and gain the @UUID[Compendium.pf2e.feats-srd.Item.Diehard] feat.</p>",
      "plainText": "Certain hazardous conditions are not suitable for the average skeleton, so a necromancer might choose to reanimate the bones of a dwarf, orc, or other creature with a reputation for sturdiness. You have 10 Hit Points instead of 6 and gain the feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Diehard"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.attributes.ancestryhp",
          "value": 10
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "P8Rl3dUsq8AzXLHC",
      "sourcePath": "pf2e-master/packs/heritages/skeleton/sturdy-skeleton.json",
      "slug": "sturdy-skeleton",
      "image": "icons/commodities/bones/bone-foot-bird-brown.webp",
      "publication": {
        "title": "Pathfinder Book of the Dead",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Skeleton",
      "slug": "skeleton",
      "uuid": "Compendium.pf2e.ancestries.Item.58rL5sg2y4arW1i5",
      "sourceId": "58rL5sg2y4arW1i5"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:suli",
    "kind": "heritage",
    "slug": "suli",
    "name": "Suli",
    "description": {
      "sourceHtml": "<p>You are descended from a janni or otherwise embody a dichotomy of opposing elemental planar forces. You gain the suli trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from suli feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "You are descended from a janni or otherwise embody a dichotomy of opposing elemental planar forces. You gain the suli trait, in addition to the traits from your ancestry. You also gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. You can choose from suli feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "geniekin",
      "suli"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      },
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "predicate": [
            "self:low-light-vision:from-ancestry"
          ],
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "RKz7Z5pefXKiv9JE",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/suli.json",
      "slug": "suli",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:surgewise-fleshwarp",
    "kind": "heritage",
    "slug": "surgewise-fleshwarp",
    "name": "Surgewise Fleshwarp",
    "description": {
      "sourceHtml": "<p>The undulations of your body's cilia are hyper-attuned to wellsprings of magic; they trill and thrum with insights into occult energies, and their vibrations alert you to the presence of secrets. You gain the trained proficiency rank in Occultism. If you're trained in Occultism, you instead become trained in another skill of your choice. You also gain the @UUID[Compendium.pf2e.feats-srd.Item.Oddity Identification] skill feat.</p>",
      "plainText": "The undulations of your body's cilia are hyper-attuned to wellsprings of magic; they trill and thrum with insights into occult energies, and their vibrations alert you to the presence of secrets. You gain the trained proficiency rank in Occultism. If you're trained in Occultism, you instead become trained in another skill of your choice. You also gain the skill feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.occultism.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Oddity Identification"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "hzW7VoRDYsKJB8ku",
      "sourcePath": "pf2e-master/packs/heritages/fleshwarp/surgewise-fleshwarp.json",
      "slug": "surgewise-fleshwarp",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fleshwarp",
      "slug": "fleshwarp",
      "uuid": "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
      "sourceId": "FXlXmNBFiiz9oasi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sweetbreath-kholo",
    "kind": "heritage",
    "slug": "sweetbreath-kholo",
    "name": "Sweetbreath Kholo",
    "description": {
      "sourceHtml": "<p>You're a striped, pale-furred kholo with oddly pleasant breath, which you can use to entrance your prey. You are trained in Diplomacy (or another skill if you were already trained in Diplomacy). You also gain a +1 circumstance bonus to checks to @UUID[Compendium.pf2e.actionspf2e.Item.Make an Impression] if the target can smell your breath.</p>",
      "plainText": "You're a striped, pale-furred kholo with oddly pleasant breath, which you can use to entrance your prey. You are trained in Diplomacy (or another skill if you were already trained in Diplomacy). You also gain a +1 circumstance bonus to checks to if the target can smell your breath."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.diplomacy.rank",
          "value": 1
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:make-an-impression",
            "sweet-breath"
          ],
          "selector": "diplomacy",
          "slug": "sweetbreath-kholo",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "B89BCo6LtI3SJq54",
      "sourcePath": "pf2e-master/packs/heritages/kholo/sweetbreath-kholo.json",
      "slug": "sweetbreath-kholo",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kholo",
      "slug": "kholo",
      "uuid": "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
      "sourceId": "vxbQ1Yw4qwgjTzqo"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:swimming-animal",
    "kind": "heritage",
    "slug": "swimming-animal",
    "name": "Swimming Animal",
    "description": {
      "sourceHtml": "<p>You are an aquatic animal who is most comfortable in the water. You may spend much of your time in the water like an alligator, seal, whale, or dolphin, or you may require the water to breathe like a fish or some crustaceans.</p>\n<p>You have one animal attack of your choice (typically claw, jaws, or tail; see the sidebar). Choose if you are aquatic or water-dwelling.</p>\n<ul>\n<li><strong>Aquatic:</strong> You gain the aquatic trait and you have a swim Speed of 30 feet. The aquatic trait means you breathe water but not air, and your bludgeoning and slashing unarmed Strikes don't take the usual –2 penalty for being underwater.</li>\n<li><strong>Water-dwelling:</strong> You can hold your breath underwater for 10 minutes before needing air. You have a swim Speed of 20 feet, and if you can move on land, you have base Speed of 20 feet.</li>\n</ul>",
      "plainText": "You are an aquatic animal who is most comfortable in the water. You may spend much of your time in the water like an alligator, seal, whale, or dolphin, or you may require the water to breathe like a fish or some crustaceans. You have one animal attack of your choice (typically claw, jaws, or tail; see the sidebar). Choose if you are aquatic or water-dwelling. Aquatic: You gain the aquatic trait and you have a swim Speed of 30 feet. The aquatic trait means you breathe water but not air, and your bludgeoning and slashing unarmed Strikes don't take the usual –2 penalty for being underwater. Water-dwelling: You can hold your breath underwater for 10 minutes before needing air. You have a swim Speed of 20 feet, and if you can move on land, you have base Speed of 20 feet."
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
              "label": "PF2E.TraitAquatic",
              "value": "aquatic"
            },
            {
              "label": "PF2E.SpecificRule.AwakenedAnimal.SwimmingAnimal.WaterDwelling",
              "value": "water-dwelling"
            }
          ],
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.AwakenedAnimal.SwimmingAnimal.Prompt",
          "rollOption": "swimming-animal"
        }
      },
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "predicate": [
            "swimming-animal:aquatic"
          ],
          "selector": "swim",
          "value": 30
        }
      },
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "predicate": [
            "swimming-animal:water-dwelling"
          ],
          "selector": "swim",
          "value": 20
        }
      },
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "predicate": [
            "swimming-animal:water-dwelling"
          ],
          "selector": "land",
          "value": 20
        }
      },
      {
        "key": "ActorTraits",
        "data": {
          "add": [
            "aquatic"
          ],
          "key": "ActorTraits",
          "predicate": [
            "swimming-animal:aquatic"
          ]
        }
      },
      {
        "key": "AdjustModifier",
        "data": {
          "key": "AdjustModifier",
          "mode": "override",
          "predicate": [
            "swimming-animal:aquatic"
          ],
          "selector": "strike-attack-roll",
          "slug": "aquatic-combat",
          "suppress": true
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.ancestryfeatures.Item.Animal Attack"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "flags.pf2e.remainingAir.rounds",
          "predicate": [
            "swimming-animal:water-dwelling"
          ],
          "value": "100"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "nlhVoQDfLKYM3j1l",
      "sourcePath": "pf2e-master/packs/heritages/awakened-animal/swimming-animal.json",
      "slug": "swimming-animal",
      "image": "icons/creatures/fish/fish-marlin-swordfight-blue.webp",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Awakened Animal",
      "slug": "awakened-animal",
      "uuid": "Compendium.pf2e.ancestries.Item.GFOgV3MzWkYwJoJW",
      "sourceId": "GFOgV3MzWkYwJoJW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:sylph",
    "kind": "heritage",
    "slug": "sylph",
    "name": "Sylph",
    "description": {
      "sourceHtml": "<p>You are descended from air elementals or were born under the element's influence. You gain the sylph trait, in addition to the traits from your ancestry. You also gain low-light vision or darkvision if your ancestry already has low-light vision. You can choose from sylph feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "You are descended from air elementals or were born under the element's influence. You gain the sylph trait, in addition to the traits from your ancestry. You also gain low-light vision or darkvision if your ancestry already has low-light vision. You can choose from sylph feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "sylph"
    ],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      },
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "predicate": [
            "self:low-light-vision:from-ancestry"
          ],
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "G8jfMayPv4vZvAVr",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/sylph.json",
      "slug": "sylph",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:tactile-azarketi",
    "kind": "heritage",
    "slug": "tactile-azarketi",
    "name": "Tactile Azarketi",
    "description": {
      "sourceHtml": "<p>Your skin can detect the slightest changes in ocean currents. You gain imprecise wavesense with a range of 30 feet, allowing you to sense motion in the water around you. You also gain a +1 circumstance bonus to Survival checks to Sense Direction in aquatic environments.</p>",
      "plainText": "Your skin can detect the slightest changes in ocean currents. You gain imprecise wavesense with a range of 30 feet, allowing you to sense motion in the water around you. You also gain a +1 circumstance bonus to Survival checks to Sense Direction in aquatic environments."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "Tactile Azarketi (Sense Direction in aquatic environments)",
          "predicate": [
            "action:sense-direction",
            "terrain:aquatic"
          ],
          "selector": "survival",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "Sense",
        "data": {
          "acuity": "imprecise",
          "key": "Sense",
          "range": 30,
          "selector": "wavesense"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "S1062No0sYH35AhN",
      "sourcePath": "pf2e-master/packs/heritages/azarketi/tactile-azarketi.json",
      "slug": "tactile-azarketi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Azarketi",
      "slug": "azarketi",
      "uuid": "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
      "sourceId": "yFoojz6q3ZjvceFw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:tailed-goblin",
    "kind": "heritage",
    "slug": "tailed-goblin",
    "name": "Tailed Goblin",
    "description": {
      "sourceHtml": "<p>You have a powerful tail, likely because you descend from a community of monkey goblins. You gain a +2 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Climb], you gain @UUID[Compendium.pf2e.feats-srd.Item.Combat Climber] as a bonus feat, and you reduce the number of free hands required to climb or @UUID[Compendium.pf2e.actionspf2e.Item.Trip] by one.</p>",
      "plainText": "You have a powerful tail, likely because you descend from a community of monkey goblins. You gain a +2 circumstance bonus to Athletics checks to , you gain as a bonus feat, and you reduce the number of free hands required to climb or by one."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "Tailed Goblin (Climb)",
          "predicate": [
            "action:climb"
          ],
          "selector": "athletics",
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Combat Climber"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "8wGUh9RsMUamOKjh",
      "sourcePath": "pf2e-master/packs/heritages/goblin/tailed-goblin.json",
      "slug": "tailed-goblin",
      "image": "systems/pf2e/icons/features/ancestry/tailed-goblin.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Character Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goblin",
      "slug": "goblin",
      "uuid": "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
      "sourceId": "sQfjTMDaZbT9DThq"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:taloned-tengu",
    "kind": "heritage",
    "slug": "taloned-tengu",
    "name": "Taloned Tengu",
    "description": {
      "sourceHtml": "<p>Your talons are every bit as sharp and strong as your beak. You gain a talons unarmed attack that deals 1d4 slashing damage. Your talons are in the brawling group and have the agile, finesse, unarmed, and versatile P traits.</p>",
      "plainText": "Your talons are every bit as sharp and strong as your beak. You gain a talons unarmed attack that deals 1d4 slashing damage. Your talons are in the brawling group and have the agile, finesse, unarmed, and versatile P traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "slashing",
              "dice": 1,
              "die": "d4"
            }
          },
          "group": "brawling",
          "img": "systems/pf2e/icons/unarmed-attacks/talon.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Talon",
          "range": null,
          "traits": [
            "agile",
            "finesse",
            "unarmed",
            "versatile-p"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "qM566kCXljkOpocA",
      "sourcePath": "pf2e-master/packs/heritages/tengu/taloned-tengu.json",
      "slug": "taloned-tengu",
      "image": "systems/pf2e/icons/features/ancestry/taloned-tengu.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tengu",
      "slug": "tengu",
      "uuid": "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
      "sourceId": "18xDKYPDBLEv2myX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:talos",
    "kind": "heritage",
    "slug": "talos",
    "name": "Talos",
    "description": {
      "sourceHtml": "<p>Your physical features reflect the influence a zuhra or other metal elemental has had over your bloodline. Your skin likely has a metallic sheen, ranging from the dull luster of raw ore to the gleaming polish of a new blade, with the wear of age or hardship taking the form of tarnish, rust, or scouring. Your hair might resemble spun gold, coiled steel, copper wiring, or braided chains. You gain the talos trait, in addition to the traits from your ancestry. You gain resistance to electricity equal to half your level (minimum 1). You can cast the @UUID[Compendium.pf2e.spells-srd.Item.Detect Metal] cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.</p>\n<p>You can choose from talos feats, geniekin feats, and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "Your physical features reflect the influence a zuhra or other metal elemental has had over your bloodline. Your skin likely has a metallic sheen, ranging from the dull luster of raw ore to the gleaming polish of a new blade, with the wear of age or hardship taking the form of tarnish, rust, or scouring. Your hair might resemble spun gold, coiled steel, copper wiring, or braided chains. You gain the talos trait, in addition to the traits from your ancestry. You gain resistance to electricity equal to half your level (minimum 1). You can cast the cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. You can choose from talos feats, geniekin feats, and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "talos"
    ],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "electricity",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Ga7UEU186pjq7LBD",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/talos.json",
      "slug": "talos",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Rage of Elements",
        "license": "OGL",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:technological-fleshwarp",
    "kind": "heritage",
    "slug": "technological-fleshwarp",
    "name": "Technological Fleshwarp",
    "description": {
      "sourceHtml": "<p>Your transformation is due to manipulation by advanced technology, like that found in Numeria. Your emotions are dulled and hard to influence. When you roll a success on a saving throw against an emotion effect, you get a critical success instead.</p>",
      "plainText": "Your transformation is due to manipulation by advanced technology, like that found in Numeria. Your emotions are dulled and hard to influence. When you roll a success on a saving throw against an emotion effect, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "emotion"
          ],
          "selector": "saving-throw",
          "type": "skill"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "n2DKA0OQQcfvZRly",
      "sourcePath": "pf2e-master/packs/heritages/fleshwarp/technological-fleshwarp.json",
      "slug": "technological-fleshwarp",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fleshwarp",
      "slug": "fleshwarp",
      "uuid": "Compendium.pf2e.ancestries.Item.FXlXmNBFiiz9oasi",
      "sourceId": "FXlXmNBFiiz9oasi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:thalassic-azarketi",
    "kind": "heritage",
    "slug": "thalassic-azarketi",
    "name": "Thalassic Azarketi",
    "description": {
      "sourceHtml": "<p>You trace your lineage from azarketis who lived their lives among the great oceans and seas of the world. You know how to use the currents and the primal magic of water to guide your attacks. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Underwater Marauder] skill feat, and your piercing ranged attacks don't have their range increments halved when fighting underwater targets.</p>",
      "plainText": "You trace your lineage from azarketis who lived their lives among the great oceans and seas of the world. You know how to use the currents and the primal magic of water to guide your attacks. You gain the skill feat, and your piercing ranged attacks don't have their range increments halved when fighting underwater targets."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Underwater Marauder"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "qbWaybAX1LK7kUyY",
      "sourcePath": "pf2e-master/packs/heritages/azarketi/thalassic-azarketi.json",
      "slug": "thalassic-azarketi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Absalom, City of Lost Omens",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Azarketi",
      "slug": "azarketi",
      "uuid": "Compendium.pf2e.ancestries.Item.yFoojz6q3ZjvceFw",
      "sourceId": "yFoojz6q3ZjvceFw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:thickcoat-shoony",
    "kind": "heritage",
    "slug": "thickcoat-shoony",
    "name": "Thickcoat Shoony",
    "description": {
      "sourceHtml": "<p>You are a rare shoony who hails from colder climes. You gain cold resistance equal to half your level (minimum 1), and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on). You don't need to succeed at a flat check to target a concealed creature if that creature is @UUID[Compendium.pf2e.conditionitems.Item.Concealed] only by snow. Unless you wear protective gear or take shelter, environmental heat effects are one step more extreme for you.</p>",
      "plainText": "You are a rare shoony who hails from colder climes. You gain cold resistance equal to half your level (minimum 1), and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on). You don't need to succeed at a flat check to target a concealed creature if that creature is only by snow. Unless you wear protective gear or take shelter, environmental heat effects are one step more extreme for you."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "MhXHEh7utEfxBwmc",
      "sourcePath": "pf2e-master/packs/heritages/shoony/thickcoat-shoony.json",
      "slug": "thickcoat-shoony",
      "image": "systems/pf2e/icons/features/ancestry/thickcoat-shoony.webp",
      "publication": {
        "title": "Pathfinder #153: Life's Long Shadows",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Shoony",
      "slug": "shoony",
      "uuid": "Compendium.pf2e.ancestries.Item.q6rsqYARyOGXZA8F",
      "sourceId": "q6rsqYARyOGXZA8F"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:thickskin-tripkee",
    "kind": "heritage",
    "slug": "thickskin-tripkee",
    "name": "Thickskin Tripkee",
    "description": {
      "sourceHtml": "<p>Your thick leathery skin resembles that of a toad. You gain 8 Hit Points from your ancestry instead of 6. You gain a +1 circumstance bonus to saves against diseases and poisons.</p>",
      "plainText": "Your thick leathery skin resembles that of a toad. You gain 8 Hit Points from your ancestry instead of 6. You gain a +1 circumstance bonus to saves against diseases and poisons."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.attributes.ancestryhp",
          "priority": 51,
          "value": 8
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "item:trait:disease",
                "item:trait:poison"
              ]
            }
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "2QLKvmCimT9ai0Bi",
      "sourcePath": "pf2e-master/packs/heritages/tripkee/thickskin-tripkee.json",
      "slug": "thickskin-tripkee",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tripkee",
      "slug": "tripkee",
      "uuid": "Compendium.pf2e.ancestries.Item.hXM5jXezIki1cMI2",
      "sourceId": "hXM5jXezIki1cMI2"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:thorned-rose",
    "kind": "heritage",
    "slug": "thorned-rose",
    "name": "Thorned Rose",
    "description": {
      "sourceHtml": "<p>Your beautiful petals and seemingly smooth skin hide silent barbs to pierce the unwary. Your body is covered with wickedly sharp thorns to discourage those that might prey upon you. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Wicked Thorns] reaction.</p>",
      "plainText": "Your beautiful petals and seemingly smooth skin hide silent barbs to pierce the unwary. Your body is covered with wickedly sharp thorns to discourage those that might prey upon you. You gain the reaction."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Wicked Thorns"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "6KhxY5ArGFhLF7r1",
      "sourcePath": "pf2e-master/packs/heritages/ghoran/thorned-rose.json",
      "slug": "thorned-rose",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ghoran",
      "slug": "ghoran",
      "uuid": "Compendium.pf2e.ancestries.Item.tSurOqRcfumadTfr",
      "sourceId": "tSurOqRcfumadTfr"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:titan-nagaji",
    "kind": "heritage",
    "slug": "titan-nagaji",
    "name": "Titan Nagaji",
    "description": {
      "sourceHtml": "<p>You were raised to be a warrior or a bodyguard, and your specialized diet and bulging muscles have made your scales as strong as armored plates. Your scales are medium armor in the plate armor group that grant a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of +3, and have the comfort trait. You can never wear other armor or remove your scales. You can etch armor runes onto your scales.</p>",
      "plainText": "You were raised to be a warrior or a bodyguard, and your specialized diet and bulging muscles have made your scales as strong as armored plates. Your scales are medium armor in the plate armor group that grant a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of +3, and have the comfort trait. You can never wear other armor or remove your scales. You can etch armor runes onto your scales."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.equipment-srd.Item.Titan Nagaji Scales"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "LlUEmCDOLSZaGOyI",
      "sourcePath": "pf2e-master/packs/heritages/nagaji/titan-nagaji.json",
      "slug": "titan-nagaji",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Nagaji",
      "slug": "nagaji",
      "uuid": "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
      "sourceId": "J7T7bDLaQGoY1sMF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:toy-poppet",
    "kind": "heritage",
    "slug": "toy-poppet",
    "name": "Toy Poppet",
    "description": {
      "sourceHtml": "<p>You have the form of a child's tiny toy or doll, but you don't let your small size impede your joy of life. Instead of Small, your size is Tiny. Like other Tiny creatures, you don't automatically receive lesser cover from being in a larger creature's space, but circumstances might allow you to Take Cover. You can purchase weapons, armor, and other items for your size with the same statistics as normal gear, except that melee weapons have a reach of 0 for you (or a reach 5 feet shorter than normal if they have the reach trait). You can enter another creature's space, which is important because you must usually enter a creature's space to attack it with melee Strikes! Remember to adjust the Bulk of items and your Bulk limit for Tiny size.</p>",
      "plainText": "You have the form of a child's tiny toy or doll, but you don't let your small size impede your joy of life. Instead of Small, your size is Tiny. Like other Tiny creatures, you don't automatically receive lesser cover from being in a larger creature's space, but circumstances might allow you to Take Cover. You can purchase weapons, armor, and other items for your size with the same statistics as normal gear, except that melee weapons have a reach of 0 for you (or a reach 5 feet shorter than normal if they have the reach trait). You can enter another creature's space, which is important because you must usually enter a creature's space to attack it with melee Strikes! Remember to adjust the Bulk of items and your Bulk limit for Tiny size."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "tiny"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "EHDYVhJcZ9uPUjfZ",
      "sourcePath": "pf2e-master/packs/heritages/poppet/toy-poppet.json",
      "slug": "toy-poppet",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Grand Bazaar",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Poppet",
      "slug": "poppet",
      "uuid": "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
      "sourceId": "6F2fSFC1Eo1JdpY4"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:treedweller-goblin",
    "kind": "heritage",
    "slug": "treedweller-goblin",
    "name": "Treedweller Goblin",
    "description": {
      "sourceHtml": "<p>You have adapted particularly well to living in forested environments. As long as you are in a forest or jungle, you gain a +2 circumstance bonus to Stealth checks to @UUID[Compendium.pf2e.actionspf2e.Item.Hide] and @UUID[Compendium.pf2e.actionspf2e.Item.Sneak], Survival checks to @UUID[Compendium.pf2e.actionspf2e.Item.Subsist], and your Survival DC to @UUID[Compendium.pf2e.actionspf2e.Item.Cover Tracks].</p>",
      "plainText": "You have adapted particularly well to living in forested environments. As long as you are in a forest or jungle, you gain a +2 circumstance bonus to Stealth checks to and , Survival checks to , and your Survival DC to ."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "Treedweller Goblin (Subsist)",
          "predicate": [
            "action:subsist"
          ],
          "selector": "survival",
          "type": "circumstance",
          "value": 2
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "label": "Treedweller Goblin (Hide or Sneak)",
          "predicate": [
            {
              "or": [
                "action:hide",
                "action:sneak"
              ]
            }
          ],
          "selector": "stealth",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "EEvA4uj8h3zDiAfP",
      "sourcePath": "pf2e-master/packs/heritages/goblin/treedweller-goblin.json",
      "slug": "treedweller-goblin",
      "image": "systems/pf2e/icons/features/ancestry/treedweller-goblin.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Character Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goblin",
      "slug": "goblin",
      "uuid": "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
      "sourceId": "sQfjTMDaZbT9DThq"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:trogloshi",
    "kind": "heritage",
    "slug": "trogloshi",
    "name": "Trogloshi",
    "description": {
      "sourceHtml": "<p>You're adapted to the sunless regions of dense jungle forests and deep caves, with soft flesh lacking pigment and unusually clear crystalline horns. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Crystal Luminescence] ancestry feat.</p>",
      "plainText": "You're adapted to the sunless regions of dense jungle forests and deep caves, with soft flesh lacking pigment and unusually clear crystalline horns. You gain the ancestry feat."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Crystal Luminescence"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "AVZJI5wP2X5o0LL3",
      "sourcePath": "pf2e-master/packs/heritages/kashrishi/trogloshi.json",
      "slug": "trogloshi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kashrishi",
      "slug": "kashrishi",
      "uuid": "Compendium.pf2e.ancestries.Item.dw2K1AJR9mQ25nDP",
      "sourceId": "dw2K1AJR9mQ25nDP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:tsukumogami-poppet",
    "kind": "heritage",
    "slug": "tsukumogami-poppet",
    "name": "Tsukumogami Poppet",
    "description": {
      "sourceHtml": "<p>You have the form and memories of a common tool. Choose one Lore skill related to what kind of tool you were; for instance, Cooking Lore for a kitchen knife or spoon. You're trained in this skill, and you gain a +2 circumstance bonus to checks to Aid with this skill. If you take the @UUID[Compendium.pf2e.feats-srd.Item.Helpful Poppet] feat, the bonus increases to +3.</p>\n<p>While most poppets are made of stuffing, cloth, or soft metals, some tsukumogami are made of other materials, changing the poppet weakness to fire. If your body is primarily wood or cloth, you have the normal poppet weakness to fire. If your body is primarily metal, you're instead weak to electricity; if its primarily ceramic, you're instead weak to cold.</p>",
      "plainText": "You have the form and memories of a common tool. Choose one Lore skill related to what kind of tool you were; for instance, Cooking Lore for a kitchen knife or spoon. You're trained in this skill, and you gain a +2 circumstance bonus to checks to Aid with this skill. If you take the feat, the bonus increases to +3. While most poppets are made of stuffing, cloth, or soft metals, some tsukumogami are made of other materials, changing the poppet weakness to fire. If your body is primarily wood or cloth, you have the normal poppet weakness to fire. If your body is primarily metal, you're instead weak to electricity; if its primarily ceramic, you're instead weak to cold."
    },
    "rarity": "uncommon",
    "traits": [
      "poppet"
    ],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "adjustName": false,
          "choices": [
            {
              "label": "PF2E.SpecificRule.Poppet.Tsukumogami.Cloth",
              "value": "fire"
            },
            {
              "label": "PF2E.TraitMetal",
              "value": "electricity"
            },
            {
              "label": "PF2E.SpecificRule.Poppet.Tsukumogami.Ceramic",
              "value": "cold"
            }
          ],
          "flag": "weakness",
          "key": "ChoiceSet",
          "label": "PF2E.SpecificRule.Prompt.Material",
          "rollOption": "tsukumogami-poppet"
        }
      },
      {
        "key": "Weakness",
        "data": {
          "key": "Weakness",
          "predicate": [
            {
              "not": "feat:insulated-poppet"
            }
          ],
          "type": "{item|flags.pf2e.rulesSelections.weakness}",
          "value": "max(1,floor(@actor.level/3))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "cKgxEWnRVazFPi3M",
      "sourcePath": "pf2e-master/packs/heritages/poppet/tsukumogami-poppet.json",
      "slug": "tsukumogami-poppet",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Poppet",
      "slug": "poppet",
      "uuid": "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
      "sourceId": "6F2fSFC1Eo1JdpY4"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:tunnel-rat",
    "kind": "heritage",
    "slug": "tunnel-rat",
    "name": "Tunnel Rat",
    "description": {
      "sourceHtml": "<p>You can easily compress your body and squeeze through gaps. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Quick Squeeze] feat as a bonus feat, even if you aren't trained in Acrobatics. Tight spaces not tight enough to require the @UUID[Compendium.pf2e.actionspf2e.Item.Squeeze] action aren't difficult terrain for you.</p>",
      "plainText": "You can easily compress your body and squeeze through gaps. You gain the feat as a bonus feat, even if you aren't trained in Acrobatics. Tight spaces not tight enough to require the action aren't difficult terrain for you."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Quick Squeeze"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "U882U2NUUGL6u3rL",
      "sourcePath": "pf2e-master/packs/heritages/ratfolk/tunnel-rat.json",
      "slug": "tunnel-rat",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Ratfolk",
      "slug": "ratfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.P6PcVnCkh4XMdefw",
      "sourceId": "P6PcVnCkh4XMdefw"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:tunnelflood-kobold",
    "kind": "heritage",
    "slug": "tunnelflood-kobold",
    "name": "Tunnelflood Kobold",
    "description": {
      "sourceHtml": "<p>You grew up in a warren crisscrossed by underwater passages, whether natural or excavated, and were influenced by a powerful aquatic entity or being of primal water. You gain a swim Speed of 15 feet.</p>",
      "plainText": "You grew up in a warren crisscrossed by underwater passages, whether natural or excavated, and were influenced by a powerful aquatic entity or being of primal water. You gain a swim Speed of 15 feet."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "swim-speed",
          "value": 15
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ZW8GX14n3ZGievK1",
      "sourcePath": "pf2e-master/packs/heritages/kobold/tunnelflood-kobold.json",
      "slug": "tunnelflood-kobold",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kobold",
      "slug": "kobold",
      "uuid": "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
      "sourceId": "7oQxL6wgsokD3QXG"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:twilight-halfling",
    "kind": "heritage",
    "slug": "twilight-halfling",
    "name": "Twilight Halfling",
    "description": {
      "sourceHtml": "<p>Your ancestors performed many secret acts under the concealing cover of dusk, whether for good or ill, and over time they developed the ability to see in twilight beyond even the usual keen sight of halflings. You gain low-light vision.</p>",
      "plainText": "Your ancestors performed many secret acts under the concealing cover of dusk, whether for good or ill, and over time they developed the ability to see in twilight beyond even the usual keen sight of halflings. You gain low-light vision."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "low-light-vision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "cCy8vsZENlwiAyZ6",
      "sourcePath": "pf2e-master/packs/heritages/halfling/twilight-halfling.json",
      "slug": "twilight-halfling",
      "image": "systems/pf2e/icons/features/ancestry/twilight-halfling.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Halfling",
      "slug": "halfling",
      "uuid": "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
      "sourceId": "GgZAHbrjnzWOZy2v"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:umbral-gnome",
    "kind": "heritage",
    "slug": "umbral-gnome",
    "name": "Umbral Gnome",
    "description": {
      "sourceHtml": "<p>Whether from a connection to dark or shadowy fey, from the underground gnomes known as drathnelar, or from another source, you can see in complete darkness. You gain darkvision.</p>",
      "plainText": "Whether from a connection to dark or shadowy fey, from the underground gnomes known as drathnelar, or from another source, you can see in complete darkness. You gain darkvision."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Sense",
        "data": {
          "key": "Sense",
          "selector": "darkvision"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "d0bNxgGqvaCkFlhN",
      "sourcePath": "pf2e-master/packs/heritages/gnome/umbral-gnome.json",
      "slug": "umbral-gnome",
      "image": "systems/pf2e/icons/features/ancestry/umbral-gnome.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Gnome",
      "slug": "gnome",
      "uuid": "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
      "sourceId": "CYlfsYLJcBOgqKtD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:unbreakable-goblin",
    "kind": "heritage",
    "slug": "unbreakable-goblin",
    "name": "Unbreakable Goblin",
    "description": {
      "sourceHtml": "<p>You're able to bounce back from injuries easily due to an exceptionally thick skull, cartilaginous bones, or some other mixed blessing. You gain 10 Hit Points from your ancestry instead of 6. When you fall, reduce the falling damage you take as though you had fallen half the distance.</p>",
      "plainText": "You're able to bounce back from injuries easily due to an exceptionally thick skull, cartilaginous bones, or some other mixed blessing. You gain 10 Hit Points from your ancestry instead of 6. When you fall, reduce the falling damage you take as though you had fallen half the distance."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "system.attributes.ancestryhp",
          "value": 10
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ULj56ZoW7dWdnBvu",
      "sourcePath": "pf2e-master/packs/heritages/goblin/unbreakable-goblin.json",
      "slug": "unbreakable-goblin",
      "image": "systems/pf2e/icons/features/ancestry/unbreakable-goblin.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goblin",
      "slug": "goblin",
      "uuid": "Compendium.pf2e.ancestries.Item.sQfjTMDaZbT9DThq",
      "sourceId": "sQfjTMDaZbT9DThq"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:undine",
    "kind": "heritage",
    "slug": "undine",
    "name": "Undine",
    "description": {
      "sourceHtml": "<p>A water elemental ancestor influences your bloodline. You gain the undine trait, in addition to the traits from your ancestry. You gain a swim Speed of 10 feet and the amphibious trait. Like all creatures with the amphibious trait, you can breathe both water and air. You can choose from undine feats and feats from your ancestry whenever you gain an ancestry feat.</p>",
      "plainText": "A water elemental ancestor influences your bloodline. You gain the undine trait, in addition to the traits from your ancestry. You gain a swim Speed of 10 feet and the amphibious trait. Like all creatures with the amphibious trait, you can breathe both water and air. You can choose from undine feats and feats from your ancestry whenever you gain an ancestry feat."
    },
    "rarity": "uncommon",
    "traits": [
      "amphibious",
      "undine"
    ],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "swim",
          "value": 10
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Gmk7oNITvMVBy78Z",
      "sourcePath": "pf2e-master/packs/heritages/versatile-heritages/undine.json",
      "slug": "undine",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": null,
    "versatile": true
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:unseen-lizardfolk",
    "kind": "heritage",
    "slug": "unseen-lizardfolk",
    "name": "Unseen Lizardfolk",
    "description": {
      "sourceHtml": "<p>You can change your skin color to blend in with your surroundings, making minor shifts with a single action and dramatic changes over the course of an hour. When you're in an area where your coloration is roughly similar to the environment (for instance, forest green in a forest), you can use the minor, single-action application of this ability to make localized changes that help you blend into your surroundings, gaining a +2 circumstance bonus to Stealth checks until your surroundings change in coloration or pattern.</p>",
      "plainText": "You can change your skin color to blend in with your surroundings, making minor shifts with a single action and dramatic changes over the course of an hour. When you're in an area where your coloration is roughly similar to the environment (for instance, forest green in a forest), you can use the minor, single-action application of this ability to make localized changes that help you blend into your surroundings, gaining a +2 circumstance bonus to Stealth checks until your surroundings change in coloration or pattern."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "coloration-matches"
          ],
          "selector": "stealth",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "VYfpTUuXJM3iBOz0",
      "sourcePath": "pf2e-master/packs/heritages/lizardfolk/unseen-lizardfolk.json",
      "slug": "unseen-lizardfolk",
      "image": "systems/pf2e/icons/features/ancestry/unseen-lizardfolk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Lizardfolk",
      "slug": "lizardfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
      "sourceId": "HWEgF7Gmoq55VhTL"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:venom-resistant-vishkanya",
    "kind": "heritage",
    "slug": "venom-resistant-vishkanya",
    "name": "Venom-Resistant Vishkanya",
    "description": {
      "sourceHtml": "<p>Your body contains not just venom but numerous antivenoms. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison.</p>",
      "plainText": "Your body contains not just venom but numerous antivenoms. You gain poison resistance equal to half your level (minimum 1), and each of your successful saving throws against a poison affliction reduces its stage by 2, or by 1 for a virulent poison. Each critical success against an ongoing poison reduces its stage by 3, or by 2 for a virulent poison."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "poison",
          "value": "max(1,floor(@actor.level/2))"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "success",
            "criticalSuccess"
          ],
          "predicate": [
            "poison",
            "virulent"
          ],
          "selector": "saving-throw",
          "text": "PF2E.SpecificRule.Vishkanya.VenomResistantVishkanya.VirulentSaveNote",
          "title": "{item|name}"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "success",
            "criticalSuccess"
          ],
          "predicate": [
            "poison",
            {
              "not": "virulent"
            }
          ],
          "selector": "saving-throw",
          "text": "PF2E.SpecificRule.Vishkanya.VenomResistantVishkanya.PoisonSaveNote",
          "title": "{item|name}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "OBxrlZKg0IC5n238",
      "sourcePath": "pf2e-master/packs/heritages/vishkanya/venom-resistant-vishkanya.json",
      "slug": "venom-resistant-vishkanya",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Vishkanya",
      "slug": "vishkanya",
      "uuid": "Compendium.pf2e.ancestries.Item.u1VJEXsVlmh3Fyx0",
      "sourceId": "u1VJEXsVlmh3Fyx0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:venomous-anadi",
    "kind": "heritage",
    "slug": "venomous-anadi",
    "name": "Venomous Anadi",
    "description": {
      "sourceHtml": "<p>Your natural form's fangs are capable of injecting foes with venom. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Anadi Venom] ability.</p>",
      "plainText": "Your natural form's fangs are capable of injecting foes with venom. You gain the ability."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Anadi Venom"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "kTlJqhC7ZSE8P8lu",
      "sourcePath": "pf2e-master/packs/heritages/anadi/venomous-anadi.json",
      "slug": "venomous-anadi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Anadi",
      "slug": "anadi",
      "uuid": "Compendium.pf2e.ancestries.Item.TQEqWqc7BYiadUdY",
      "sourceId": "TQEqWqc7BYiadUdY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:venomshield-nagaji",
    "kind": "heritage",
    "slug": "venomshield-nagaji",
    "name": "Venomshield Nagaji",
    "description": {
      "sourceHtml": "<p>Your intrinsic connection to nagas and mundane serpents grants you an innate resistance to toxins of every sort. You gain resistance to poison equal to half your level (minimum 1 resistance), and you gain a +1 circumstance bonus to all saving throws against poison.</p>",
      "plainText": "Your intrinsic connection to nagas and mundane serpents grants you an innate resistance to toxins of every sort. You gain resistance to poison equal to half your level (minimum 1 resistance), and you gain a +1 circumstance bonus to all saving throws against poison."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "poison",
          "value": "max(1,floor(@actor.level/2))"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "poison"
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "2jsWmnKtidCTpaQV",
      "sourcePath": "pf2e-master/packs/heritages/nagaji/venomshield-nagaji.json",
      "slug": "venomshield-nagaji",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Nagaji",
      "slug": "nagaji",
      "uuid": "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
      "sourceId": "J7T7bDLaQGoY1sMF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:venomtail-kobold",
    "kind": "heritage",
    "slug": "venomtail-kobold",
    "name": "Venomtail Kobold",
    "description": {
      "sourceHtml": "<p>Thanks to the proximity of a venomous creature to your warren, you were born with a vestigial spur in your tail that secretes deadly venom. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Tail Toxin] action.</p>",
      "plainText": "Thanks to the proximity of a venomous creature to your warren, you were born with a vestigial spur in your tail that secretes deadly venom. You gain the action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Tail Toxin"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "m9rrlchS10xHFA2G",
      "sourcePath": "pf2e-master/packs/heritages/kobold/venomtail-kobold.json",
      "slug": "venomtail-kobold",
      "image": "systems/pf2e/icons/features/ancestry/venomtail-kobold.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kobold",
      "slug": "kobold",
      "uuid": "Compendium.pf2e.ancestries.Item.7oQxL6wgsokD3QXG",
      "sourceId": "7oQxL6wgsokD3QXG"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:versatile-human",
    "kind": "heritage",
    "slug": "versatile-human",
    "name": "Versatile Human",
    "description": {
      "sourceHtml": "<p>Humanity's versatility and ambition have fueled its ascendance to be the most common ancestry in most nations throughout the world. Select a general feat of your choice for which you meet the prerequisites (as with your ancestry feat, you can select this general feat at any point during character creation).</p>",
      "plainText": "Humanity's versatility and ambition have fueled its ascendance to be the most common ancestry in most nations throughout the world. Select a general feat of your choice for which you meet the prerequisites (as with your ancestry feat, you can select this general feat at any point during character creation)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "adjustName": false,
          "choices": {
            "filter": [
              "item:level:1",
              "item:trait:general"
            ],
            "itemType": "feat"
          },
          "flag": "versatileHeritage",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.GeneralTraining.Prompt"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "{item|flags.pf2e.rulesSelections.versatileHeritage}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "hFBwsVcSnNCJoimo",
      "sourcePath": "pf2e-master/packs/heritages/human/versatile-human.json",
      "slug": "versatile-human",
      "image": "icons/environment/people/group.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Human",
      "slug": "human",
      "uuid": "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
      "sourceId": "IiG7DgeLWYrSNXuX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:vicious-goloma",
    "kind": "heritage",
    "slug": "vicious-goloma",
    "name": "Vicious Goloma",
    "description": {
      "sourceHtml": "<p>The chitin on your hands forms powerful claws that allow you to defend yourself. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group and have the agile, finesse, and unarmed traits.</p>",
      "plainText": "The chitin on your hands forms powerful claws that allow you to defend yourself. You gain a claw unarmed attack that deals 1d6 slashing damage. Your claws are in the brawling group and have the agile, finesse, and unarmed traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "baseType": "claw",
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "slashing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "systems/pf2e/icons/features/ancestry/claws.webp",
          "key": "Strike",
          "label": "PF2E.Weapon.Base.claw",
          "range": null,
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "x5S4MNQ0aqUmgHcC",
      "sourcePath": "pf2e-master/packs/heritages/goloma/vicious-goloma.json",
      "slug": "vicious-goloma",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goloma",
      "slug": "goloma",
      "uuid": "Compendium.pf2e.ancestries.Item.c4secsSNG2AO7I5i",
      "sourceId": "c4secsSNG2AO7I5i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:vigilant-goloma",
    "kind": "heritage",
    "slug": "vigilant-goloma",
    "name": "Vigilant Goloma",
    "description": {
      "sourceHtml": "<p>You've learned to be aware of not just obvious physical dangers, but also noticeable magical threats. You can cast the @UUID[Compendium.pf2e.spells-srd.Item.Detect Magic] cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. In addition, your awareness allows you to notice magical traps easier than others. Your proficiency rank in Perception is considered one step better when attempting to detect magical traps. (Trained is considered expert, expert is considered master, and master is considered legendary).</p>",
      "plainText": "You've learned to be aware of not just obvious physical dangers, but also noticeable magical threats. You can cast the cantrip as an arcane innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. In addition, your awareness allows you to notice magical traps easier than others. Your proficiency rank in Perception is considered one step better when attempting to detect magical traps. (Trained is considered expert, expert is considered master, and master is considered legendary)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:detect-magic",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:detect-magic",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:goloma"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "sGzhnQpgWErX1bmx",
      "sourcePath": "pf2e-master/packs/heritages/goloma/vigilant-goloma.json",
      "slug": "vigilant-goloma",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Goloma",
      "slug": "goloma",
      "uuid": "Compendium.pf2e.ancestries.Item.c4secsSNG2AO7I5i",
      "sourceId": "c4secsSNG2AO7I5i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:vine-leshy",
    "kind": "heritage",
    "slug": "vine-leshy",
    "name": "Vine Leshy",
    "description": {
      "sourceHtml": "<p>Your prehensile vines grant you unmatched skill at climbing. You do not need to have any hands free to @UUID[Compendium.pf2e.actionspf2e.Item.Climb]. Additionally, if you roll a success on an Athletics check to Climb, you get a critical success instead.</p>",
      "plainText": "Your prehensile vines grant you unmatched skill at climbing. You do not need to have any hands free to . Additionally, if you roll a success on an Athletics check to Climb, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:climb"
          ],
          "selector": "athletics"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "evXJISqyhl3fHE9u",
      "sourcePath": "pf2e-master/packs/heritages/leshy/vine-leshy.json",
      "slug": "vine-leshy",
      "image": "systems/pf2e/icons/features/ancestry/vine-leshy.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Leshy",
      "slug": "leshy",
      "uuid": "Compendium.pf2e.ancestries.Item.cdhgByGG1WtuaK73",
      "sourceId": "cdhgByGG1WtuaK73"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:virtuous-tanuki",
    "kind": "heritage",
    "slug": "virtuous-tanuki",
    "name": "Virtuous Tanuki",
    "description": {
      "sourceHtml": "<p>Many tanuki carry a gourd of alcohol to remind themselves to act with virtue, and by these standards, you're quite virtuous indeed. You gain poison resistance equal to half your level (minimum 1). You can eat and drink things when you're @UUID[Compendium.pf2e.conditionitems.Item.Sickened]. You can't become incapacitated by conventional alcohol if you don't wish to be.</p>",
      "plainText": "Many tanuki carry a gourd of alcohol to remind themselves to act with virtue, and by these standards, you're quite virtuous indeed. You gain poison resistance equal to half your level (minimum 1). You can eat and drink things when you're . You can't become incapacitated by conventional alcohol if you don't wish to be."
    },
    "rarity": "common",
    "traits": [
      "tanuki"
    ],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "poison",
          "value": "max(1,floor(@actor.level/2))"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "consumable",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "self:condition:sickened",
            {
              "or": [
                "item:tag:alchemical-food",
                "item:trait:elixir",
                "item:trait:ingested",
                "item:trait:potion"
              ]
            }
          ],
          "priority": 121,
          "property": "description",
          "value": [
            {
              "text": "PF2E.SpecificRule.Conditions.Sickened.AllowEatOrDrink"
            }
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "JtrZ2TcPXP1uIcmd",
      "sourcePath": "pf2e-master/packs/heritages/tanuki/virtuous-tanuki.json",
      "slug": "virtuous-tanuki",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tanuki",
      "slug": "tanuki",
      "uuid": "Compendium.pf2e.ancestries.Item.pILFsoGsUQkVF5dZ",
      "sourceId": "pILFsoGsUQkVF5dZ"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:vivacious-gnome",
    "kind": "heritage",
    "slug": "vivacious-gnome",
    "name": "Vivacious Gnome",
    "description": {
      "sourceHtml": "<p>You have an incredibly strong connection to the vitality energy that flows through the First World, making it harder to attack your life force with void energy. You gain void resistance equal to half your level (minimum 1). When you have the @UUID[Compendium.pf2e.conditionitems.Item.Doomed] condition, the condition affects you as if its value was 1 lower than it actually is (doomed 1 has no effect, doomed 2 causes you to die at @UUID[Compendium.pf2e.conditionitems.Item.Dying]{Dying 3}, and so on).</p>",
      "plainText": "You have an incredibly strong connection to the vitality energy that flows through the First World, making it harder to attack your life force with void energy. You gain void resistance equal to half your level (minimum 1). When you have the condition, the condition affects you as if its value was 1 lower than it actually is (doomed 1 has no effect, doomed 2 causes you to die at Dying 3, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "void",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "ViKRoVgog172r163",
      "sourcePath": "pf2e-master/packs/heritages/gnome/vivacious-gnome.json",
      "slug": "vivacious-gnome",
      "image": "systems/pf2e/icons/features/ancestry/vivacious-gnome.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Character Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Gnome",
      "slug": "gnome",
      "uuid": "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
      "sourceId": "CYlfsYLJcBOgqKtD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:wajaghand-vanara",
    "kind": "heritage",
    "slug": "wajaghand-vanara",
    "name": "Wajaghand Vanara",
    "description": {
      "sourceHtml": "<p>Your ancestors were forced into labor by the rakshasa immortal Ravana, the First and the Last. Although their cleverness while in captivity saved countless lives, and they're bound no longer, the time marked your family with scars upon the mind that will never truly heal, even across the generations. You gain a +1 circumstance bonus to saving throws against emotion effects, and whenever you roll a success on a saving throw against an emotion effect, you get a critical success instead.</p>",
      "plainText": "Your ancestors were forced into labor by the rakshasa immortal Ravana, the First and the Last. Although their cleverness while in captivity saved countless lives, and they're bound no longer, the time marked your family with scars upon the mind that will never truly heal, even across the generations. You gain a +1 circumstance bonus to saving throws against emotion effects, and whenever you roll a success on a saving throw against an emotion effect, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "emotion"
          ],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "emotion"
          ],
          "selector": "saving-throw",
          "type": "saves"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "nUCRd8tmz3C6LM0T",
      "sourcePath": "pf2e-master/packs/heritages/vanara/wajaghand-vanara.json",
      "slug": "wajaghand-vanara",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Vanara",
      "slug": "vanara",
      "uuid": "Compendium.pf2e.ancestries.Item.cLtOGIkuSSa4UDHY",
      "sourceId": "cLtOGIkuSSa4UDHY"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:waning-moon-sarangay",
    "kind": "heritage",
    "slug": "waning-moon-sarangay",
    "name": "Waning Moon Sarangay",
    "description": {
      "sourceHtml": "<p>Your ancestors were named for the moon in transition, ever-changing and ephemeral. They're the keepers of secret arts, just as the waning moon hides its face, and their communities were highly regarded for their storytellers, performers, and artists. You lived among your community on the outskirts of forests or rivers, where many answers came as riddles, and you learned to see the world from different perspectives. Your people are often red or fawn colored, with prominent eyes and flat, compact horns. You become trained in your choice of Acrobatics, Crafting, or Performance.</p>\n<p>Once per day, when you roll a critical failure with the chosen skill, you can reroll the check, taking the new result, even if it's worse. Rerolling in this way is a fortune effect.</p>",
      "plainText": "Your ancestors were named for the moon in transition, ever-changing and ephemeral. They're the keepers of secret arts, just as the waning moon hides its face, and their communities were highly regarded for their storytellers, performers, and artists. You lived among your community on the outskirts of forests or rivers, where many answers came as riddles, and you learned to see the world from different perspectives. Your people are often red or fawn colored, with prominent eyes and flat, compact horns. You become trained in your choice of Acrobatics, Crafting, or Performance. Once per day, when you roll a critical failure with the chosen skill, you can reroll the check, taking the new result, even if it's worse. Rerolling in this way is a fortune effect."
    },
    "rarity": "common",
    "traits": [
      "sarangay"
    ],
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
              "label": "PF2E.Skill.Crafting",
              "value": "crafting"
            },
            {
              "label": "PF2E.Skill.Performance",
              "value": "performance"
            }
          ],
          "flag": "skill",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.Skill"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.{item|flags.pf2e.rulesSelections.skill}.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "MNeg7vI854rB6fmz",
      "sourcePath": "pf2e-master/packs/heritages/sarangay/waning-moon-sarangay.json",
      "slug": "waning-moon-sarangay",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sarangay",
      "slug": "sarangay",
      "uuid": "Compendium.pf2e.ancestries.Item.7mpMGhVoaPANJnZ8",
      "sourceId": "7mpMGhVoaPANJnZ8"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:warden-human-bb",
    "kind": "heritage",
    "slug": "warden-human-bb",
    "name": "Warden Human (BB)",
    "description": {
      "sourceHtml": "<p>You and your family members are survivors, and you've learned how to take care of yourself. Pick one of the following benefits.</p>\n<ul>\n<li>Add 4 to your maximum Hit Points.</li>\n<li>You become an expert in Fortitude saving throws.</li>\n<li>You become trained in medium armor.</li>\n</ul>\n<p><em>Note: This heritage is from the Beginner Box and features non-standard heritage features</em></p>",
      "plainText": "You and your family members are survivors, and you've learned how to take care of yourself. Pick one of the following benefits. Add 4 to your maximum Hit Points. You become an expert in Fortitude saving throws. You become trained in medium armor. Note: This heritage is from the Beginner Box and features non-standard heritage features"
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
              "label": "PF2E.SpecificRule.WardenHuman.HitPoints",
              "value": "hp"
            },
            {
              "label": "PF2E.SpecificRule.WardenHuman.Fortitude",
              "value": "fortitude"
            },
            {
              "label": "PF2E.SpecificRule.WardenHuman.MediumArmor",
              "value": "armor"
            }
          ],
          "flag": "wardenHumanBB",
          "key": "ChoiceSet",
          "label": "PF2E.UI.RuleElements.ChoiceSet.Prompt",
          "rollOption": "heritage:warden-human"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "heritage:warden-human:hp"
          ],
          "selector": "hp",
          "value": 4
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.proficiencies.defenses.medium.rank",
          "predicate": [
            "heritage:warden-human:armor"
          ],
          "value": 1
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.saves.fortitude.rank",
          "predicate": [
            "heritage:warden-human:fortitude"
          ],
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "0Iv6LfT3UEt8taj5",
      "sourcePath": "pf2e-master/packs/heritages/human/warden-human-bb.json",
      "slug": "warden-human-bb",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Beginner Box",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Human",
      "slug": "human",
      "uuid": "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
      "sourceId": "IiG7DgeLWYrSNXuX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:warmarch-hobgoblin",
    "kind": "heritage",
    "slug": "warmarch-hobgoblin",
    "name": "Warmarch Hobgoblin",
    "description": {
      "sourceHtml": "<p>You come from a line of wandering mercenaries constantly on the march and scavenging food on the trail. If you fail, but don't critically fail, to @UUID[Compendium.pf2e.actionspf2e.Item.Subsist] in the wilderness, you can still keep yourself fed with poor meals. When exploring, you can @UUID[Compendium.pf2e.actionspf2e.Item.Hustle] twice as long before you have to stop.</p>",
      "plainText": "You come from a line of wandering mercenaries constantly on the march and scavenging food on the trail. If you fail, but don't critically fail, to in the wilderness, you can still keep yourself fed with poor meals. When exploring, you can twice as long before you have to stop."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "K124fCpU03SJvmeP",
      "sourcePath": "pf2e-master/packs/heritages/hobgoblin/warmarch-hobgoblin.json",
      "slug": "warmarch-hobgoblin",
      "image": "systems/pf2e/icons/features/ancestry/warmarch-hobgoblin.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Hobgoblin",
      "slug": "hobgoblin",
      "uuid": "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
      "sourceId": "piNLXUrm9iaGqD2i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:warrenbred-hobgoblin",
    "kind": "heritage",
    "slug": "warrenbred-hobgoblin",
    "name": "Warrenbred Hobgoblin",
    "description": {
      "sourceHtml": "<p>Your ancestors lived underground. Your ears are larger than those of other hobgoblins and sensitive to echoes. While you're underground, when you target an opponent that is @UUID[Compendium.pf2e.conditionitems.Item.Concealed] from you or @UUID[Compendium.pf2e.conditionitems.Item.Hidden] from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one. In addition, if you roll a success on an Acrobatics check to @UUID[Compendium.pf2e.actionspf2e.Item.Squeeze], you get a critical success instead.</p>",
      "plainText": "Your ancestors lived underground. Your ears are larger than those of other hobgoblins and sensitive to echoes. While you're underground, when you target an opponent that is from you or from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one. In addition, if you roll a success on an Acrobatics check to , you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            "action:squeeze"
          ],
          "selector": "acrobatics"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "0vaeOoECfVD5EGbq",
      "sourcePath": "pf2e-master/packs/heritages/hobgoblin/warrenbred-hobgoblin.json",
      "slug": "warrenbred-hobgoblin",
      "image": "systems/pf2e/icons/features/ancestry/warrenbred-hobgoblin.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Hobgoblin",
      "slug": "hobgoblin",
      "uuid": "Compendium.pf2e.ancestries.Item.piNLXUrm9iaGqD2i",
      "sourceId": "piNLXUrm9iaGqD2i"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:warrior-android",
    "kind": "heritage",
    "slug": "warrior-android",
    "name": "Warrior Android",
    "description": {
      "sourceHtml": "<p>Your body was originally created to function as a security officer or soldier. You're a naturally gifted warrior preprogrammed for combat. You're trained in all simple and martial weapons.</p>",
      "plainText": "Your body was originally created to function as a security officer or soldier. You're a naturally gifted warrior preprogrammed for combat. You're trained in all simple and martial weapons."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.proficiencies.attacks.simple.rank",
          "value": 1
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.proficiencies.attacks.martial.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "RuQSx0QsirIKxwKY",
      "sourcePath": "pf2e-master/packs/heritages/android/warrior-android.json",
      "slug": "warrior-android",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Android",
      "slug": "android",
      "uuid": "Compendium.pf2e.ancestries.Item.GfLwE884NoRC7cRi",
      "sourceId": "GfLwE884NoRC7cRi"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:warrior-automaton",
    "kind": "heritage",
    "slug": "warrior-automaton",
    "name": "Warrior Automaton",
    "description": {
      "sourceHtml": "<p>Sporting a bulkier, powerful design, your body has been designed for combat. You have a bulky, humanoid shape. The damage die for your fist increases to 1d6 instead of 1d4. You don't take a penalty when making a lethal attack with your fist or any other unarmed attack.</p>",
      "plainText": "Sporting a bulkier, powerful design, your body has been designed for combat. You have a bulky, humanoid shape. The damage die for your fist increases to 1d6 instead of 1d4. You don't take a penalty when making a lethal attack with your fist or any other unarmed attack."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "fist": true,
          "key": "Strike"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemId": "xxxxxxFISTxxxxxx",
          "key": "ItemAlteration",
          "mode": "upgrade",
          "property": "damage-dice-faces"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "y24ykEUfpIu5Gp6D",
      "sourcePath": "pf2e-master/packs/heritages/automaton/warrior-automaton.json",
      "slug": "warrior-automaton",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Guns & Gears",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Automaton",
      "slug": "automaton",
      "uuid": "Compendium.pf2e.ancestries.Item.kYsBAJ103T44agJF",
      "sourceId": "kYsBAJ103T44agJF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:wavediver-tengu",
    "kind": "heritage",
    "slug": "wavediver-tengu",
    "name": "Wavediver Tengu",
    "description": {
      "sourceHtml": "<p>You're one of the rare tengu who can cut through water like a bird through air, and you often lurk in rivers or oceans where few expect you. You gain a swim Speed of 15 feet.</p>",
      "plainText": "You're one of the rare tengu who can cut through water like a bird through air, and you often lurk in rivers or oceans where few expect you. You gain a swim Speed of 15 feet."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "swim",
          "value": 15
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "WEzgrxBRFBGdj8Hx",
      "sourcePath": "pf2e-master/packs/heritages/tengu/wavediver-tengu.json",
      "slug": "wavediver-tengu",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tengu",
      "slug": "tengu",
      "uuid": "Compendium.pf2e.ancestries.Item.18xDKYPDBLEv2myX",
      "sourceId": "18xDKYPDBLEv2myX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:waxing-moon-sarangay",
    "kind": "heritage",
    "slug": "waxing-moon-sarangay",
    "name": "Waxing Moon Sarangay",
    "description": {
      "sourceHtml": "<p>Your ancestors dwelled in the swamps, fens, and flooded forests, where they contended with fierce predators and formed raiding parties to claim scarce resources. Blessed by the growing crescent, you're one of the eviscerators, and you can overcome threats that lurk in murky waters as well as those that hunt on land. You're a powerful swimmer with brown or gray fur and backward- or downward-curving horns. You gain a +2 circumstance bonus to Athletics checks to @UUID[Compendium.pf2e.actionspf2e.Item.Long Jump] or @UUID[Compendium.pf2e.actionspf2e.Item.Swim].</p>",
      "plainText": "Your ancestors dwelled in the swamps, fens, and flooded forests, where they contended with fierce predators and formed raiding parties to claim scarce resources. Blessed by the growing crescent, you're one of the eviscerators, and you can overcome threats that lurk in murky waters as well as those that hunt on land. You're a powerful swimmer with brown or gray fur and backward- or downward-curving horns. You gain a +2 circumstance bonus to Athletics checks to or ."
    },
    "rarity": "common",
    "traits": [
      "sarangay"
    ],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "action:high-jump",
                "action:swim"
              ]
            }
          ],
          "selector": "athletics",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "BHiOV3ETYSv6k7kF",
      "sourcePath": "pf2e-master/packs/heritages/sarangay/waxing-moon-sarangay.json",
      "slug": "waxing-moon-sarangay",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Sarangay",
      "slug": "sarangay",
      "uuid": "Compendium.pf2e.ancestries.Item.7mpMGhVoaPANJnZ8",
      "sourceId": "7mpMGhVoaPANJnZ8"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:wellspring-gnome",
    "kind": "heritage",
    "slug": "wellspring-gnome",
    "name": "Wellspring Gnome",
    "description": {
      "sourceHtml": "<p>Some other source of magic has a greater hold on you than the primal magic of your fey lineage does. This connection might come from an occult plane or an ancient occult song; a deity, celestial, or fiend; magical effluent left behind by a mage war; or ancient rune magic.</p>\n<p>Choose arcane, divine, or occult. You gain one cantrip from that magical tradition's spell list. You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell rank equal to half your level rounded up. Whenever you gain a primal innate spell from a gnome ancestry feat, change its tradition from primal to your chosen tradition.</p>",
      "plainText": "Some other source of magic has a greater hold on you than the primal magic of your fey lineage does. This connection might come from an occult plane or an ancient occult song; a deity, celestial, or fiend; magical effluent left behind by a mage war; or ancient rune magic. Choose arcane, divine, or occult. You gain one cantrip from that magical tradition's spell list. You can cast this spell as an innate spell at will, as a spell of your chosen tradition. A cantrip is heightened to a spell rank equal to half your level rounded up. Whenever you gain a primal innate spell from a gnome ancestry feat, change its tradition from primal to your chosen tradition."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "etkuQkjkNLPLnjkA",
      "sourcePath": "pf2e-master/packs/heritages/gnome/wellspring-gnome.json",
      "slug": "wellspring-gnome",
      "image": "systems/pf2e/icons/features/ancestry/wellspring-gnome.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Gnome",
      "slug": "gnome",
      "uuid": "Compendium.pf2e.ancestries.Item.CYlfsYLJcBOgqKtD",
      "sourceId": "CYlfsYLJcBOgqKtD"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:wetlander-lizardfolk",
    "kind": "heritage",
    "slug": "wetlander-lizardfolk",
    "name": "Wetlander Lizardfolk",
    "description": {
      "sourceHtml": "<p>Your family is descended from the most common lizardfolk heritage, and you are accustomed to aquatic environments. You gain a 15-foot swim Speed.</p>",
      "plainText": "Your family is descended from the most common lizardfolk heritage, and you are accustomed to aquatic environments. You gain a 15-foot swim Speed."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "swim",
          "value": 15
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "dJeiekfqGQ8dkwsO",
      "sourcePath": "pf2e-master/packs/heritages/lizardfolk/wetlander-lizardfolk.json",
      "slug": "wetlander-lizardfolk",
      "image": "systems/pf2e/icons/features/ancestry/wetlander-lizardfolk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Lizardfolk",
      "slug": "lizardfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
      "sourceId": "HWEgF7Gmoq55VhTL"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:whipfang-nagaji",
    "kind": "heritage",
    "slug": "whipfang-nagaji",
    "name": "Whipfang Nagaji",
    "description": {
      "sourceHtml": "<p>You have a long, flexible neck that can curl into a striking pose like that of a snake. Your deceptively powerful muscles allow you to bite with surprising distance and speed. You gain the @UUID[Compendium.pf2e.actionspf2e.Item.Raise Neck] action.</p>",
      "plainText": "You have a long, flexible neck that can curl into a striking pose like that of a snake. Your deceptively powerful muscles allow you to bite with surprising distance and speed. You gain the action."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Raise Neck"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "cDElVLonQvUK3vVk",
      "sourcePath": "pf2e-master/packs/heritages/nagaji/whipfang-nagaji.json",
      "slug": "whipfang-nagaji",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Nagaji",
      "slug": "nagaji",
      "uuid": "Compendium.pf2e.ancestries.Item.J7T7bDLaQGoY1sMF",
      "sourceId": "J7T7bDLaQGoY1sMF"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:whisper-elf",
    "kind": "heritage",
    "slug": "whisper-elf",
    "name": "Whisper Elf",
    "description": {
      "sourceHtml": "<p>Your ears are finely tuned, able to detect even the slightest whispers of sound. You gain a +2 circumstance bonus when using the @UUID[Compendium.pf2e.actionspf2e.Item.Seek] action to find @UUID[Compendium.pf2e.conditionitems.Item.Hidden] or @UUID[Compendium.pf2e.conditionitems.Item.Undetected] creatures within 30 feet of you. When you target an opponent that is @UUID[Compendium.pf2e.conditionitems.Item.Concealed] from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one. This benefit doesn't apply if you can't hear or if the creature is incapable of making sound (for example, if it's affected by a @UUID[Compendium.pf2e.spells-srd.Item.Silence] spell).</p>",
      "plainText": "Your ears are finely tuned, able to detect even the slightest whispers of sound. You gain a +2 circumstance bonus when using the action to find or creatures within 30 feet of you. When you target an opponent that is from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one. This benefit doesn't apply if you can't hear or if the creature is incapable of making sound (for example, if it's affected by a spell)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            {
              "or": [
                "target:condition:undetected",
                "target:condition:hidden"
              ]
            },
            {
              "lte": [
                "target:distance",
                30
              ]
            },
            "target:audible"
          ],
          "selector": "perception",
          "type": "circumstance",
          "value": 2
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "1wVDYY9Wue0G5R9Q",
      "sourcePath": "pf2e-master/packs/heritages/elf/whisper-elf.json",
      "slug": "whisper-elf",
      "image": "systems/pf2e/icons/features/ancestry/whisper-elf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Elf",
      "slug": "elf",
      "uuid": "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
      "sourceId": "PgKmsA2aKdbLU6O0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:wilderness-samsaran",
    "kind": "heritage",
    "slug": "wilderness-samsaran",
    "name": "Wilderness Samsaran",
    "description": {
      "sourceHtml": "<p>Your preceding lives have been reborn in various remote environments away from major settlements in Tian Xia and beyond. Your past manifestations have had to learn how to survive on their own, and you recall this will to survive while possessing very little resources. You become trained in Survival. If you would automatically become trained in Survival (from your background or class, for example), you instead become trained in a skill of your choice. You can ignore difficult terrain from trees, foliage, and undergrowth.</p>",
      "plainText": "Your preceding lives have been reborn in various remote environments away from major settlements in Tian Xia and beyond. Your past manifestations have had to learn how to survive on their own, and you recall this will to survive while possessing very little resources. You become trained in Survival. If you would automatically become trained in Survival (from your background or class, for example), you instead become trained in a skill of your choice. You can ignore difficult terrain from trees, foliage, and undergrowth."
    },
    "rarity": "common",
    "traits": [
      "samsaran"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.survival.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "e4FaENGKRD3fxZeJ",
      "sourcePath": "pf2e-master/packs/heritages/samsaran/wilderness-samsaran.json",
      "slug": "wilderness-samsaran",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Samsaran",
      "slug": "samsaran",
      "uuid": "Compendium.pf2e.ancestries.Item.l7vjMIbPAUvEIosU",
      "sourceId": "l7vjMIbPAUvEIosU"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:wildwood-halfling",
    "kind": "heritage",
    "slug": "wildwood-halfling",
    "name": "Wildwood Halfling",
    "description": {
      "sourceHtml": "<p>You hail from deep within a jungle or forest, and you've learned how to use your small size to wriggle through undergrowth and other obstacles. You ignore any difficult terrain caused by plants and fungi, such as bushes, vines, and undergrowth.</p>",
      "plainText": "You hail from deep within a jungle or forest, and you've learned how to use your small size to wriggle through undergrowth and other obstacles. You ignore any difficult terrain caused by plants and fungi, such as bushes, vines, and undergrowth."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "xtRIYizCjLg9qe1Z",
      "sourcePath": "pf2e-master/packs/heritages/halfling/wildwood-halfling.json",
      "slug": "wildwood-halfling",
      "image": "systems/pf2e/icons/features/ancestry/wildwood-halfling.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Halfling",
      "slug": "halfling",
      "uuid": "Compendium.pf2e.ancestries.Item.GgZAHbrjnzWOZy2v",
      "sourceId": "GgZAHbrjnzWOZy2v"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:windup-poppet",
    "kind": "heritage",
    "slug": "windup-poppet",
    "name": "Windup Poppet",
    "description": {
      "sourceHtml": "<p>You're made primarily of soft metals, such as tin or silver, and your life force dwells within an exceptional array of clockworks deep in your body. Provided you wind metal tabs on your body a few times each day, you don't need food or water to survive. You must still breathe to ventilate your internal mechanisms and sleep to give your mechanisms rest, just like other poppets.</p>",
      "plainText": "You're made primarily of soft metals, such as tin or silver, and your life force dwells within an exceptional array of clockworks deep in your body. Provided you wind metal tabs on your body a few times each day, you don't need food or water to survive. You must still breathe to ventilate your internal mechanisms and sleep to give your mechanisms rest, just like other poppets."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "Cv7BOjuziOQ0PO9r",
      "sourcePath": "pf2e-master/packs/heritages/poppet/windup-poppet.json",
      "slug": "windup-poppet",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Grand Bazaar",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Poppet",
      "slug": "poppet",
      "uuid": "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
      "sourceId": "6F2fSFC1Eo1JdpY4"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:windweb-tripkee",
    "kind": "heritage",
    "slug": "windweb-tripkee",
    "name": "Windweb Tripkee",
    "description": {
      "sourceHtml": "<p>Tough webbing along your hands and toes can slow any fall. As long as you have one hand free, you take no falling damage, regardless of the distance you fall.</p>",
      "plainText": "Tough webbing along your hands and toes can slow any fall. As long as you have one hand free, you take no falling damage, regardless of the distance you fall."
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "xaTTN5anLEBzWCzv",
      "sourcePath": "pf2e-master/packs/heritages/tripkee/windweb-tripkee.json",
      "slug": "windweb-tripkee",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Tripkee",
      "slug": "tripkee",
      "uuid": "Compendium.pf2e.ancestries.Item.hXM5jXezIki1cMI2",
      "sourceId": "hXM5jXezIki1cMI2"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:winter-catfolk",
    "kind": "heritage",
    "slug": "winter-catfolk",
    "name": "Winter Catfolk",
    "description": {
      "sourceHtml": "<p>You have a thick coat of fur that protects you from the cold. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
      "plainText": "You have a thick coat of fur that protects you from the cold. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "6dMd4JG0ndrObEUj",
      "sourcePath": "pf2e-master/packs/heritages/catfolk/winter-catfolk.json",
      "slug": "winter-catfolk",
      "image": "systems/pf2e/icons/features/ancestry/winter-catfolk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Catfolk",
      "slug": "catfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.972EkpJOPv9KkQIW",
      "sourceId": "972EkpJOPv9KkQIW"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:winter-kholo",
    "kind": "heritage",
    "slug": "winter-kholo",
    "name": "Winter Kholo",
    "description": {
      "sourceHtml": "<p>You're a hardy kholo covered in thick, tufted fur that makes you able to survive in the harsh winters of the colder territories. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
      "plainText": "You're a hardy kholo covered in thick, tufted fur that makes you able to survive in the harsh winters of the colder territories. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "hwRWx3hWx8ahBdz0",
      "sourcePath": "pf2e-master/packs/heritages/kholo/winter-kholo.json",
      "slug": "winter-kholo",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kholo",
      "slug": "kholo",
      "uuid": "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
      "sourceId": "vxbQ1Yw4qwgjTzqo"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:winter-orc",
    "kind": "heritage",
    "slug": "winter-orc",
    "name": "Winter Orc",
    "description": {
      "sourceHtml": "<p>Your ancestors survived in cold climates. You become trained in Survival, and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
      "plainText": "Your ancestors survived in cold climates. You become trained in Survival, and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.survival.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "pZ1u2ScWrBXSaAqQ",
      "sourcePath": "pf2e-master/packs/heritages/orc/winter-orc.json",
      "slug": "winter-orc",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Orc",
      "slug": "orc",
      "uuid": "Compendium.pf2e.ancestries.Item.lSGWXjcbOa6O5fTx",
      "sourceId": "lSGWXjcbOa6O5fTx"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:wintertouched-human",
    "kind": "heritage",
    "slug": "wintertouched-human",
    "name": "Wintertouched Human",
    "description": {
      "sourceHtml": "<p>The power of winter flows through you. This heritage is most common among the Jadwiga of Irrisen, due to their descent from Baba Yaga, and certain Erutaki touched by the spirits. You gain cold resistance equal to half your level (minimum 1), and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).</p>",
      "plainText": "The power of winter flows through you. This heritage is most common among the Jadwiga of Irrisen, due to their descent from Baba Yaga, and certain Erutaki touched by the spirits. You gain cold resistance equal to half your level (minimum 1), and you treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on)."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Resistance",
        "data": {
          "key": "Resistance",
          "type": "cold",
          "value": "max(1,floor(@actor.level/2))"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "KO33MNyY9VqNQmbZ",
      "sourcePath": "pf2e-master/packs/heritages/human/wintertouched-human.json",
      "slug": "wintertouched-human",
      "image": "systems/pf2e/icons/features/ancestry/wintertouched-human.webp",
      "publication": {
        "title": "Pathfinder Lost Omens Character Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Human",
      "slug": "human",
      "uuid": "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
      "sourceId": "IiG7DgeLWYrSNXuX"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:wishborn-poppet",
    "kind": "heritage",
    "slug": "wishborn-poppet",
    "name": "Wishborn Poppet",
    "description": {
      "sourceHtml": "<p>You were wished to life, either by a powerful spellcaster or by the earnest desire of an innocent person who loved you very much. You're living proof that a hopeful spirit can overcome any obstacle. If you roll a success on a saving throw against an emotion or fear effect, you get a critical success instead.</p>",
      "plainText": "You were wished to life, either by a powerful spellcaster or by the earnest desire of an innocent person who loved you very much. You're living proof that a hopeful spirit can overcome any obstacle. If you roll a success on a saving throw against an emotion or fear effect, you get a critical success instead."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "AdjustDegreeOfSuccess",
        "data": {
          "adjustment": {
            "success": "one-degree-better"
          },
          "key": "AdjustDegreeOfSuccess",
          "predicate": [
            {
              "or": [
                "emotion",
                "fear"
              ]
            }
          ],
          "selector": "saving-throw",
          "type": "save"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "w5801ArZQCU8IXnU",
      "sourcePath": "pf2e-master/packs/heritages/poppet/wishborn-poppet.json",
      "slug": "wishborn-poppet",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Grand Bazaar",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Poppet",
      "slug": "poppet",
      "uuid": "Compendium.pf2e.ancestries.Item.6F2fSFC1Eo1JdpY4",
      "sourceId": "6F2fSFC1Eo1JdpY4"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:wisp-fetchling",
    "kind": "heritage",
    "slug": "wisp-fetchling",
    "name": "Wisp Fetchling",
    "description": {
      "sourceHtml": "<p>Your ancestors' exposure to the Shadow Plane wrought great physical changes. Your hair or skin sometimes appears insubstantial, and you're slighter and more agile than other fetchlings. You're <strong>Small</strong> instead of <strong>Medium</strong>. You gain the trained proficiency rank in Acrobatics, the @UUID[Compendium.pf2e.feats-srd.Item.Quick Squeeze] skill feat, and a +1 circumstance bonus to Acrobatics checks to Tumble Through. If you would automatically become trained in Acrobatics (from your background or class, for example), you instead become trained in a skill of your choice.</p>",
      "plainText": "Your ancestors' exposure to the Shadow Plane wrought great physical changes. Your hair or skin sometimes appears insubstantial, and you're slighter and more agile than other fetchlings. You're Small instead of Medium. You gain the trained proficiency rank in Acrobatics, the skill feat, and a +1 circumstance bonus to Acrobatics checks to Tumble Through. If you would automatically become trained in Acrobatics (from your background or class, for example), you instead become trained in a skill of your choice."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "sm"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.acrobatics.rank",
          "value": 1
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.feats-srd.Item.Quick Squeeze"
        }
      },
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "action:tumble-through"
          ],
          "selector": "acrobatics",
          "type": "circumstance",
          "value": 1
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "kHHcvJBJNiPJTuna",
      "sourcePath": "pf2e-master/packs/heritages/fetchling/wisp-fetchling.json",
      "slug": "wisp-fetchling",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Fetchling",
      "slug": "fetchling",
      "uuid": "Compendium.pf2e.ancestries.Item.hIA3qiUsxvLZXrFP",
      "sourceId": "hIA3qiUsxvLZXrFP"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:witch-kholo",
    "kind": "heritage",
    "slug": "witch-kholo",
    "name": "Witch Kholo",
    "description": {
      "sourceHtml": "<p>You're a shaggy, dark-furred kholo capable of making some truly uncanny sounds. You can cast the @UUID[Compendium.pf2e.spells-srd.Item.Figment] cantrip as an occult innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. In addition, you gain a +1 circumstance bonus to checks to @UUID[Compendium.pf2e.actionspf2e.Item.Create a Diversion] and Impersonate when using only your voice.</p>",
      "plainText": "You're a shaggy, dark-furred kholo capable of making some truly uncanny sounds. You can cast the cantrip as an occult innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up. In addition, you gain a +1 circumstance bonus to checks to and Impersonate when using only your voice."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "FlatModifier",
        "data": {
          "key": "FlatModifier",
          "predicate": [
            "auditory",
            {
              "or": [
                "action:impersonate",
                "action:create-a-diversion"
              ]
            }
          ],
          "selector": "deception",
          "type": "circumstance",
          "value": 1
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:figment",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell"
        }
      },
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "spell",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:figment",
            "spellcasting:innate"
          ],
          "property": "other-tags",
          "value": "ancestral-spell:kholo"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "kXp8qRh5AgtD4Izi",
      "sourcePath": "pf2e-master/packs/heritages/kholo/witch-kholo.json",
      "slug": "witch-kholo",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kholo",
      "slug": "kholo",
      "uuid": "Compendium.pf2e.ancestries.Item.vxbQ1Yw4qwgjTzqo",
      "sourceId": "vxbQ1Yw4qwgjTzqo"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:woodland-elf",
    "kind": "heritage",
    "slug": "woodland-elf",
    "name": "Woodland Elf",
    "description": {
      "sourceHtml": "<p>You're adapted to life in the forest, the deep jungle, or a similar environment, and you know how to climb trees and use foliage to your advantage. When @UUID[Compendium.pf2e.actionspf2e.Item.Climb]{Climbing} trees, vines, and other foliage, you move at half your Speed on a success and at full Speed on a critical success (and you move at full Speed on a success if you have @UUID[Compendium.pf2e.feats-srd.Item.Quick Climb]). This doesn't affect you if you're using a climb Speed.</p>\n<p>You can always use the @UUID[Compendium.pf2e.actionspf2e.Item.Take Cover] action when you are within forest terrain to gain cover, even if you're not next to an obstacle you can Take Cover behind.</p>",
      "plainText": "You're adapted to life in the forest, the deep jungle, or a similar environment, and you know how to climb trees and use foliage to your advantage. When Climbing trees, vines, and other foliage, you move at half your Speed on a success and at full Speed on a critical success (and you move at full Speed on a success if you have ). This doesn't affect you if you're using a climb Speed. You can always use the action when you are within forest terrain to gain cover, even if you're not next to an obstacle you can Take Cover behind."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [],
          "predicate": [
            "action:climb",
            "terrain:foliage"
          ],
          "selector": "athletics",
          "text": "When you climb trees, vines or other foliage, you move at half your Speed on a success, and full speed on a critical success.",
          "title": "{item|name}"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "nW1gi13E62Feto2w",
      "sourcePath": "pf2e-master/packs/heritages/elf/woodland-elf.json",
      "slug": "woodland-elf",
      "image": "systems/pf2e/icons/features/ancestry/woodland-elf.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Elf",
      "slug": "elf",
      "uuid": "Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0",
      "sourceId": "PgKmsA2aKdbLU6O0"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:woodstalker-lizardfolk",
    "kind": "heritage",
    "slug": "woodstalker-lizardfolk",
    "name": "Woodstalker Lizardfolk",
    "description": {
      "sourceHtml": "<p>You move easily through thick forest and jungle, using every branch or bush. You can always use the @UUID[Compendium.pf2e.actionspf2e.Item.Take Cover] action when in forest or jungle terrain to gain cover, even if you're not next to an obstacle you would normally be able to Take Cover behind. You gain the @UUID[Compendium.pf2e.feats-srd.Item.Terrain Stalker] feat, even if you're not trained in Stealth, and you must choose underbrush as your chosen terrain.</p>",
      "plainText": "You move easily through thick forest and jungle, using every branch or bush. You can always use the action when in forest or jungle terrain to gain cover, even if you're not next to an obstacle you would normally be able to Take Cover behind. You gain the feat, even if you're not trained in Stealth, and you must choose underbrush as your chosen terrain."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "preselectChoices": {
            "terrain-stalker": "underbrush"
          },
          "uuid": "Compendium.pf2e.feats-srd.Item.Terrain Stalker"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "TQFE10VFvh9wb8zb",
      "sourcePath": "pf2e-master/packs/heritages/lizardfolk/woodstalker-lizardfolk.json",
      "slug": "woodstalker-lizardfolk",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Lizardfolk",
      "slug": "lizardfolk",
      "uuid": "Compendium.pf2e.ancestries.Item.HWEgF7Gmoq55VhTL",
      "sourceId": "HWEgF7Gmoq55VhTL"
    },
    "versatile": false
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:heritage:xyloshi",
    "kind": "heritage",
    "slug": "xyloshi",
    "name": "Xyloshi",
    "description": {
      "sourceHtml": "<p>You have prominent neck muscles that allow you to use your facial horn as a tool or weapon. You gain a horn unarmed attack that deals 1d6 piercing damage. Your horn is in the brawling group, and has the finesse and unarmed traits.</p>",
      "plainText": "You have prominent neck muscles that allow you to use your facial horn as a tool or weapon. You gain a horn unarmed attack that deals 1d6 piercing damage. Your horn is in the brawling group, and has the finesse and unarmed traits."
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "Strike",
        "data": {
          "category": "unarmed",
          "damage": {
            "base": {
              "damageType": "piercing",
              "dice": 1,
              "die": "d6"
            }
          },
          "group": "brawling",
          "img": "systems/pf2e/icons/unarmed-attacks/horn.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Horn",
          "predicate": [
            {
              "not": "feat:puncturing-horn"
            }
          ],
          "range": null,
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "heritages",
      "sourceId": "FLWUYM2XxYwnIDQf",
      "sourcePath": "pf2e-master/packs/heritages/kashrishi/xyloshi.json",
      "slug": "xyloshi",
      "image": "systems/pf2e/icons/default-icons/heritage.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "ancestry": {
      "name": "Kashrishi",
      "slug": "kashrishi",
      "uuid": "Compendium.pf2e.ancestries.Item.dw2K1AJR9mQ25nDP",
      "sourceId": "dw2K1AJR9mQ25nDP"
    },
    "versatile": false
  }
]
