import type { Pathfinder2eOriginalContentRecord } from '../../../records'
import type { Pathfinder2eItemData } from '../../types'

export const PATHFINDER_PLAYER_CORE_EQUIPMENT_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:healers-toolkit-expanded",
    "domain": "ITEM",
    "locale": "en-US",
    "sourceHash": "sha256:bf1709adf5a91110b63bae668037532f48b601ce065d293b692ed45ad2a4c680",
    "translatableHash": "sha256:2e28b69be71a863cda546a080a275e5a6e75803215deffeb0cb7deab2c4274dc",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SGkOHFyBbzWdBk8D",
      "slug": "healers-toolkit-expanded",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "data": {
      "schemaVersion": 1,
      "name": "Healer's Toolkit (Expanded)",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [],
      "description": "This kit of bandages, herbs, and suturing tools is necessary for Medicine checks that require a healer's toolkit. The expanded toolkit grants a +1 item bonus to those checks.",
      "bulk": 1,
      "price": {
        "gp": 50
      },
      "usage": "worn-or-carried",
      "category": "equipment",
      "group": "adventuring-gear"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 87,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Administer First Aid",
          "sourceId": "MHLuKy4nQO2Z4Am1",
          "name": "Administer First Aid",
          "type": "action"
        },
        "owner": {
          "sourceId": "SGkOHFyBbzWdBk8D",
          "name": "Healer's Toolkit (Expanded)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 149,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Disease",
          "sourceId": "TC7OcDa7JlWbqMaN",
          "name": "Treat Disease",
          "type": "action"
        },
        "owner": {
          "sourceId": "SGkOHFyBbzWdBk8D",
          "name": "Healer's Toolkit (Expanded)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 204,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Poison",
          "sourceId": "KjoCEEmPGTeFE4hh",
          "name": "Treat Poison",
          "type": "action"
        },
        "owner": {
          "sourceId": "SGkOHFyBbzWdBk8D",
          "name": "Healer's Toolkit (Expanded)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 261,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Wounds",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Wounds",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Wounds",
          "sourceId": "1kGNdIIhuglAjIp9",
          "name": "Treat Wounds",
          "type": "action"
        },
        "owner": {
          "sourceId": "SGkOHFyBbzWdBk8D",
          "name": "Healer's Toolkit (Expanded)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:spyglass-fine",
    "domain": "ITEM",
    "locale": "en-US",
    "sourceHash": "sha256:08873d551905cb17cfa7568980bbeda271d364cc1cf627ba584e84513ce8cf7f",
    "translatableHash": "sha256:b451d2f446ed938e6df3c6db646da46d3cda7c2a38505c5832e9f707b8a878c5",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rV7MTDCseZmEZKDw",
      "slug": "spyglass-fine",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "data": {
      "schemaVersion": 1,
      "name": "Spyglass (Fine)",
      "itemType": "equipment",
      "level": 4,
      "rarity": "common",
      "traits": [],
      "description": "A typical spyglass lets you see eight times farther than normal. A fine spyglass grants a +1 item bonus to Perception checks to notice details at a distance.",
      "bulk": 0.1,
      "price": {
        "gp": 80
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "adventuring-gear"
    }
  }
]
