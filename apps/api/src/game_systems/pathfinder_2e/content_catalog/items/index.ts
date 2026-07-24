import { pairPathfinder2eContent } from '../content-entry'
import { PATHFINDER_2E_ARMOR_ENTRIES } from './armor'
import { PATHFINDER_2E_EQUIPMENT_ENTRIES } from './equipment'
import { PATHFINDER_2E_EXHAUSTIVE_01_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-01'
import { PATHFINDER_2E_EXHAUSTIVE_02_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-02'
import { PATHFINDER_2E_EXHAUSTIVE_03_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-03'
import { PATHFINDER_2E_EXHAUSTIVE_04_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-04'
import { PATHFINDER_2E_EXHAUSTIVE_05_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-05'
import { PATHFINDER_2E_EXHAUSTIVE_06_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-06'
import { PATHFINDER_2E_EXHAUSTIVE_07_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-07'
import { PATHFINDER_2E_EXHAUSTIVE_08_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-08'
import { PATHFINDER_2E_EXHAUSTIVE_09_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-09'
import { PATHFINDER_2E_EXHAUSTIVE_10_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-10'
import { PATHFINDER_2E_EXHAUSTIVE_11_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-11'
import { PATHFINDER_2E_EXHAUSTIVE_12_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-12'
import { PATHFINDER_2E_EXHAUSTIVE_13_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-13'
import { PATHFINDER_2E_EXHAUSTIVE_14_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-14'
import { PATHFINDER_2E_EXHAUSTIVE_15_ITEM_ORIGINALS } from './original/core-remaster-exhaustive-15'
import { PATHFINDER_2E_EXHAUSTIVE_01_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-01'
import { PATHFINDER_2E_EXHAUSTIVE_02_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-02'
import { PATHFINDER_2E_EXHAUSTIVE_03_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-03'
import { PATHFINDER_2E_EXHAUSTIVE_04_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-04'
import { PATHFINDER_2E_EXHAUSTIVE_05_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-05'
import { PATHFINDER_2E_EXHAUSTIVE_06_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-06'
import { PATHFINDER_2E_EXHAUSTIVE_07_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-07'
import { PATHFINDER_2E_EXHAUSTIVE_08_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-08'
import { PATHFINDER_2E_EXHAUSTIVE_09_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-09'
import { PATHFINDER_2E_EXHAUSTIVE_10_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-10'
import { PATHFINDER_2E_EXHAUSTIVE_11_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-11'
import { PATHFINDER_2E_EXHAUSTIVE_12_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-12'
import { PATHFINDER_2E_EXHAUSTIVE_13_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-13'
import { PATHFINDER_2E_EXHAUSTIVE_14_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-14'
import { PATHFINDER_2E_EXHAUSTIVE_15_ITEMS_PT_BR } from './translations/pt-BR/core-remaster-exhaustive-15'
import { PATHFINDER_2E_WEAPON_ENTRIES } from './weapons'

export const PATHFINDER_2E_ITEM_ENTRIES = [
  ...PATHFINDER_2E_WEAPON_ENTRIES,
  ...PATHFINDER_2E_ARMOR_ENTRIES,
  ...PATHFINDER_2E_EQUIPMENT_ENTRIES,
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_01_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_01_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_02_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_02_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_03_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_03_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_04_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_04_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_05_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_05_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_06_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_06_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_07_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_07_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_08_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_08_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_09_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_09_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_10_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_10_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_11_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_11_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_12_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_12_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_13_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_13_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_14_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_14_ITEMS_PT_BR,
  ),
  ...pairPathfinder2eContent(
    PATHFINDER_2E_EXHAUSTIVE_15_ITEM_ORIGINALS,
    PATHFINDER_2E_EXHAUSTIVE_15_ITEMS_PT_BR,
  ),
]
