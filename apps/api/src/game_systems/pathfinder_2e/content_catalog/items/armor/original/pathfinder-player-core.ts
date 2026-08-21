import type { Pathfinder2eOriginalContentRecord } from '../../../records'
import type { Pathfinder2eItemData } from '../../types'

export const PATHFINDER_PLAYER_CORE_ARMOR_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:leather-armor",
    "domain": "ITEM",
    "locale": "en-US",
    "sourceHash": "git-blob:2b7f4b94cf7653e8b9bbc6ebd4ed9be93566dbc8",
    "translatableHash": "git-blob:2b7f4b94cf7653e8b9bbc6ebd4ed9be93566dbc8",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4tIVTg9wj56RrveA",
      "slug": "leather-armor",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "data": {
      "schemaVersion": 1,
      "name": "Leather Armor",
      "itemType": "armor",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "A mix of flexible leather and molded boiled leather that provides protection while preserving mobility.",
      "bulk": 1,
      "price": {
        "gp": 2
      },
      "usage": "worn-armor",
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
    "contentId": "pf2e:item:equipment-srd:full-plate",
    "domain": "ITEM",
    "locale": "en-US",
    "sourceHash": "sha256:ef9122f0007da24403c4bca352f09a39691b74cbae14e035de97cff8a1704850",
    "translatableHash": "sha256:e31f5abd5858fe963d2f0963be477a28995f62c8a66ba57986f917370dd9cd78",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Gq1cZWSKOtJhKd2p",
      "slug": "full-plate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/fullplate.webp"
    },
    "data": {
      "schemaVersion": 1,
      "name": "Full Plate",
      "itemType": "armor",
      "level": 2,
      "rarity": "common",
      "traits": [
        "bulwark"
      ],
      "description": "Interlocking steel plates encase nearly the entire body. Full plate is costly and heavy and often requires help to don, but it provides some of the best protection armor can supply.",
      "bulk": 4,
      "price": {
        "gp": 30
      },
      "usage": "worn-armor",
      "category": "heavy",
      "group": "plate",
      "armor": {
        "armorClassBonus": 6,
        "dexterityCap": 0,
        "checkPenalty": -3,
        "speedPenaltyFeet": -10
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 292,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Padded Armor",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Padded Armor",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Padded Armor",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "Gq1cZWSKOtJhKd2p",
          "name": "Full Plate",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 361,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Gauntlet",
        "label": "gauntlets",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Gauntlet",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Gauntlet",
          "sourceId": "Ix2vicchE79d6Cl3",
          "name": "Gauntlet",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Gq1cZWSKOtJhKd2p",
          "name": "Full Plate",
          "type": "armor"
        }
      }
    ]
  }
]
