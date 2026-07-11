// @ts-nocheck
import type { Pathfinder2eAncestryEntry } from '../models'

export const PATHFINDER_2E_ANCESTRIES: Pathfinder2eAncestryEntry[] = [
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:anadi",
    "kind": "ancestry",
    "slug": "anadi",
    "name": "Anadi",
    "description": {
      "sourceHtml": "<p><em>Anadi people are reclusive, sapient spiders who hail from the jungles of southern Garund. Though they act in many ways like natural-born shapeshifters, their twin forms actually stem from carefully developed magic.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.9dpHTBpL3j8ZpqTS]{Anadi}</em></p>",
      "plainText": "Anadi people are reclusive, sapient spiders who hail from the jungles of southern Garund. Though they act in many ways like natural-born shapeshifters, their twin forms actually stem from carefully developed magic. Anadi"
    },
    "rarity": "rare",
    "traits": [
      "anadi",
      "humanoid"
    ],
    "rules": [
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
              "label": "PF2E.NPCAbility.ChangeShape.Form.Human",
              "value": "human"
            },
            {
              "label": "PF2E.NPCAbility.ChangeShape.Form.Spider",
              "value": "spider"
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
          "mode": "override",
          "predicate": [
            "item:slug:change-shape"
          ],
          "property": "description",
          "value": [
            {
              "text": "PF2E.SpecificRule.ChangeShape.Anadi"
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
          "value": "arcane"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Change Shape"
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Fangs",
        "image": "systems/pf2e/icons/unarmed-attacks/mandibles.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Fangs",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fangs"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "TQEqWqc7BYiadUdY",
      "sourcePath": "pf2e-master/packs/ancestries/anadi.json",
      "slug": "anadi",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/anadi.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "anadi",
        "mwangi"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "elven",
          "fey",
          "iruxi",
          "kholo",
          "orcish"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:android",
    "kind": "ancestry",
    "slug": "android",
    "name": "Android",
    "description": {
      "sourceHtml": "<p><em>Technological wonders from another world, androids have synthetic bodies and living souls. Their dual nature makes them quick-thinking and calm under pressure, but comfortable in stillness and solitude.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.dyusFHHyaQOaQhZ0]{Android}</em></p>",
      "plainText": "Technological wonders from another world, androids have synthetic bodies and living souls. Their dual nature makes them quick-thinking and calm under pressure, but comfortable in stillness and solitude. Android"
    },
    "rarity": "rare",
    "traits": [
      "android",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Emotionally Unaware",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Emotionally Unaware",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Emotionally Unaware"
        }
      },
      {
        "name": "Constructed",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Constructed",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Constructed"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "GfLwE884NoRC7cRi",
      "sourcePath": "pf2e-master/packs/ancestries/android.json",
      "slug": "android",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/android.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "androffan",
        "common"
      ],
      "additional": {
        "count": 0,
        "options": [
          "chthonian",
          "draconic",
          "dwarven",
          "empyrean",
          "sakvroth",
          "utopian"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:athamaru",
    "kind": "ancestry",
    "slug": "athamaru",
    "name": "Athamaru",
    "description": {
      "sourceHtml": "<p>Athamarus are fish-like humanoids who form tight-knit undersea communities. In small settlements, they engage in the subsistence farming of seaweed, train eels to serve as mounts, and create elaborate works of coral art. Their interactions with other aquatic ancestries are strained, as athamarus have suffered mistreatment at their hands. However, they remain curious about potential connections and what new opportunities may offer.</p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.19pE89qVIMELrZoY]{Athamaru}</em></p>",
      "plainText": "Athamarus are fish-like humanoids who form tight-knit undersea communities. In small settlements, they engage in the subsistence farming of seaweed, train eels to serve as mounts, and create elaborate works of coral art. Their interactions with other aquatic ancestries are strained, as athamarus have suffered mistreatment at their hands. However, they remain curious about potential connections and what new opportunities may offer. Athamaru"
    },
    "rarity": "uncommon",
    "traits": [
      "amphibious",
      "athamaru",
      "humanoid"
    ],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "swim",
          "value": 25
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "Cg1AMgp3zrGmimWd",
      "sourcePath": "pf2e-master/packs/ancestries/athamaru.json",
      "slug": "athamaru",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/athamaru.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 20,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "thalassic"
      ],
      "additional": {
        "count": 0,
        "options": [
          "alghollthu",
          "azlanti",
          "fey",
          "tien"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:automaton",
    "kind": "ancestry",
    "slug": "automaton",
    "name": "Automaton",
    "description": {
      "sourceHtml": "<p><em>These intelligent constructs house actual souls and represent what remains of a dying empire's last attempt at greatness. Automatons combine technological ingenuity with magical power, creating a blended being wholly unique to Golarion.</em></p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.rsx8cRI20oEDgfQh]{Automaton}</p>",
      "plainText": "These intelligent constructs house actual souls and represent what remains of a dying empire's last attempt at greatness. Automatons combine technological ingenuity with magical power, creating a blended being wholly unique to Golarion. Automaton"
    },
    "rarity": "rare",
    "traits": [
      "automaton",
      "construct"
    ],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "adjustName": false,
          "choices": [
            {
              "label": "PF2E.ActorSizeMedium",
              "value": "medium"
            },
            {
              "label": "PF2E.ActorSizeSmall",
              "value": "small"
            }
          ],
          "flag": "size",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.CreatureSize"
        }
      },
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "{item|flags.pf2e.rulesSelections.size}"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.automaton.enhancements",
          "priority": 10,
          "value": {
            "greater": [],
            "lesser": []
          }
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Constructed Body",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Constructed Body",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Constructed Body"
        }
      },
      {
        "name": "Automaton Core",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Automaton Core",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Automaton Core"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "kYsBAJ103T44agJF",
      "sourcePath": "pf2e-master/packs/ancestries/automaton.json",
      "slug": "automaton",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/automaton.svg",
      "publication": {
        "title": "Pathfinder Guns & Gears",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "utopian"
      ],
      "additional": {
        "count": 0,
        "options": [
          "chthonian",
          "diabolic",
          "dwarven",
          "elven",
          "empyrean",
          "jistkan",
          "petran",
          "pyric",
          "sussuran",
          "thalassic"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:awakened-animal",
    "kind": "ancestry",
    "slug": "awakened-animal",
    "name": "Awakened Animal",
    "description": {
      "sourceHtml": "<p>You once enjoyed the simple and boundless pleasures of nature with an innocent, uncluttered mind. You lived from moment to moment, never questioning what comes next or pondering the ramifications of what happened before. You were at one with the wild. Then came the event that changed everything. You drank from a glowing lake, someone pulled a magical prank, a druid sought to elevate your mind. You were pulled out of the present moment of the wild and into a land of thought.</p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.jX3VHEFgpqqUy0aP]{Awakened Animal}</em></p>",
      "plainText": "You once enjoyed the simple and boundless pleasures of nature with an innocent, uncluttered mind. You lived from moment to moment, never questioning what comes next or pondering the ramifications of what happened before. You were at one with the wild. Then came the event that changed everything. You drank from a glowing lake, someone pulled a magical prank, a druid sought to elevate your mind. You were pulled out of the present moment of the wild and into a land of thought. Awakened Animal"
    },
    "rarity": "rare",
    "traits": [
      "awakened-animal",
      "beast"
    ],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "adjustName": false,
          "choices": [
            {
              "label": "PF2E.ActorSizeLarge",
              "value": {
                "hitPoints": 10,
                "size": "large"
              }
            },
            {
              "label": "PF2E.ActorSizeMedium",
              "value": {
                "hitPoints": 8,
                "size": "medium"
              }
            },
            {
              "label": "PF2E.ActorSizeSmall",
              "value": {
                "hitPoints": 6,
                "size": "small"
              }
            },
            {
              "label": "PF2E.ActorSizeTiny",
              "value": {
                "hitPoints": 6,
                "size": "tiny"
              }
            }
          ],
          "flag": "choice",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.CreatureSize"
        }
      },
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "{item|flags.pf2e.rulesSelections.choice.size}"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.attributes.ancestryhp",
          "priority": 51,
          "value": "{item|flags.pf2e.rulesSelections.choice.hitPoints}"
        }
      },
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "predicate": [
            {
              "not": "heritage:swimming-animal"
            }
          ],
          "selector": "land",
          "value": 20
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Awakened Mind",
        "image": "icons/creatures/mammals/humanoid-wolf-dog-blue.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Awakened Mind",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Awakened Mind"
        }
      },
      {
        "name": "Awakened Form",
        "image": "icons/magic/nature/wolf-paw-glow-green.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Awakened Form",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Awakened Form"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "GFOgV3MzWkYwJoJW",
      "sourcePath": "pf2e-master/packs/ancestries/awakened-animal.json",
      "slug": "awakened-animal",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/awakened-animal.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 5,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "common"
      ],
      "additional": {
        "count": 0,
        "options": [],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:azarketi",
    "kind": "ancestry",
    "slug": "azarketi",
    "name": "Azarketi",
    "description": {
      "sourceHtml": "<p>Azarketis, inheritors of a shattered empire's legacy, hold their proud traditions close but still surface to interact with the rest of the world.</p>\n<p>The aquatic humanoids of the Inner Sea share a somber and burdened history. Most refer to these aquatic peoples as gillmen or sometimes Low Azlanti, though they typically refer to themselves as azarketi, an Azlanti word that translates roughly to \"people of the seas.\" After Earthfall, these proud humans were mutated into aquatic servants by their alghollthu foes. Feeling like they don't fully belong with their human brethren nor with the sea that binds them, many azarketis struggle for a sense of identity and purpose. Though they remain distrusted by the surface dwellers, azarketis celebrate their unique lineage and their descent from the venerated Azlanti culture.</p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.SNhp04cirQnnBTbb]{Azarketi}</p>",
      "plainText": "Azarketis, inheritors of a shattered empire's legacy, hold their proud traditions close but still surface to interact with the rest of the world. The aquatic humanoids of the Inner Sea share a somber and burdened history. Most refer to these aquatic peoples as gillmen or sometimes Low Azlanti, though they typically refer to themselves as azarketi, an Azlanti word that translates roughly to \"people of the seas.\" After Earthfall, these proud humans were mutated into aquatic servants by their alghollthu foes. Feeling like they don't fully belong with their human brethren nor with the sea that binds them, many azarketis struggle for a sense of identity and purpose. Though they remain distrusted by the surface dwellers, azarketis celebrate their unique lineage and their descent from the venerated Azlanti culture. Azarketi"
    },
    "rarity": "uncommon",
    "traits": [
      "amphibious",
      "azarketi",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Hydration",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Hydration",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Hydration"
        }
      },
      {
        "name": "Swim",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Swim",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Swim"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "yFoojz6q3ZjvceFw",
      "sourcePath": "pf2e-master/packs/ancestries/azarketi.json",
      "slug": "azarketi",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/azarketi.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Absalom, City of Lost Omens",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 20,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "alghollthu",
        "common"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "azlanti",
          "draconic",
          "elven",
          "thalassic",
          "sakvroth"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:catfolk",
    "kind": "ancestry",
    "slug": "catfolk",
    "name": "Catfolk",
    "description": {
      "sourceHtml": "<p><em>Curious and gregarious wanderers, catfolk combine the features of felines and humanoids in both appearance and temperament. They enjoy learning new things, collecting new tales and trinkets, and ensuring their loved ones are safe and happy. Catfolk view themselves as the chosen guardians of natural places in the world and are often recklessly brave, even in the face of overwhelming opposition. They believe that strong communities, breadth of experience, and continual self-improvement aid them in this fight.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.5S1Pq3GoEzLfBbH7]{Catfolk}</em></p>",
      "plainText": "Curious and gregarious wanderers, catfolk combine the features of felines and humanoids in both appearance and temperament. They enjoy learning new things, collecting new tales and trinkets, and ensuring their loved ones are safe and happy. Catfolk view themselves as the chosen guardians of natural places in the world and are often recklessly brave, even in the face of overwhelming opposition. They believe that strong communities, breadth of experience, and continual self-improvement aid them in this fight. Catfolk"
    },
    "rarity": "uncommon",
    "traits": [
      "catfolk",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Land on Your Feet",
        "image": "systems/pf2e/icons/features/ancestry/land-on-your-feet.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Land on Your Feet",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Land on Your Feet"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "972EkpJOPv9KkQIW",
      "sourcePath": "pf2e-master/packs/ancestries/catfolk.json",
      "slug": "catfolk",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/catfolk.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "amurrun",
        "common"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "elven",
          "fey",
          "gnomish",
          "goblin",
          "halfling",
          "iruxi",
          "jotun"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:centaur",
    "kind": "ancestry",
    "slug": "centaur",
    "name": "Centaur",
    "description": {
      "sourceHtml": "<p>Centaurs are proud nomads who range far and wide across their ancestral territories, protecting their lands from exploitation and intrusion. They are survivalists who forge tight bonds with family and community and stand firm in the face of danger. Many are skilled hunters, trackers, and warriors who do battle with bow, steel, and hooves. Brave and stubborn, they're willing to challenge even the fiercest foes and largest forces to protect their homes, kin, and the land within their domain.</p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.AhKqWjsodDXRUelE]{Centaur}</em></p>",
      "plainText": "Centaurs are proud nomads who range far and wide across their ancestral territories, protecting their lands from exploitation and intrusion. They are survivalists who forge tight bonds with family and community and stand firm in the face of danger. Many are skilled hunters, trackers, and warriors who do battle with bow, steel, and hooves. Brave and stubborn, they're willing to challenge even the fiercest foes and largest forces to protect their homes, kin, and the land within their domain. Centaur"
    },
    "rarity": "uncommon",
    "traits": [
      "beast",
      "centaur",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Mount",
        "image": "icons/environment/people/cavalry.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Mount",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Mount"
        }
      },
      {
        "name": "Robust",
        "image": "icons/skills/movement/arrows-up-trio-red.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Robust",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Robust"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "pJkQlFTvpQ5GjZ5e",
      "sourcePath": "pf2e-master/packs/ancestries/centaur.json",
      "slug": "centaur",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/centaur.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 30,
    "size": "lg",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common",
        "fey"
      ],
      "additional": {
        "count": 0,
        "options": [
          "arboreal",
          "cyclops",
          "dwarven",
          "elven",
          "gnomish",
          "halfling",
          "jotun"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:conrasu",
    "kind": "ancestry",
    "slug": "conrasu",
    "name": "Conrasu",
    "description": {
      "sourceHtml": "<p><em>Conrasus are shards of cosmic force given consciousness who construct intricate exoskeletons to interface with the mortal world. Both an integral part of the underlying processes of the universe and strangely set apart, conrasus look to aeons to understand their existence.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.ufWdokSN5W3Einus]{Conrasu}</em></p>",
      "plainText": "Conrasus are shards of cosmic force given consciousness who construct intricate exoskeletons to interface with the mortal world. Both an integral part of the underlying processes of the universe and strangely set apart, conrasus look to aeons to understand their existence. Conrasu"
    },
    "rarity": "rare",
    "traits": [
      "aeon",
      "conrasu",
      "plant"
    ],
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
              "die": "d4"
            }
          },
          "group": "brawling",
          "img": "icons/commodities/claws/claw-bear-brown-grey.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Claw",
          "predicate": [
            "evened-hand:claw"
          ],
          "traits": [
            "agile",
            "finesse",
            "unarmed"
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
          "img": "systems/pf2e/icons/unarmed-attacks/branch.webp",
          "key": "Strike",
          "label": "PF2E.BattleForm.Attack.Branch",
          "predicate": [
            "evened-hand:branch"
          ],
          "traits": [
            "backswing",
            "unarmed"
          ]
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Sunlight Healing",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Sunlight Healing",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Sunlight Healing"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "tZn4qIHCUA6wCdnI",
      "sourcePath": "pf2e-master/packs/ancestries/conrasu.json",
      "slug": "conrasu",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/conrasu.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 10,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "mwangi",
        "rasu"
      ],
      "additional": {
        "count": 0,
        "options": [
          "elven",
          "empyrean",
          "fey",
          "iruxi",
          "petran",
          "utopian"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:dwarf",
    "kind": "ancestry",
    "slug": "dwarf",
    "name": "Dwarf",
    "description": {
      "sourceHtml": "<p><em>Dwarves have a well-earned reputation as a stoic and stern people, ensconced within citadels and cities carved from solid rock. While some see them as dour and humorless crafters of stone and metal, dwarves and those who have spent time among them understand their unbridled zeal for their work, caring far more about quality than quantity. To a stranger, they can seem untrusting and clannish, but to their friends and family, they are warm and caring, their halls filled with the sounds of laughter and hammers hitting anvils.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.XzRv30zY3UXRbBho]{Dwarf}</em></p>",
      "plainText": "Dwarves have a well-earned reputation as a stoic and stern people, ensconced within citadels and cities carved from solid rock. While some see them as dour and humorless crafters of stone and metal, dwarves and those who have spent time among them understand their unbridled zeal for their work, caring far more about quality than quantity. To a stranger, they can seem untrusting and clannish, but to their friends and family, they are warm and caring, their halls filled with the sounds of laughter and hammers hitting anvils. Dwarf"
    },
    "rarity": "common",
    "traits": [
      "dwarf",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Clan Dagger",
        "image": "systems/pf2e/icons/equipment/weapons/clan-dagger.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Clan Dagger",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Clan Dagger"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "BYj5ZvlXZdpaEgA6",
      "sourcePath": "pf2e-master/packs/ancestries/dwarf.json",
      "slug": "dwarf",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/dwarf.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 10,
    "speedFeet": 20,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common",
        "dwarven"
      ],
      "additional": {
        "count": 0,
        "options": [
          "gnomish",
          "goblin",
          "jotun",
          "orcish",
          "petran",
          "sakvroth"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:elf",
    "kind": "ancestry",
    "slug": "elf",
    "name": "Elf",
    "description": {
      "sourceHtml": "<p><em>As an ancient people, elves have seen great change and have the perspective that can come only from watching the arc of history. After leaving the world in ancient times, they returned to a changed land, and they still struggle to reclaim their ancestral homes, most notably from terrible demons that have invaded parts of their lands. To some, the elves are objects of awe—graceful and beautiful, with immense talent and knowledge. Among themselves, however, the elves place far more importance on personal freedom than on living up to these ideals.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.3cfdiId1IoxLsF9V]{Elf}</em></p>",
      "plainText": "As an ancient people, elves have seen great change and have the perspective that can come only from watching the arc of history. After leaving the world in ancient times, they returned to a changed land, and they still struggle to reclaim their ancestral homes, most notably from terrible demons that have invaded parts of their lands. To some, the elves are objects of awe—graceful and beautiful, with immense talent and knowledge. Among themselves, however, the elves place far more importance on personal freedom than on living up to these ideals. Elf"
    },
    "rarity": "common",
    "traits": [
      "elf",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "PgKmsA2aKdbLU6O0",
      "sourcePath": "pf2e-master/packs/ancestries/elf.json",
      "slug": "elf",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/elf.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 30,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "elven"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "empyrean",
          "fey",
          "gnomish",
          "goblin",
          "kholo",
          "orcish"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:fetchling",
    "kind": "ancestry",
    "slug": "fetchling",
    "name": "Fetchling",
    "description": {
      "sourceHtml": "<p><em>Once human and now something apart, fetchlings display the Shadow Plane's ancient influence through monochrome complexions, glowing eyes, and the casting of supernatural shadows.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.RlMgeku1FNJjF7YR]{Fetchling}</em></p>",
      "plainText": "Once human and now something apart, fetchlings display the Shadow Plane's ancient influence through monochrome complexions, glowing eyes, and the casting of supernatural shadows. Fetchling"
    },
    "rarity": "uncommon",
    "traits": [
      "fetchling",
      "humanoid"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.colorDarkvision",
          "value": true
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "hIA3qiUsxvLZXrFP",
      "sourcePath": "pf2e-master/packs/ancestries/fetchling.json",
      "slug": "fetchling",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/fetchling.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common",
        "shadowtongue"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "draconic",
          "dziriak",
          "necril",
          "sakvroth"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:fleshwarp",
    "kind": "ancestry",
    "slug": "fleshwarp",
    "name": "Fleshwarp",
    "description": {
      "sourceHtml": "<p><em>Fleshwarps are people whose forms were created or radically transformed by magic, alchemy, or unnatural energies. Their unorthodox appearance can make it difficult for them to find a place for themselves in the world.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.vTB1bTYVE4onyyy1]{Fleshwarp}</em></p>",
      "plainText": "Fleshwarps are people whose forms were created or radically transformed by magic, alchemy, or unnatural energies. Their unorthodox appearance can make it difficult for them to find a place for themselves in the world. Fleshwarp"
    },
    "rarity": "rare",
    "traits": [
      "aberration",
      "humanoid"
    ],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "adjustName": false,
          "choices": [
            {
              "label": "PF2E.ActorSizeSmall",
              "value": "sm"
            },
            {
              "label": "PF2E.ActorSizeMedium",
              "value": "med"
            }
          ],
          "flag": "fleshwarpSize",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.CreatureSize"
        }
      },
      {
        "key": "CreatureSize",
        "data": {
          "key": "CreatureSize",
          "value": "{item|flags.pf2e.rulesSelections.fleshwarpSize}"
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Unusual Anatomy",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Unusual Anatomy",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Unusual Anatomy"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "FXlXmNBFiiz9oasi",
      "sourcePath": "pf2e-master/packs/ancestries/fleshwarp.json",
      "slug": "fleshwarp",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/fleshwarp.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 10,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "draconic",
          "dwarven",
          "elven",
          "goblin",
          "sakvroth"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:ghoran",
    "kind": "ancestry",
    "slug": "ghoran",
    "name": "Ghoran",
    "description": {
      "sourceHtml": "<p>These intelligent plant people, created by a long-dead druid, possess a sort of immortality through their seeds—unless these are destroyed by external events other than merely the ravages of time.</p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.kRjkrWAqQNXj3LLP]{Ghoran}</p>",
      "plainText": "These intelligent plant people, created by a long-dead druid, possess a sort of immortality through their seeds—unless these are destroyed by external events other than merely the ravages of time. Ghoran"
    },
    "rarity": "rare",
    "traits": [
      "ghoran",
      "humanoid",
      "plant"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Photosynthesis",
        "image": "icons/magic/nature/root-vine-beanstolk-green.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Photosynthesis",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Photosynthesis"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "tSurOqRcfumadTfr",
      "sourcePath": "pf2e-master/packs/ancestries/ghoran.json",
      "slug": "ghoran",
      "image": "systems/pf2e/icons/default-icons/ancestry.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "fey"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "draconic",
          "elven",
          "gnomish",
          "jotun"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:gnome",
    "kind": "ancestry",
    "slug": "gnome",
    "name": "Gnome",
    "description": {
      "sourceHtml": "<p><em>Long ago, early gnome ancestors emigrated from the First World, realm of the fey. While it's unclear why the first gnomes wandered to Golarion, this lineage manifests in modern gnomes as bizarre reasoning, eccentricity, obsessive tendencies, and what some see as naivete. These qualities are further reflected in their physical characteristics, such as spindly limbs, brightly colored hair, and childlike and extremely expressive facial features that further reflect their otherworldly origins.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.qIu10HByKeRaPPvD]{Gnome}</em></p>",
      "plainText": "Long ago, early gnome ancestors emigrated from the First World, realm of the fey. While it's unclear why the first gnomes wandered to Golarion, this lineage manifests in modern gnomes as bizarre reasoning, eccentricity, obsessive tendencies, and what some see as naivete. These qualities are further reflected in their physical characteristics, such as spindly limbs, brightly colored hair, and childlike and extremely expressive facial features that further reflect their otherworldly origins. Gnome"
    },
    "rarity": "common",
    "traits": [
      "gnome",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "CYlfsYLJcBOgqKtD",
      "sourcePath": "pf2e-master/packs/ancestries/gnome.json",
      "slug": "gnome",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/gnome.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "fey",
        "gnomish"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "dwarven",
          "elven",
          "goblin",
          "jotun",
          "orcish"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:goblin",
    "kind": "ancestry",
    "slug": "goblin",
    "name": "Goblin",
    "description": {
      "sourceHtml": "<p><em>The convoluted histories other people cling to don't interest goblins. These small folk live in the moment, and they prefer tall tales over factual records. The wars of a few decades ago might as well be from the ancient past. Misunderstood by other people, goblins are happy how they are. Goblin virtues are about being present, creative, and honest. They strive to lead fulfilled lives, rather than worrying about how their journeys will end. To tell stories, not nitpick the facts. To be small, but dream big.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.Gn0XGCWDb0N4zLE0]{Goblin}</em></p>",
      "plainText": "The convoluted histories other people cling to don't interest goblins. These small folk live in the moment, and they prefer tall tales over factual records. The wars of a few decades ago might as well be from the ancient past. Misunderstood by other people, goblins are happy how they are. Goblin virtues are about being present, creative, and honest. They strive to lead fulfilled lives, rather than worrying about how their journeys will end. To tell stories, not nitpick the facts. To be small, but dream big. Goblin"
    },
    "rarity": "common",
    "traits": [
      "goblin",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "sQfjTMDaZbT9DThq",
      "sourcePath": "pf2e-master/packs/ancestries/goblin.json",
      "slug": "goblin",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/goblin.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common",
        "goblin"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "dwarven",
          "gnomish",
          "halfling",
          "kholo",
          "orcish"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:goloma",
    "kind": "ancestry",
    "slug": "goloma",
    "name": "Goloma",
    "description": {
      "sourceHtml": "<p><em>Golomas fear most other people and deliberately use their unusual biology to frighten off those they consider to be dangerous predators. Rarely seen and poorly understood, golomas' many-eyed and wooden faced visages instill terror in most they meet.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.jKglnHBFvzI80tIe]{Goloma}</em></p>",
      "plainText": "Golomas fear most other people and deliberately use their unusual biology to frighten off those they consider to be dangerous predators. Rarely seen and poorly understood, golomas' many-eyed and wooden faced visages instill terror in most they meet. Goloma"
    },
    "rarity": "rare",
    "traits": [
      "goloma",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Eyes in Back",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Eyes in Back",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Eyes in Back"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "c4secsSNG2AO7I5i",
      "sourcePath": "pf2e-master/packs/ancestries/goloma.json",
      "slug": "goloma",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/goloma.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 30,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "goloma",
        "mwangi"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "chthonian",
          "draconic",
          "elven",
          "fey",
          "halfling",
          "necril",
          "orcish"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:halfling",
    "kind": "ancestry",
    "slug": "halfling",
    "name": "Halfling",
    "description": {
      "sourceHtml": "<p><em>Claiming no place as their own, halflings control few settlements larger than villages. Instead, they frequently live among humans within the walls of larger cities, carving out small communities alongside taller folk. Many halflings lead perfectly fulfilling lives in the shadows of their larger neighbors, while others prefer a nomadic existence, traveling the world and taking advantage of opportunities and adventures as they come.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.voI7uPS9vsG74JIn]{Halfling}</em></p>",
      "plainText": "Claiming no place as their own, halflings control few settlements larger than villages. Instead, they frequently live among humans within the walls of larger cities, carving out small communities alongside taller folk. Many halflings lead perfectly fulfilling lives in the shadows of their larger neighbors, while others prefer a nomadic existence, traveling the world and taking advantage of opportunities and adventures as they come. Halfling"
    },
    "rarity": "common",
    "traits": [
      "halfling",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Keen Eyes",
        "image": "systems/pf2e/icons/features/ancestry/keen-eyes.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Keen Eyes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Keen Eyes"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "GgZAHbrjnzWOZy2v",
      "sourcePath": "pf2e-master/packs/ancestries/halfling.json",
      "slug": "halfling",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/halfling.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "common",
        "halfling"
      ],
      "additional": {
        "count": 0,
        "options": [
          "dwarven",
          "elven",
          "gnomish",
          "goblin"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:hobgoblin",
    "kind": "ancestry",
    "slug": "hobgoblin",
    "name": "Hobgoblin",
    "description": {
      "sourceHtml": "<p><em>Taller and stronger than their goblin kin, hobgoblins are equals in strength and size to humans, with broad shoulders and long, powerful arms.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.DuWzeY4zugKFFthl]{Hobgoblin}</em></p>",
      "plainText": "Taller and stronger than their goblin kin, hobgoblins are equals in strength and size to humans, with broad shoulders and long, powerful arms. Hobgoblin"
    },
    "rarity": "uncommon",
    "traits": [
      "hobgoblin",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "piNLXUrm9iaGqD2i",
      "sourcePath": "pf2e-master/packs/ancestries/hobgoblin.json",
      "slug": "hobgoblin",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/hobgoblin.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common",
        "goblin"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "dwarven",
          "halfling",
          "jotun",
          "kholo",
          "orcish"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:human",
    "kind": "ancestry",
    "slug": "human",
    "name": "Human",
    "description": {
      "sourceHtml": "<p><em>As unpredictable and varied as any of Golarion's peoples, humans have exceptional drive and the capacity to endure and expand. Though many civilizations thrived before humanity rose to prominence, humans have built some of the greatest and the most terrible societies throughout the course of history, and today they are the most populous people in the realms around the Inner Sea.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.7pU8yM7yPMw92SY3]{Human}</em></p>",
      "plainText": "As unpredictable and varied as any of Golarion's peoples, humans have exceptional drive and the capacity to endure and expand. Though many civilizations thrived before humanity rose to prominence, humans have built some of the greatest and the most terrible societies throughout the course of history, and today they are the most populous people in the realms around the Inner Sea. Human"
    },
    "rarity": "common",
    "traits": [
      "human",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "IiG7DgeLWYrSNXuX",
      "sourcePath": "pf2e-master/packs/ancestries/human.json",
      "slug": "human",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/human.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "common"
      ],
      "additional": {
        "count": 1,
        "options": [],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "cha",
            "con",
            "dex",
            "int",
            "str",
            "wis"
          ],
          "count": 1,
          "free": true
        },
        {
          "key": "1",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        },
        {
          "key": "2",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:kashrishi",
    "kind": "ancestry",
    "slug": "kashrishi",
    "name": "Kashrishi",
    "description": {
      "sourceHtml": "<p>Kashrishi make their homes in remote areas of the world. These quiet beings have stout, durable frames and distinctive crystalline horns. Their inherent psychic abilities make them natural empaths but also occasionally burden them with the unceasing thoughts of their neighbors.</p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.IJOH7nk0w1IybAhp]{Kashrishi}</p>",
      "plainText": "Kashrishi make their homes in remote areas of the world. These quiet beings have stout, durable frames and distinctive crystalline horns. Their inherent psychic abilities make them natural empaths but also occasionally burden them with the unceasing thoughts of their neighbors. Kashrishi"
    },
    "rarity": "rare",
    "traits": [
      "humanoid",
      "kashrishi"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Empathic Sense",
        "image": "systems/pf2e/icons/spells/enthrall.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Empathic Sense",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Empathic Sense"
        }
      },
      {
        "name": "Glowing Horn",
        "image": "systems/pf2e/icons/spells/searing-light.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Glowing Horn",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Glowing Horn"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "dw2K1AJR9mQ25nDP",
      "sourcePath": "pf2e-master/packs/ancestries/kashrishi.json",
      "slug": "kashrishi",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/kashrishi.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "common"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "empyrean",
          "fey",
          "petran",
          "thalassic"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:kholo",
    "kind": "ancestry",
    "slug": "kholo",
    "name": "Kholo",
    "description": {
      "sourceHtml": "<p><em>Kholo have bad reputations as brutal raiders and demon-worshipers. Many believe that kholo are witches, cannibals, and worse. The truth is more complex. Kholo are eminently practical and pragmatic hunters and raiders. To them, honor is just another word for pointless risk. Any loss of a kholo affects not just the individual, but their packmates and kin as well. Wasting time on anything but victory, whether it's mercy or cruelty, is seen as little shy of immoral. Kholo are masters of ambushes, tactical feints, and psychological warfare. Equally misunderstood is the kholo practice of ancestor worship and endocannibalism. Kholo consume their dead as a sign of reverence, holding a grand feast and transforming the bones into art or weapons. Kholo extend this honor to respected foes, hoping to bring their enemy's cunning or strength into the clan.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.xBV8oGvecw7abZxc]</em></p>",
      "plainText": "Kholo have bad reputations as brutal raiders and demon-worshipers. Many believe that kholo are witches, cannibals, and worse. The truth is more complex. Kholo are eminently practical and pragmatic hunters and raiders. To them, honor is just another word for pointless risk. Any loss of a kholo affects not just the individual, but their packmates and kin as well. Wasting time on anything but victory, whether it's mercy or cruelty, is seen as little shy of immoral. Kholo are masters of ambushes, tactical feints, and psychological warfare. Equally misunderstood is the kholo practice of ancestor worship and endocannibalism. Kholo consume their dead as a sign of reverence, holding a grand feast and transforming the bones into art or weapons. Kholo extend this honor to respected foes, hoping to bring their enemy's cunning or strength into the clan."
    },
    "rarity": "uncommon",
    "traits": [
      "gnoll",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Bite",
        "image": "icons/creatures/abilities/mouth-teeth-long-red.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Bite",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Bite"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "vxbQ1Yw4qwgjTzqo",
      "sourcePath": "pf2e-master/packs/ancestries/kholo.json",
      "slug": "kholo",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/gnoll.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "kholo"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "elven",
          "fey",
          "iruxi",
          "necril",
          "orcish"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:kitsune",
    "kind": "ancestry",
    "slug": "kitsune",
    "name": "Kitsune",
    "description": {
      "sourceHtml": "<p><em>Kitsune are a charismatic and witty people with a connection to the spiritual that grants them many magical abilities, chiefly the power to shapechange into other forms. Whether they pass unseen among other peoples or hold their tails high, kitsune are clever observers of the societies around them.</em></p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.26YL1jOPQQS6k7A9]{Kitsune}</p>",
      "plainText": "Kitsune are a charismatic and witty people with a connection to the spiritual that grants them many magical abilities, chiefly the power to shapechange into other forms. Whether they pass unseen among other peoples or hold their tails high, kitsune are clever observers of the societies around them. Kitsune"
    },
    "rarity": "uncommon",
    "traits": [
      "humanoid",
      "kitsune"
    ],
    "rules": [
      {
        "key": "ItemAlteration",
        "data": {
          "itemType": "action",
          "key": "ItemAlteration",
          "mode": "override",
          "predicate": [
            "item:slug:change-shape"
          ],
          "property": "description",
          "value": [
            {
              "text": "PF2E.SpecificRule.ChangeShape.Kitsune"
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
          "value": "divine"
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
          "predicate": [
            {
              "not": "non-tailless-form"
            }
          ],
          "suboptions": [
            {
              "label": "PF2E.NPCAbility.ChangeShape.Form.Tailless",
              "value": "tailless"
            }
          ],
          "toggleable": true
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Change Shape",
        "image": "icons/creatures/mammals/humanoid-fox-cat-archer.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Change Shape",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Change Shape"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "4BL5wf1VF9feC2rY",
      "sourcePath": "pf2e-master/packs/ancestries/kitsune.json",
      "slug": "kitsune",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/kitsune.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common"
      ],
      "additional": {
        "count": 0,
        "options": [
          "dwarven",
          "elven",
          "fey",
          "gnomish",
          "goblin",
          "halfling"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:kobold",
    "kind": "ancestry",
    "slug": "kobold",
    "name": "Kobold",
    "description": {
      "sourceHtml": "<p><em>Every kobold instinctively understands the importance of power, and many are inclined to venerate those who have it, whether they be mighty dragons, cruel fiends, imperious fey, or even ancient artifacts. Kobolds seek out these alliances out of a sense of pragmatism—after all, who would dare bully a kobold who serves an ancient dragon?—but also because kobold eggs incubated near such loci of power take on physical traits (and sometimes abilities) similar to those of the warren's benefactor. On their own, kobolds are ingenious crafters and devoted allies, but outsiders who trespass into their territory find them to be inspired skirmishers and clever ambushers. However, these reptilian opportunists prove happy to cooperate with other humanoids when it's to their benefit, combining caution and cunning to make their fortunes in the wider world.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.naQrTTE7CXu5lnNt]{Kobold}</em></p>",
      "plainText": "Every kobold instinctively understands the importance of power, and many are inclined to venerate those who have it, whether they be mighty dragons, cruel fiends, imperious fey, or even ancient artifacts. Kobolds seek out these alliances out of a sense of pragmatism—after all, who would dare bully a kobold who serves an ancient dragon?—but also because kobold eggs incubated near such loci of power take on physical traits (and sometimes abilities) similar to those of the warren's benefactor. On their own, kobolds are ingenious crafters and devoted allies, but outsiders who trespass into their territory find them to be inspired skirmishers and clever ambushers. However, these reptilian opportunists prove happy to cooperate with other humanoids when it's to their benefit, combining caution and cunning to make their fortunes in the wider world. Kobold"
    },
    "rarity": "uncommon",
    "traits": [
      "humanoid",
      "kobold"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "7oQxL6wgsokD3QXG",
      "sourcePath": "pf2e-master/packs/ancestries/kobold.json",
      "slug": "kobold",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/kobold.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common",
        "sakvroth"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "diabolic",
          "draconic",
          "dwarven",
          "empyrean",
          "fey",
          "gnomish",
          "petran"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:leshy",
    "kind": "ancestry",
    "slug": "leshy",
    "name": "Leshy",
    "description": {
      "sourceHtml": "<p><em>Guardians and emissaries of the environment, leshies are immortal spirits of nature temporarily granted a physical form.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.SWkwNivrfzWZqas9]{Leshy}</em></p>",
      "plainText": "Guardians and emissaries of the environment, leshies are immortal spirits of nature temporarily granted a physical form. Leshy"
    },
    "rarity": "common",
    "traits": [
      "leshy",
      "plant"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Plant Nourishment",
        "image": "icons/magic/nature/root-vine-beanstolk-green.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Plant Nourishment",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Plant Nourishment"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "cdhgByGG1WtuaK73",
      "sourcePath": "pf2e-master/packs/ancestries/leshy.json",
      "slug": "leshy",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/leshy.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "fey"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "elven",
          "gnomish",
          "goblin",
          "halfling",
          "sakvroth"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:lizardfolk",
    "kind": "ancestry",
    "slug": "lizardfolk",
    "name": "Lizardfolk",
    "description": {
      "sourceHtml": "<p><em>Lizardfolk are consummate survivors, heirs to empires considered ancient even by the elves.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.cbLJs37Nc8FveriK]{Lizardfolk}</em></p>",
      "plainText": "Lizardfolk are consummate survivors, heirs to empires considered ancient even by the elves. Lizardfolk"
    },
    "rarity": "uncommon",
    "traits": [
      "humanoid",
      "lizardfolk"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Aquatic Adaptation",
        "image": "systems/pf2e/icons/features/ancestry//aquatic-adaptation.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Aquatic Adaptation",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Aquatic Adaptation"
        }
      },
      {
        "name": "Claws",
        "image": "systems/pf2e/icons/features/ancestry/claws.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Claws",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Claws"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "HWEgF7Gmoq55VhTL",
      "sourcePath": "pf2e-master/packs/ancestries/lizardfolk.json",
      "slug": "lizardfolk",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/lizardfolk.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "common",
        "iruxi"
      ],
      "additional": {
        "count": 0,
        "options": [
          "amurrun",
          "boggard",
          "draconic",
          "elven",
          "fey",
          "jotun",
          "thalassic"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:merfolk",
    "kind": "ancestry",
    "slug": "merfolk",
    "name": "Merfolk",
    "description": {
      "sourceHtml": "<p>Merfolk live in every ocean of Golarion, infinite in their variety and awe-inspiring in their majesty. They consider themselves, not without some merit, the rulers of the sea. Among the tropical reefs of the Fever Sea, merfolk build temples and palaces of brightly colored corals. Beneath the ice floes of the Shining Sea, merfolk hunt seals and whales for food in small, standoffish clans. In the Embaral Ocean, merfolk populate the great trading city of Alohmab, built into the shell of a titanic snail that crawls across the ocean floor.</p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.9hcAMLgnCAKkuyH6]{Merfolk}</em></p>",
      "plainText": "Merfolk live in every ocean of Golarion, infinite in their variety and awe-inspiring in their majesty. They consider themselves, not without some merit, the rulers of the sea. Among the tropical reefs of the Fever Sea, merfolk build temples and palaces of brightly colored corals. Beneath the ice floes of the Shining Sea, merfolk hunt seals and whales for food in small, standoffish clans. In the Embaral Ocean, merfolk populate the great trading city of Alohmab, built into the shell of a titanic snail that crawls across the ocean floor. Merfolk"
    },
    "rarity": "uncommon",
    "traits": [
      "amphibious",
      "humanoid",
      "merfolk"
    ],
    "rules": [
      {
        "key": "BaseSpeed",
        "data": {
          "key": "BaseSpeed",
          "selector": "swim",
          "value": 25
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Hydration (Merfolk)",
        "image": "icons/magic/water/water-hand.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Hydration (Merfolk)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Hydration (Merfolk)"
        }
      },
      {
        "name": "Aquatic Grace",
        "image": "icons/magic/water/pseudopod-swirl-blue.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Aquatic Grace",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Aquatic Grace"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "FUqZRllwn6kmFA8K",
      "sourcePath": "pf2e-master/packs/ancestries/merfolk.json",
      "slug": "merfolk",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/merfolk.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 5,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "thalassic"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "azlanti",
          "draconic",
          "elven",
          "fey"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:minotaur",
    "kind": "ancestry",
    "slug": "minotaur",
    "name": "Minotaur",
    "description": {
      "sourceHtml": "<p>Minotaurs stalk complex passageways, whether natural or artificial, and are masters of stone architecture. Inquisitive and steadfast, these bovine humanoids spend their lives perfecting the pursuit that calls to them, which can sometimes lead them far from the enclaves where they were raised. Minotaurs are originally from the Iblydos archipelago but have spread far and wide across Golarion, forming close-knit communities often near mountains or beneath the surface of the earth. Though sometimes mistaken for simple brutes, minotaurs have scholars and warriors alike. Those who can look past their appearance will find an affinity for building and navigation, as well as creative problem-solving.</p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.D1SZXGFA8Hh4huax]{Minotaur}</em></p>",
      "plainText": "Minotaurs stalk complex passageways, whether natural or artificial, and are masters of stone architecture. Inquisitive and steadfast, these bovine humanoids spend their lives perfecting the pursuit that calls to them, which can sometimes lead them far from the enclaves where they were raised. Minotaurs are originally from the Iblydos archipelago but have spread far and wide across Golarion, forming close-knit communities often near mountains or beneath the surface of the earth. Though sometimes mistaken for simple brutes, minotaurs have scholars and warriors alike. Those who can look past their appearance will find an affinity for building and navigation, as well as creative problem-solving. Minotaur"
    },
    "rarity": "uncommon",
    "traits": [
      "beast",
      "humanoid",
      "minotaur"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Horns",
        "image": "icons/creatures/abilities/bull-head-horns-glowing.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Horns (Minotaur)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Horns (Minotaur)"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "3wQ49DoWFYQgVsq6",
      "sourcePath": "pf2e-master/packs/ancestries/minotaur.json",
      "slug": "minotaur",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/minotaur.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 10,
    "speedFeet": 25,
    "size": "lg",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common",
        "jotun"
      ],
      "additional": {
        "count": 0,
        "options": [
          "cyclops",
          "dwarven",
          "fey",
          "petran",
          "sakvroth"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:nagaji",
    "kind": "ancestry",
    "slug": "nagaji",
    "name": "Nagaji",
    "description": {
      "sourceHtml": "<p>With humanoid figures and serpentine heads, nagaji are heralds, companions, and servitors of powerful nagas. They hold a deep reverence for holy areas and spiritual truths, an aspect many others find as intimidating as a nagaji's appearance.</p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.TlTIwW61zK0dk95v]{Nagaji}</p>",
      "plainText": "With humanoid figures and serpentine heads, nagaji are heralds, companions, and servitors of powerful nagas. They hold a deep reverence for holy areas and spiritual truths, an aspect many others find as intimidating as a nagaji's appearance. Nagaji"
    },
    "rarity": "uncommon",
    "traits": [
      "humanoid",
      "nagaji"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Fangs (Nagaji)",
        "image": "systems/pf2e/icons/unarmed-attacks/fangs.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Fangs (Nagaji)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fangs (Nagaji)"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "J7T7bDLaQGoY1sMF",
      "sourcePath": "pf2e-master/packs/ancestries/nagaji.json",
      "slug": "nagaji",
      "image": "systems/pf2e/icons/default-icons/ancestry.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 10,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "nagaji"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "amurrun",
          "draconic",
          "empyrean",
          "shadowtongue",
          "tengu",
          "thalassic",
          "sakvroth",
          "vanara"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:orc",
    "kind": "ancestry",
    "slug": "orc",
    "name": "Orc",
    "description": {
      "sourceHtml": "<p><em>Orcs are forged in the fires of violence and conflict, often from the moment they are born. As they live lives that are frequently cut brutally short, orcs revel in testing their strength against worthy foes, whether by challenging a higher-ranking member of their community for dominance or raiding a neighboring settlement. Many orcs seek glory as soon as they can walk and carry a blade or club, taming wild beasts or hunting deadly monsters.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.GCxhDyf1ZNlLiDKZ]{Orc}</em></p>",
      "plainText": "Orcs are forged in the fires of violence and conflict, often from the moment they are born. As they live lives that are frequently cut brutally short, orcs revel in testing their strength against worthy foes, whether by challenging a higher-ranking member of their community for dominance or raiding a neighboring settlement. Many orcs seek glory as soon as they can walk and carry a blade or club, taming wild beasts or hunting deadly monsters. Orc"
    },
    "rarity": "common",
    "traits": [
      "humanoid",
      "orc"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "lSGWXjcbOa6O5fTx",
      "sourcePath": "pf2e-master/packs/ancestries/orc.json",
      "slug": "orc",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/orc.svg",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 10,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common",
        "orcish"
      ],
      "additional": {
        "count": 0,
        "options": [
          "goblin",
          "jotun",
          "petran",
          "sakvroth"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "cha",
            "con",
            "dex",
            "int",
            "str",
            "wis"
          ],
          "count": 1,
          "free": true
        },
        {
          "key": "1",
          "options": [
            "cha",
            "con",
            "dex",
            "int",
            "str",
            "wis"
          ],
          "count": 1,
          "free": true
        },
        {
          "key": "2",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:poppet",
    "kind": "ancestry",
    "slug": "poppet",
    "name": "Poppet",
    "description": {
      "sourceHtml": "<p><em>Poppets are small, basic constructs that typically help their owners with simple tasks. Occasionally, poppets gain sapience, independence, and a spark of life. Elevated beyond mere helpers or playthings, these poppets are free to chart their own destinies.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.Ck8L9livQph1GFal]{Poppet}</em></p>",
      "plainText": "Poppets are small, basic constructs that typically help their owners with simple tasks. Occasionally, poppets gain sapience, independence, and a spark of life. Elevated beyond mere helpers or playthings, these poppets are free to chart their own destinies. Poppet"
    },
    "rarity": "rare",
    "traits": [
      "construct",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Constructed (Poppet)",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Constructed (Poppet)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Constructed (Poppet)"
        }
      },
      {
        "name": "Flammable",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Flammable",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Flammable"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "6F2fSFC1Eo1JdpY4",
      "sourcePath": "pf2e-master/packs/ancestries/poppet.json",
      "slug": "poppet",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/poppet.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Grand Bazaar",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "dwarven",
          "elven",
          "fey",
          "gnomish",
          "goblin"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:ratfolk",
    "kind": "ancestry",
    "slug": "ratfolk",
    "name": "Ratfolk",
    "description": {
      "sourceHtml": "<p><em>Ysoki are beings that most surface-dwelling humanoids refer to as \"ratfolk.\" They are a communal people who prefer cramped conditions, with up to 100 individuals living in a given home. If they can't find homes in town, ratfolk may instead live in caves and cavern complexes, as these provide great storage for the many and varied goods they bring back from trading expeditions.</em></p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.zoSkNev57C8OEDYL]{Ratfolk}</p>",
      "plainText": "Ysoki are beings that most surface-dwelling humanoids refer to as \"ratfolk.\" They are a communal people who prefer cramped conditions, with up to 100 individuals living in a given home. If they can't find homes in town, ratfolk may instead live in caves and cavern complexes, as these provide great storage for the many and varied goods they bring back from trading expeditions. Ratfolk"
    },
    "rarity": "uncommon",
    "traits": [
      "humanoid",
      "ratfolk"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Sharp Teeth",
        "image": "icons/commodities/bones/skull-lizard-tan.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Sharp Teeth",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Sharp Teeth"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "P6PcVnCkh4XMdefw",
      "sourcePath": "pf2e-master/packs/ancestries/ratfolk.json",
      "slug": "ratfolk",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/ratfolk.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "ysoki"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "draconic",
          "dwarven",
          "gnomish",
          "goblin",
          "halfling",
          "kholo",
          "orcish",
          "sakvroth"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:samsaran",
    "kind": "ancestry",
    "slug": "samsaran",
    "name": "Samsaran",
    "description": {
      "sourceHtml": "<p><em>Samsarans, as the tale goes, originated with a group of scholars in Zi Ha who ventured into the mountains to find the cure for an illness ravaging their village. After weeks of peril, they found a freshwater spring filled with pure magical life essence. This water brought the scholars back from the brink of death and cured the villagers. Given a new chance at life, everyone who drank the water devoted the rest of their life to learning and experiencing the world fully. Upon death, this devotion, combined with the magical essence now infused in their bodies, transformed these people into the first samsarans.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.pwrptby8NB54A6HQ]{Samsaran}</em></p>",
      "plainText": "Samsarans, as the tale goes, originated with a group of scholars in Zi Ha who ventured into the mountains to find the cure for an illness ravaging their village. After weeks of peril, they found a freshwater spring filled with pure magical life essence. This water brought the scholars back from the brink of death and cured the villagers. Given a new chance at life, everyone who drank the water devoted the rest of their life to learning and experiencing the world fully. Upon death, this devotion, combined with the magical essence now infused in their bodies, transformed these people into the first samsarans. Samsaran"
    },
    "rarity": "uncommon",
    "traits": [
      "humanoid",
      "samsaran"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Cryptomnesia",
        "image": "icons/magic/perception/third-eye-blue-red.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Cryptomnesia",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Cryptomnesia"
        }
      },
      {
        "name": "Wanderer's Soul",
        "image": "icons/magic/symbols/ring-circle-smoke-blue.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Wanderer's Soul",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Wanderer's Soul"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "l7vjMIbPAUvEIosU",
      "sourcePath": "pf2e-master/packs/ancestries/samsaran.json",
      "slug": "samsaran",
      "image": "systems/pf2e/icons/default-icons/ancestry.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "samsaran"
      ],
      "additional": {
        "count": 0,
        "options": [
          "chthonian",
          "empyrean",
          "jotun",
          "petran",
          "pyric",
          "sussuran",
          "thalassic",
          "diabolic",
          "draconic"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:sarangay",
    "kind": "ancestry",
    "slug": "sarangay",
    "name": "Sarangay",
    "description": {
      "sourceHtml": "<p><em>Sarangay are carabao-headed people who have long survived deep in the forests across Tian Xia. Many adventurers have thought them to be monsters at first, but sarangay are nothing more than a thriving society who value their community and their souls above all else. Their cultures are built upon the intense desire to protect their communities and their chosen leader. Their horns are said to be a crescent moon, and their towering statures are said to have come from their ancestors being stretched so far up to reach their Father Moon while their Mother Earth kept them close to her bosom. They revere the great Father Moon, their First Ancestor, and endeavor to protect and exalt nature above all else, for they understand that they're part of it.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.oTRP3yJNZp5KRoHK]{Sarangay}</em></p>",
      "plainText": "Sarangay are carabao-headed people who have long survived deep in the forests across Tian Xia. Many adventurers have thought them to be monsters at first, but sarangay are nothing more than a thriving society who value their community and their souls above all else. Their cultures are built upon the intense desire to protect their communities and their chosen leader. Their horns are said to be a crescent moon, and their towering statures are said to have come from their ancestors being stretched so far up to reach their Father Moon while their Mother Earth kept them close to her bosom. They revere the great Father Moon, their First Ancestor, and endeavor to protect and exalt nature above all else, for they understand that they're part of it. Sarangay"
    },
    "rarity": "rare",
    "traits": [
      "humanoid",
      "sarangay"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Head Gem",
        "image": "icons/commodities/gems/gem-rough-cushion-red.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Head Gem",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Head Gem"
        }
      },
      {
        "name": "Horns (Sarangay)",
        "image": "icons/creatures/abilities/bull-head-horns-glowing.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Horns (Sarangay)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Horns (Sarangay)"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "7mpMGhVoaPANJnZ8",
      "sourcePath": "pf2e-master/packs/ancestries/sarangay.json",
      "slug": "sarangay",
      "image": "systems/pf2e/icons/default-icons/ancestry.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "common"
      ],
      "additional": {
        "count": 0,
        "options": [
          "empyrean",
          "fey",
          "nagaji",
          "petran",
          "pyric",
          "sussuran",
          "thalassic",
          "yaksha"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:shisk",
    "kind": "ancestry",
    "slug": "shisk",
    "name": "Shisk",
    "description": {
      "sourceHtml": "<p><em>Shisks are secretive mountain-dwellers, bone-feathered humanoids who lurk underground in dark tunnels and caverns. Their fascination with collecting and protecting esoteric knowledge is one of the few things that can persuade them to explore the outside world.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.qsbc1ZLCWzfl1sfZ]{Shisk}</em></p>",
      "plainText": "Shisks are secretive mountain-dwellers, bone-feathered humanoids who lurk underground in dark tunnels and caverns. Their fascination with collecting and protecting esoteric knowledge is one of the few things that can persuade them to explore the outside world. Shisk"
    },
    "rarity": "rare",
    "traits": [
      "humanoid",
      "shisk"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "x1YinOddgUxwOLqP",
      "sourcePath": "pf2e-master/packs/ancestries/shisk.json",
      "slug": "shisk",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/shisk.svg",
      "publication": {
        "title": "Pathfinder Lost Omens The Mwangi Expanse",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "mwangi",
        "shisk"
      ],
      "additional": {
        "count": 0,
        "options": [
          "common",
          "draconic",
          "dwarven",
          "elven",
          "fey",
          "gnomish",
          "goblin",
          "halfling",
          "jotun",
          "orcish",
          "sakvroth"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:shoony",
    "kind": "ancestry",
    "slug": "shoony",
    "name": "Shoony",
    "description": {
      "sourceHtml": "<p><em>Diminutive humanoids who resemble squat, bipedal dogs, shoonies are sometimes mistaken for weak and insular pacifists. However, their sheer perseverance, incredible work ethic, and resourceful use of diplomacy make shoonies far from helpless.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.j2hOTtHcdu2SA8Ha]{Shoony}</em></p>",
      "plainText": "Diminutive humanoids who resemble squat, bipedal dogs, shoonies are sometimes mistaken for weak and insular pacifists. However, their sheer perseverance, incredible work ethic, and resourceful use of diplomacy make shoonies far from helpless. Shoony"
    },
    "rarity": "rare",
    "traits": [
      "humanoid",
      "shoony"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Blunt Snout",
        "image": "systems/pf2e/icons/features/ancestry/fishseeker-shoony.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Blunt Snout",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Blunt Snout"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "q6rsqYARyOGXZA8F",
      "sourcePath": "pf2e-master/packs/ancestries/shoony.json",
      "slug": "shoony",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/shoony.webp",
      "publication": {
        "title": "Pathfinder #153: Life's Long Shadows",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "shoony"
      ],
      "additional": {
        "count": 0,
        "options": [
          "dwarven",
          "gnomish",
          "goblin",
          "halfling",
          "petran"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:skeleton",
    "kind": "ancestry",
    "slug": "skeleton",
    "name": "Skeleton",
    "description": {
      "sourceHtml": "<p><em>Skeletons are considered among the lowest types of undead. They're typically mindless creatures, lacking many of the abilities that make other undead a serious threat. However, the animated bones of dragons, giants, and other great beasts make for dangerous foes. Powerful living creatures can retain some of their might and intellect upon returning as a skeleton. Some necromancers turn their strongest enemies into skeletal undead servants, assuming they can keep control of them.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.EcNSrvwIj22Jxkjz]{Skeleton}</em></p>",
      "plainText": "Skeletons are considered among the lowest types of undead. They're typically mindless creatures, lacking many of the abilities that make other undead a serious threat. However, the animated bones of dragons, giants, and other great beasts make for dangerous foes. Powerful living creatures can retain some of their might and intellect upon returning as a skeleton. Some necromancers turn their strongest enemies into skeletal undead servants, assuming they can keep control of them. Skeleton"
    },
    "rarity": "rare",
    "traits": [
      "skeleton",
      "undead"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Basic Undead Benefits",
        "image": "icons/magic/death/skull-humanoid-white-blue.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Basic Undead Benefits",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Basic Undead Benefits"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "58rL5sg2y4arW1i5",
      "sourcePath": "pf2e-master/packs/ancestries/skeleton.json",
      "slug": "skeleton",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/skeleton.svg",
      "publication": {
        "title": "Pathfinder Book of the Dead",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "common",
        "necril"
      ],
      "additional": {
        "count": 0,
        "options": [],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:sprite",
    "kind": "ancestry",
    "slug": "sprite",
    "name": "Sprite",
    "description": {
      "sourceHtml": "<p><em>Sprites are diminutive, whimsical, and exuberant creatures from the fey realm known as the First World. They love playing pranks, exploring new things, and embracing everything to do with magic.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.rvbMGyBr6y5K7HDP]{Sprite}</em></p>",
      "plainText": "Sprites are diminutive, whimsical, and exuberant creatures from the fey realm known as the First World. They love playing pranks, exploring new things, and embracing everything to do with magic. Sprite"
    },
    "rarity": "rare",
    "traits": [
      "fey",
      "sprite"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Magical Strikes",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Magical Strikes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Magical Strikes"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "TRqoeYfGAFjQbviF",
      "sourcePath": "pf2e-master/packs/ancestries/sprite.json",
      "slug": "sprite",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/sprite.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 20,
    "size": "tiny",
    "hands": 2,
    "reachFeet": 0,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "fey"
      ],
      "additional": {
        "count": 0,
        "options": [
          "draconic",
          "elven",
          "empyrean",
          "gnomish",
          "goblin",
          "jotun"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:strix",
    "kind": "ancestry",
    "slug": "strix",
    "name": "Strix",
    "description": {
      "sourceHtml": "<p><em>Known as itarii in their own language, strix are reclusive avian humanoids devoted to their homelands and their tribes. They defend their precious communities with broad wingspans and razor talons.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.N8aShsDuf3ur0vZ2]{Strix}</em></p>",
      "plainText": "Known as itarii in their own language, strix are reclusive avian humanoids devoted to their homelands and their tribes. They defend their precious communities with broad wingspans and razor talons. Strix"
    },
    "rarity": "rare",
    "traits": [
      "humanoid",
      "strix"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Wings",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Wings",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Wings"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "GXcC6oVa5quzgNHD",
      "sourcePath": "pf2e-master/packs/ancestries/strix.json",
      "slug": "strix",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/strix.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Ancestry Guide",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "strix"
      ],
      "additional": {
        "count": 0,
        "options": [
          "diabolic",
          "draconic",
          "gnomish",
          "jotun"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:surki",
    "kind": "ancestry",
    "slug": "surki",
    "name": "Surki",
    "description": {
      "sourceHtml": "<p>Surkis are an insectile species who subsist on the latent magic in the world around them. As a subterranean species native to the Darklands, surkis have rarely been seen on the surface, and always with long pauses between historical sightings. This is due to surkis' life cycle—long dormancies followed by so-called \"generation digs,\" as they migrate great distances in response to happenings underground. The healing of the Worldwound initiated one of the largest such digs in their history, bringing surkis up into the caverns and passages of the Sarkoris Scar and emerging onto the surface for the first time in many years. Since their emergence, several small surki settlements have been established in secluded corners of Sarkoris, voraciously cataloging the wildlife, magics, and various other inhabitants of the area as they explore the alien environment of the surface.</p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.6kuNg9Pr7LdaNPQq]{Surki}</em></p>",
      "plainText": "Surkis are an insectile species who subsist on the latent magic in the world around them. As a subterranean species native to the Darklands, surkis have rarely been seen on the surface, and always with long pauses between historical sightings. This is due to surkis' life cycle—long dormancies followed by so-called \"generation digs,\" as they migrate great distances in response to happenings underground. The healing of the Worldwound initiated one of the largest such digs in their history, bringing surkis up into the caverns and passages of the Sarkoris Scar and emerging onto the surface for the first time in many years. Since their emergence, several small surki settlements have been established in secluded corners of Sarkoris, voraciously cataloging the wildlife, magics, and various other inhabitants of the area as they explore the alien environment of the surface. Surki"
    },
    "rarity": "rare",
    "traits": [
      "humanoid",
      "surki"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.surki.evolutions",
          "priority": 10,
          "value": []
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Magiphage",
        "image": "icons/magic/symbols/rune-sigil-green-purple.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Magiphage",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Magiphage"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "ALOmLePjbc37ca3Y",
      "sourcePath": "pf2e-master/packs/ancestries/surki.json",
      "slug": "surki",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/surki.svg",
      "publication": {
        "title": "Pathfinder Howl of the Wild",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common",
        "surki"
      ],
      "additional": {
        "count": 0,
        "options": [
          "elven",
          "fey",
          "sakvroth"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:tanuki",
    "kind": "ancestry",
    "slug": "tanuki",
    "name": "Tanuki",
    "description": {
      "sourceHtml": "<p><em>Tian Xia is replete with magically gifted ancestries—such as tengu, kitsune, yakshas, and yaoguai—whose powers bring them high regard and who, in turn, use their gifts for responsible ends. Tanuki aren't one of these ancestries. Instead, the shapeshifting raccoon dog–like humanoids use their powers of illusion and transformation in ways more people should: for fun! Tanuki delight in pranks and practical jokes, especially those that allow them to take the high and mighty down a notch and show them what life is like for everyone else. Where other peoples take pride in their storied histories, noble traditions, or intricate ceremonies, tanuki take pride in their simplicity and disregard for the world's many rules. Though some might claim this outlook reduces tanuki to uncouth rubes, tanuki feel it makes them more cultured; after all, one must know a rule to bend it, and one must understand a norm to break it.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.I1uEGrIhe4zLs8Ei]{Tanuki}</em></p>",
      "plainText": "Tian Xia is replete with magically gifted ancestries—such as tengu, kitsune, yakshas, and yaoguai—whose powers bring them high regard and who, in turn, use their gifts for responsible ends. Tanuki aren't one of these ancestries. Instead, the shapeshifting raccoon dog–like humanoids use their powers of illusion and transformation in ways more people should: for fun! Tanuki delight in pranks and practical jokes, especially those that allow them to take the high and mighty down a notch and show them what life is like for everyone else. Where other peoples take pride in their storied histories, noble traditions, or intricate ceremonies, tanuki take pride in their simplicity and disregard for the world's many rules. Though some might claim this outlook reduces tanuki to uncouth rubes, tanuki feel it makes them more cultured; after all, one must know a rule to bend it, and one must understand a norm to break it. Tanuki"
    },
    "rarity": "uncommon",
    "traits": [
      "humanoid",
      "tanuki"
    ],
    "rules": [
      {
        "key": "GrantItem",
        "data": {
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
              "label": "PF2E.NPCAbility.ChangeShape.Form.RacoonDog",
              "value": "raccoon-dog"
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
          "mode": "override",
          "predicate": [
            "item:slug:change-shape"
          ],
          "property": "description",
          "value": [
            {
              "text": "PF2E.SpecificRule.ChangeShape.Tanuki"
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
        "key": "ItemAlteration",
        "data": {
          "itemType": "action",
          "key": "ItemAlteration",
          "mode": "add",
          "predicate": [
            "item:slug:change-shape"
          ],
          "property": "traits",
          "value": "tanuki"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "pILFsoGsUQkVF5dZ",
      "sourcePath": "pf2e-master/packs/ancestries/tanuki.json",
      "slug": "tanuki",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/tanuki.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 10,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "common",
        "tanuki"
      ],
      "additional": {
        "count": 0,
        "options": [
          "elven",
          "fey",
          "gnomish",
          "goblin",
          "kitsune",
          "tengu"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:tengu",
    "kind": "ancestry",
    "slug": "tengu",
    "name": "Tengu",
    "description": {
      "sourceHtml": "<p><em>Tengu are survivalists and conversationalists, equally at home living off the wilderness and finding a niche in dense cities. They accumulate knowledge, tools, and companions, adding them to their collection as they travel.</em></p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.YGIwmuVOJI7uNhGM]{Tengu}</p>",
      "plainText": "Tengu are survivalists and conversationalists, equally at home living off the wilderness and finding a niche in dense cities. They accumulate knowledge, tools, and companions, adding them to their collection as they travel. Tengu"
    },
    "rarity": "uncommon",
    "traits": [
      "humanoid",
      "tengu"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Sharp Beak",
        "image": "systems/pf2e/icons/features/ancestry/sharp-beak.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Sharp Beak",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Sharp Beak"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "18xDKYPDBLEv2myX",
      "sourcePath": "pf2e-master/packs/ancestries/tengu.json",
      "slug": "tengu",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/tengu.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "tengu"
      ],
      "additional": {
        "count": 0,
        "options": [
          "dwarven",
          "elven",
          "fey",
          "gnomish",
          "goblin",
          "halfling"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:tripkee",
    "kind": "ancestry",
    "slug": "tripkee",
    "name": "Tripkee",
    "description": {
      "sourceHtml": "<p><em>Tripkees are a shy and cautious people who generally seek to avoid being drawn into the affairs of others. Despite their cautious outlook and small stature, adventurous tripkees still take bold and noble action when the situation demands it.</em></p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.FhIJtKcINEe7fipX]</p>",
      "plainText": "Tripkees are a shy and cautious people who generally seek to avoid being drawn into the affairs of others. Despite their cautious outlook and small stature, adventurous tripkees still take bold and noble action when the situation demands it."
    },
    "rarity": "uncommon",
    "traits": [
      "grippli",
      "humanoid"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Natural Climber",
        "image": "icons/creatures/amphibians/treefrog-leaf-green.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Natural Climber",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Natural Climber"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "hXM5jXezIki1cMI2",
      "sourcePath": "pf2e-master/packs/ancestries/tripkee.json",
      "slug": "tripkee",
      "image": "systems/pf2e/icons/default-icons/alternatives/ancestries/grippli.svg",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "grippli"
      ],
      "additional": {
        "count": 0,
        "options": [
          "boggard",
          "chthonian",
          "draconic",
          "elven",
          "fey",
          "iruxi",
          "thalassic"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "wis"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "str"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:vanara",
    "kind": "ancestry",
    "slug": "vanara",
    "name": "Vanara",
    "description": {
      "sourceHtml": "<p>Vanaras are inquisitive and mischievous monkey-like humanoids with short, soft fur, expressive eyes, and long, prehensile tails. Their handlike feet and agile builds serve them well in the jungle realms where most vanaras live.</p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.40koksC576nYV2Tf]{Vanara}</p>",
      "plainText": "Vanaras are inquisitive and mischievous monkey-like humanoids with short, soft fur, expressive eyes, and long, prehensile tails. Their handlike feet and agile builds serve them well in the jungle realms where most vanaras live. Vanara"
    },
    "rarity": "uncommon",
    "traits": [
      "humanoid",
      "vanara"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Prehensile Tail",
        "image": "systems/pf2e/icons/default-icons/feat.svg",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Prehensile Tail",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Prehensile Tail"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "cLtOGIkuSSa4UDHY",
      "sourcePath": "pf2e-master/packs/ancestries/vanara.json",
      "slug": "vanara",
      "image": "systems/pf2e/icons/default-icons/ancestry.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 6,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "common",
        "vanara"
      ],
      "additional": {
        "count": 0,
        "options": [
          "diabolic",
          "elven",
          "fey",
          "gnomish",
          "goblin"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:vishkanya",
    "kind": "ancestry",
    "slug": "vishkanya",
    "name": "Vishkanya",
    "description": {
      "sourceHtml": "<p>Vishkanyas are ophidian humanoids who carry potent venom within their blood and saliva. Largely misunderstood due to old tales of their toxicity and natural finesse, vishkanyas work to grow into more than just what stories paint them to be.</p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.1lCAkGgIYYkczZ28]{Vishkanya}</p>",
      "plainText": "Vishkanyas are ophidian humanoids who carry potent venom within their blood and saliva. Largely misunderstood due to old tales of their toxicity and natural finesse, vishkanyas work to grow into more than just what stories paint them to be. Vishkanya"
    },
    "rarity": "rare",
    "traits": [
      "humanoid",
      "vishkanya"
    ],
    "rules": [],
    "grantedItems": [
      {
        "name": "Innate Venom",
        "image": "icons/skills/melee/blade-tip-energy-green.webp",
        "level": 0,
        "uuid": "Compendium.pf2e.ancestryfeatures.Item.Innate Venom",
        "parsedReference": {
          "system": "pf2e",
          "pack": "ancestryfeatures",
          "documentType": "Item",
          "documentIdOrName": "Innate Venom"
        }
      }
    ],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "u1VJEXsVlmh3Fyx0",
      "sourcePath": "pf2e-master/packs/ancestries/vishkanya.json",
      "slug": "vishkanya",
      "image": "systems/pf2e/icons/default-icons/ancestry.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Impossible Lands",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "vishkanyan"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "draconic",
          "elven",
          "goblin",
          "thalassic",
          "sakvroth",
          "vanara"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:wayang",
    "kind": "ancestry",
    "slug": "wayang",
    "name": "Wayang",
    "description": {
      "sourceHtml": "<p><em>Wayangs are diasporic sojourners from the Netherworld where they lived and worked alongside their allies, lightweaving d'ziriaks. Both peoples shared affinities for artistic expression and spiritual introspection, inspiring each other's sensitivities to color, form, and function; they also bolstered each other's defense against rampaging dragons, oni, and undead. This idyll collapsed from divine meddling; some say when Abadar sentenced Zon-Kuthon to exile in the Netherworld, the Midnight Lord's deific presence distorted the plane into a nightmarish domain, while others accounts ascribe fiendish sources to this doom.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.lLXEwzxawJ3Q0tpg]{Wayang}</em></p>",
      "plainText": "Wayangs are diasporic sojourners from the Netherworld where they lived and worked alongside their allies, lightweaving d'ziriaks. Both peoples shared affinities for artistic expression and spiritual introspection, inspiring each other's sensitivities to color, form, and function; they also bolstered each other's defense against rampaging dragons, oni, and undead. This idyll collapsed from divine meddling; some say when Abadar sentenced Zon-Kuthon to exile in the Netherworld, the Midnight Lord's deific presence distorted the plane into a nightmarish domain, while others accounts ascribe fiendish sources to this doom. Wayang"
    },
    "rarity": "uncommon",
    "traits": [
      "humanoid",
      "shadow",
      "wayang"
    ],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.colorDarkvision",
          "value": true
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "8FpI46oVxYVku04u",
      "sourcePath": "pf2e-master/packs/ancestries/wayang.json",
      "slug": "wayang",
      "image": "systems/pf2e/icons/default-icons/ancestry.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "sm",
    "hands": 2,
    "reachFeet": 5,
    "vision": "darkvision",
    "languages": {
      "granted": [
        "common",
        "shadowtongue",
        "wayang"
      ],
      "additional": {
        "count": 0,
        "options": [
          "dziriak",
          "diabolic",
          "minaten",
          "nagaji",
          "thalassic",
          "vudrani",
          "yaksha"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "dex"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:yaksha",
    "kind": "ancestry",
    "slug": "yaksha",
    "name": "Yaksha",
    "description": {
      "sourceHtml": "<p><em>Away from shining citadels and opulent palaces, reticent yakshas shelter Tian Xia's rural hinterlands from natural disasters and otherworldly depredations. Famed for resolute vows and prowess with primal magic, yakshas shield the indigent and protect the wilderness, punishing those who threaten either with bone-crushing fury. Yaksha legends recall their origins as divine spirits, overseeing the safety of roads and abodes in a primeval world of vast storm forests and titanic flame floods—the First World, a realm of boundless potentiality. During the Great Abandonment, when the gods left the First World, many yakshas rejected this exodus, instead staying to perform their duties as caretakers. Despite the realm's sudden dearth of divine power, the remaining yakshas swore primordial vows, allowing them to channel power from the nearby Creation's Forge into primal magic and transform swathes of the metamorphic First World into stable regions to provide refuge for destitute fey.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.f6IU2EGcJUzVZ4nD]{Yaksha}</em></p>",
      "plainText": "Away from shining citadels and opulent palaces, reticent yakshas shelter Tian Xia's rural hinterlands from natural disasters and otherworldly depredations. Famed for resolute vows and prowess with primal magic, yakshas shield the indigent and protect the wilderness, punishing those who threaten either with bone-crushing fury. Yaksha legends recall their origins as divine spirits, overseeing the safety of roads and abodes in a primeval world of vast storm forests and titanic flame floods—the First World, a realm of boundless potentiality. During the Great Abandonment, when the gods left the First World, many yakshas rejected this exodus, instead staying to perform their duties as caretakers. Despite the realm's sudden dearth of divine power, the remaining yakshas swore primordial vows, allowing them to channel power from the nearby Creation's Forge into primal magic and transform swathes of the metamorphic First World into stable regions to provide refuge for destitute fey. Yaksha"
    },
    "rarity": "rare",
    "traits": [
      "spirit",
      "yaksha"
    ],
    "rules": [],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "k3zyr6du4gV0Ftuh",
      "sourcePath": "pf2e-master/packs/ancestries/yaksha.json",
      "slug": "yaksha",
      "image": "systems/pf2e/icons/default-icons/ancestry.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "low-light-vision",
    "languages": {
      "granted": [
        "common",
        "fey",
        "yaksha"
      ],
      "additional": {
        "count": 0,
        "options": [
          "diabolic",
          "empyrean",
          "nagaji",
          "tang",
          "tengu",
          "vudrani"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:ancestry:yaoguai",
    "kind": "ancestry",
    "slug": "yaoguai",
    "name": "Yaoguai",
    "description": {
      "sourceHtml": "<p><em>Yaoguai usually begin as simple animals, plants, or objects before finding a way to awaken to sapience, becoming strange shapeshifting creatures in the process. Often originating from an infusion of ambient energy into their original form, yaoguai attain their powers through training their innate magic. Taking care not to expose their true appearance and nature, yaoguai of the same origins or species sometimes form enclaves in which they dedicate their lives to honing their powers or engaging in hedonistic pursuits—though the two aren't mutually exclusive. Yaoguai who lack a solid community, meanwhile, feel compelled to cultivate themselves until they transcend their origin, which might allow them to join society and experience a new kind of freedom.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.45SK8rdbbxvEHfMn.JournalEntryPage.OlqTCYZK9sBDeuKf]{Yaoguai}</em></p>",
      "plainText": "Yaoguai usually begin as simple animals, plants, or objects before finding a way to awaken to sapience, becoming strange shapeshifting creatures in the process. Often originating from an infusion of ambient energy into their original form, yaoguai attain their powers through training their innate magic. Taking care not to expose their true appearance and nature, yaoguai of the same origins or species sometimes form enclaves in which they dedicate their lives to honing their powers or engaging in hedonistic pursuits—though the two aren't mutually exclusive. Yaoguai who lack a solid community, meanwhile, feel compelled to cultivate themselves until they transcend their origin, which might allow them to join society and experience a new kind of freedom. Yaoguai"
    },
    "rarity": "rare",
    "traits": [
      "humanoid",
      "yaoguai"
    ],
    "rules": [
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
              "label": "PF2E.NPCAbility.ChangeShape.Form.Yaoguai",
              "value": "yaoguai"
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
          "mode": "override",
          "predicate": [
            "item:slug:change-shape"
          ],
          "property": "description",
          "value": [
            {
              "text": "PF2E.SpecificRule.ChangeShape.Yaoguai"
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
          "value": "occult"
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
          "value": "yaoguai"
        }
      },
      {
        "key": "GrantItem",
        "data": {
          "key": "GrantItem",
          "uuid": "Compendium.pf2e.actionspf2e.Item.Change Shape"
        }
      }
    ],
    "grantedItems": [],
    "source": {
      "sourcePack": "ancestries",
      "sourceId": "dnk0Rf7AUmyR5b8z",
      "sourcePath": "pf2e-master/packs/ancestries/yaoguai.json",
      "slug": "yaoguai",
      "image": "systems/pf2e/icons/default-icons/ancestry.svg",
      "publication": {
        "title": "Pathfinder Lost Omens Tian Xia Character Guide",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPoints": 8,
    "speedFeet": 25,
    "size": "med",
    "hands": 2,
    "reachFeet": 5,
    "vision": "normal",
    "languages": {
      "granted": [
        "common"
      ],
      "additional": {
        "count": 0,
        "options": [
          "aklo",
          "draconic",
          "elven",
          "fey",
          "kitsune",
          "nagaji",
          "sakvroth",
          "tengu",
          "ysoki"
        ],
        "custom": null
      }
    },
    "attributes": {
      "boosts": [
        {
          "key": "0",
          "options": [
            "cha"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "1",
          "options": [
            "con"
          ],
          "count": 1,
          "free": false
        },
        {
          "key": "2",
          "options": [
            "str",
            "dex",
            "con",
            "int",
            "wis",
            "cha"
          ],
          "count": 1,
          "free": true
        }
      ],
      "flaws": [
        {
          "key": "0",
          "options": [
            "int"
          ],
          "count": 1,
          "free": false
        }
      ],
      "alternateBoosts": []
    }
  }
]
