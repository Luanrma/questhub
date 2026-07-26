import type {
  Pathfinder2eContentProgramPlan,
  Pathfinder2eContentRoadmap,
  Pathfinder2eContentRound,
  Pathfinder2eCoverageInventoryEntry,
  Pathfinder2eRoadmapValidation,
} from './models'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS } from './deliveries/core-remaster-exhaustive-01-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_IDS } from './deliveries/core-remaster-exhaustive-02-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_IDS } from './deliveries/core-remaster-exhaustive-03-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS } from './deliveries/core-remaster-exhaustive-04-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_IDS } from './deliveries/core-remaster-exhaustive-05-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS } from './deliveries/core-remaster-exhaustive-06-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS } from './deliveries/core-remaster-exhaustive-07-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_IDS } from './deliveries/core-remaster-exhaustive-08-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_IDS } from './deliveries/core-remaster-exhaustive-09-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_IDS } from './deliveries/core-remaster-exhaustive-10-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_IDS } from './deliveries/core-remaster-exhaustive-11-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_IDS } from './deliveries/core-remaster-exhaustive-12-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_IDS } from './deliveries/core-remaster-exhaustive-13-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_IDS } from './deliveries/core-remaster-exhaustive-14-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_15_IDS } from './deliveries/core-remaster-exhaustive-15-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_16_IDS } from './deliveries/core-remaster-exhaustive-16-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_17_IDS } from './deliveries/core-remaster-exhaustive-17-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_18_IDS } from './deliveries/core-remaster-exhaustive-18-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_19_IDS } from './deliveries/core-remaster-exhaustive-19-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_20_IDS } from './deliveries/core-remaster-exhaustive-20-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_21_IDS } from './deliveries/core-remaster-exhaustive-21-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_22_IDS } from './deliveries/core-remaster-exhaustive-22-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_IDS } from './deliveries/core-remaster-exhaustive-23-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_IDS } from './deliveries/core-remaster-exhaustive-24-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_IDS } from './deliveries/core-remaster-exhaustive-25-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_IDS } from './deliveries/core-remaster-exhaustive-26-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_27_IDS } from './deliveries/core-remaster-exhaustive-27-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_28_IDS } from './deliveries/core-remaster-exhaustive-28-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_29_IDS } from './deliveries/core-remaster-exhaustive-29-ids'
import { PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_30_IDS } from './deliveries/core-remaster-exhaustive-30-ids'

const CORE_BESTIARY_PUBLICATIONS = ['Pathfinder Monster Core'] as const
const CORE_PLAYER_PUBLICATIONS = ['Pathfinder Player Core'] as const
const CORE_PLAYER_2_PUBLICATIONS = ['Pathfinder Player Core 2'] as const
const CORE_GM_PUBLICATIONS = ['Pathfinder GM Core'] as const
const CORE_BESTIARY_2_PUBLICATIONS = ['Pathfinder Monster Core 2'] as const
const CORE_BESTIARY_2_AND_GM_PUBLICATIONS = [
  'Pathfinder Monster Core 2',
  'Pathfinder GM Core',
] as const
const NPC_CORE_PUBLICATIONS = ['Pathfinder NPC Core'] as const
const RAGE_OF_ELEMENTS_PUBLICATIONS = ['Pathfinder Rage of Elements'] as const
const HOWL_OF_THE_WILD_PUBLICATIONS = ['Pathfinder Howl of the Wild'] as const
const WAR_OF_IMMORTALS_AND_BATTLECRY_PUBLICATIONS = [
  'Pathfinder War of Immortals',
  'Pathfinder Battlecry!',
] as const
const HOWL_WAR_AND_BATTLECRY_PUBLICATIONS = [
  'Pathfinder Howl of the Wild',
  'Pathfinder War of Immortals',
  'Pathfinder Battlecry!',
] as const
const DARK_ARCHIVE_PUBLICATIONS = ['Pathfinder Dark Archive (Remastered)'] as const
const DARK_ARCHIVE_AND_TREASURE_VAULT_PUBLICATIONS = [
  'Pathfinder Dark Archive (Remastered)',
  'Pathfinder Treasure Vault (Remastered)',
] as const
const GUNS_DARK_ARCHIVE_AND_TREASURE_VAULT_PUBLICATIONS = [
  'Pathfinder Guns & Gears',
  'Pathfinder Dark Archive (Remastered)',
  'Pathfinder Treasure Vault (Remastered)',
] as const
const LOST_OMENS_CREATURE_PUBLICATIONS = [
  'Pathfinder Lost Omens Tian Xia World Guide',
  'Pathfinder Lost Omens Shining Kingdoms',
  'Pathfinder Lost Omens Draconic Codex',
  'Pathfinder Lost Omens Hellfire Dispatches',
  'Pathfinder Lost Omens High Seas',
] as const
const LOST_OMENS_SPELL_PUBLICATIONS = [
  'Pathfinder Lost Omens Divine Mysteries',
  'Pathfinder Lost Omens Rival Academies',
  'Pathfinder Lost Omens Shining Kingdoms',
  'Pathfinder Lost Omens Draconic Codex',
  'Pathfinder Lost Omens High Seas',
] as const
const TREASURE_VAULT_PUBLICATIONS = ['Pathfinder Treasure Vault (Remastered)'] as const
const STANDALONE_AND_ADVENTURE_PATH_CREATURE_PUBLICATIONS = [
  'Pathfinder Adventures: Dark Archive Web Supplement: In Darkness (Remastered)',
  'Pathfinder Free RPG Day Adventure: The Great Toy Heist',
  'Pathfinder Adventure: Prey for Death',
  'Pathfinder Claws of the Tyrant',
  'Pathfinder Adventures: Troubles in Grayce',
  'Pathfinder Adventure: The Scourge of Sheerleaf',
  'Pathfinder Game Night: Dawn of the Frogs',
  'Pathfinder Beginner Box: Secrets of the Unlit Star',
  'Pathfinder Adventure Path: Gatewalkers',
  'Pathfinder Season of Ghosts Hardcover Compilation',
  'Pathfinder #201: Pactbreaker',
  'Pathfinder #202: Severed at the Root',
] as const
const STANDALONE_AND_ADVENTURE_PATH_SPELL_PUBLICATIONS = [
  'Pathfinder Adventure: Prey for Death',
  'Pathfinder Adventure Path: Gatewalkers',
  'Pathfinder Season of Ghosts Hardcover Compilation',
  'Pathfinder #201: Pactbreaker',
] as const
const ADVENTURE_PATH_21_CREATURE_PUBLICATIONS = [
  'Pathfinder #202: Severed at the Root',
  'Pathfinder #203: Shepherd of Decay',
  'Pathfinder #204: Stage Fright',
  'Pathfinder #205: Singer, Stalker, Skinsaw Man',
  'Pathfinder #206: Bring the House Down',
  'Pathfinder #207: The Resurrection Flood',
  'Pathfinder #208: Hoof, Cinder, and Storm',
  'Pathfinder #209: Destroyer\'s Doom',
  'Pathfinder #210: Whispers in the Dirt',
  'Pathfinder #211: The Secret of Deathstalk Tower',
  'Pathfinder #212: A Voice in the Blight',
  'Pathfinder #213: Thirst for Blood',
  'Pathfinder #213: Thirst for Blood',
  'Pathfinder #214: The Broken Palace',
  'Pathfinder #215: To Blot Out the Sun',
  'Pathfinder Adventure Path #215: To Blot Out the Sun',
  'Pathfinder #216: The Acropolis Pyre',
] as const
const ADVENTURE_PATH_21_SPELL_PUBLICATIONS = [
  'Pathfinder #203: Shepherd of Decay',
  'Pathfinder #205: Singer, Stalker, Skinsaw Man',
  'Pathfinder #209: Destroyer\'s Doom',
  'Pathfinder #211: The Secret of Deathstalk Tower',
  'Pathfinder #212: A Voice in the Blight',
  'Pathfinder #216: The Acropolis Pyre',
] as const
const RULEBOOK_21_ITEM_PUBLICATIONS = [
  'Pathfinder Treasure Vault (Remastered)',
  'Pathfinder Lost Omens Tian Xia Character Guide',
  'Pathfinder Lost Omens Divine Mysteries',
  'Pathfinder Lost Omens Rival Academies',
  'Pathfinder Lost Omens Shining Kingdoms',
] as const
const ADVENTURE_PATH_22_CREATURE_PUBLICATIONS = [
  'Pathfinder #216: The Acropolis Pyre',
  'Pathfinder #217: Death Sails a Wine-Dark Sea',
  'Pathfinder #218: Titanbane',
  'Pathfinder #219: Lord of the Trinity Star',
  'Pathfinder #220: Crypt of Runes',
  'Pathfinder #221: Into the Apocalypse Archive',
  'Pathfinder Adventure Path: Bastion of Blasphemies',
  'Pathfinder Adventure Path: Hell\'s Destiny',
  'Pathfinder Adventure Path: Hellbreakers',
] as const
const LEGACY_RULEBOOK_22_SPELL_PUBLICATIONS = [
  'Pathfinder Core Rulebook',
  'Pathfinder Advanced Player\'s Guide',
  'Pathfinder Secrets of Magic',
] as const
const LOST_OMENS_AND_ADVENTURE_22_ITEM_PUBLICATIONS = [
  'Pathfinder Lost Omens Shining Kingdoms',
  'Pathfinder Lost Omens Draconic Codex',
  'Pathfinder Lost Omens Hellfire Dispatches',
  'Pathfinder Lost Omens High Seas',
  'Pathfinder Adventure: Prey for Death',
  'Pathfinder Claws of the Tyrant',
  'Pathfinder Adventures: Troubles in Grayce',
  'Pathfinder Beginner Box: Secrets of the Unlit Star',
  'Pathfinder Adventure Path: Gatewalkers',
  'Pathfinder Season of Ghosts Hardcover Compilation',
  'Pathfinder #201: Pactbreaker',
  'Pathfinder #202: Severed at the Root',
  'Pathfinder #203: Shepherd of Decay',
  'Pathfinder #204: Stage Fright',
  'Pathfinder #205: Singer, Stalker, Skinsaw Man',
  'Pathfinder #206: Bring the House Down',
  'Pathfinder #207: The Resurrection Flood',
  'Pathfinder #208: Hoof, Cinder, and Storm',
  'Pathfinder #209: Destroyer\'s Doom',
  'Pathfinder #210: Whispers in the Dirt',
  'Pathfinder #211: The Secret of Deathstalk Tower',
  'Pathfinder #212: A Voice in the Blight',
  'Pathfinder #213: Thirst for Blood',
  'Pathfinder #214: The Broken Palace',
] as const
const RECONCILIATION_23_BESTIARY_PUBLICATIONS = [
  'Pathfinder Player Core',
  'Pathfinder Monster Core',
  'Pathfinder Monster Core 2',
  'Pathfinder Guns & Gears',
  'Pathfinder Beginner Box',
  'Pathfinder Adventure Path: Hellbreakers',
  'Pathfinder Society Scenario #5-11: The Hidden Current',
  'Pathfinder Society Scenario #5-13: Thick as Thieves',
  'Pathfinder Society Scenario #6-00: Salt of the Ocean',
  'Pathfinder Society Scenario #6-01: Intro to the Year of Immortal Influence',
  'Pathfinder Society Scenario #6-02: Rain Falls on the Mountain of Sea and Sky',
  'Pathfinder Society Scenario #6-03: Godsrain in a Godless Land',
  'Pathfinder Society Scenario #6-04: An Enkindled Carnival',
  'Pathfinder Society Scenario #6-05: Silver Bark, Golden Blades',
  'Pathfinder Society Scenario #6-06: Rotten Apples',
  'Pathfinder Society Scenario #6-07: A God Falls Where Magic Fails',
  'Pathfinder Society Scenario #6-08: Upon Wheels and Rime',
  'Pathfinder Society Scenario #6-09: The Power of Legends',
  'Pathfinder Society Scenario #6-10: Once in Whispers',
  'Pathfinder Society Scenario #6-11: The Godsrain and the Dragon',
  'Pathfinder Society Scenario #6-12: The Burning of Greensteeples',
  'Pathfinder Society Scenario #6-13: All That Glitters',
  'Pathfinder Society Scenario #6-14: Twice in Steel',
  'Pathfinder Society Scenario #6-15: Lost and Forgotten',
  'Pathfinder Society Scenario #6-16: The Heart of the City',
  'Pathfinder Society Scenario #6-17: The Devil in the Details',
  'Pathfinder Society Scenario #6-18: Symposium on a Fallen God',
  'Pathfinder Society Scenario #6-19: What Walks Again',
  'Pathfinder Society Scenario #6-20: The Overthrow of Ambition',
  'Pathfinder Society Scenario #6-99: Under the Eye of the Mantis',
  'Pathfinder Society Quest #20: The Dacilane Academy\'s Show Must Go On',
  'Pathfinder Society Quest #21: Infernal Infiltration',
  'Pathfinder Society Quest #22: Friends in Need',
  'Pathfinder Society Quest #23: Lacking Respect',
  'Pathfinder Society Quest #24: Tanuki Trouble',
  'Pathfinder Society Quest #25: The Greengold Dilemma',
  'Pathfinder Society Quest #27: Within the Glacier',
  'Pathfinder Society Scenario #7-01: Intro to the Year of Battle\'s Spark: Enough is Enough',
  'Pathfinder Society Scenario #7-02: Shipyard Sabotage',
  'Pathfinder Society Scenario #7-03: A Foot in the Door',
] as const
const LEGACY_23_SPELL_PUBLICATIONS = [
  'Pathfinder Secrets of Magic',
  'Pathfinder Lost Omens World Guide',
  'Pathfinder Lost Omens Gods & Magic',
  'Pathfinder Lost Omens Legends',
  'Pathfinder Lost Omens Pathfinder Society Guide',
  'Pathfinder Lost Omens Knights of Lastwall',
  'Pathfinder Lost Omens Monsters of Myth',
  'Pathfinder Lost Omens Impossible Lands',
  'Pathfinder Lost Omens Firebrands',
  'Pathfinder Lost Omens Highhelm',
  'Pathfinder Adventure: Threshold of Knowledge',
  'Pathfinder Adventure: Malevolence',
  'Pathfinder Kingmaker',
  'Pathfinder Abomination Vaults Hardcover Compilation',
  'Pathfinder Adventure: The Enmity Cycle',
  'Pathfinder #147: Tomorrow Must Burn',
  'Pathfinder #151: The Show Must Go On',
  'Pathfinder #152: Legacy of the Lost God',
  'Pathfinder #153: Life\'s Long Shadows',
  'Pathfinder #154: Siege of the Dinosaurs',
  'Pathfinder #155: Lord of the Black Sands',
  'Pathfinder #156: The Apocalypse Prophet',
  'Pathfinder #158: Sixty Feet Under',
  'Pathfinder #160: Assault on Hunting Lodge Seven',
  'Pathfinder #162: Ruins of the Radiant Siege',
  'Pathfinder #163: Ruins of Gauntlight',
  'Pathfinder #164: Hands of the Devil',
  'Pathfinder #165: Eyes of Empty Death',
  'Pathfinder #166: Despair on Danger Island',
  'Pathfinder #169: Kindled Magic',
  'Pathfinder #171: Hurricane\'s Howl',
  'Pathfinder #172: Secrets of the Temple-City',
  'Pathfinder #173: Doorway to the Red Star',
  'Pathfinder #175: Broken Tusk Moon',
  'Pathfinder #176: Lost Mammoth Valley',
  'Pathfinder #177: Burning Tundra',
  'Pathfinder #181: Zombie Feast',
  'Pathfinder #182: Graveclaw',
  'Pathfinder #183: Field of Maidens',
  'Pathfinder #184: The Ghouls Hunger',
  'Pathfinder #185: A Taste of Ashes',
  'Pathfinder #186: Ghost King\'s Rage',
  'Pathfinder #194: Cult of the Cave Worm',
  'Pathfinder #195: Heavy is the Crown',
  'Pathfinder Wake the Dead #1',
  'Pathfinder Wake the Dead #3',
  'Pathfinder Wake the Dead #4',
] as const
const RECONCILIATION_23_ITEM_PUBLICATIONS = [
  'Pathfinder Monster Core',
  'Pathfinder Monster Core 2',
  'Pathfinder Beginner Box',
  'Pathfinder #214: The Broken Palace',
  'Pathfinder #215: To Blot Out the Sun',
  'Pathfinder #216: The Acropolis Pyre',
  'Pathfinder #217: Death Sails a Wine-Dark Sea',
  'Pathfinder #218: Titanbane',
  'Pathfinder #219: Lord of the Trinity Star',
  'Pathfinder #220: Crypt of Runes',
  'Pathfinder #221: Into the Apocalypse Archive',
  'Pathfinder Adventure Path: Bastion of Blasphemies',
  'Pathfinder Adventure Path: Hell\'s Destiny',
  'Pathfinder Adventure Path: Hellbreakers',
  'Pathfinder Society Scenario #6-05: Silver Bark, Golden Blades',
] as const
const RECONCILIATION_24_BESTIARY_PUBLICATIONS = [
  'Pathfinder Society Scenario #7-03: A Foot in the Door',
  'Pathfinder Society Scenario #7-04: Sulfuric Negotiations',
  'Pathfinder Society Scenario #7-05: Battle of the Thorns',
  'Pathfinder Society Scenario #7-06: Brastlewark at War Part 1: The Gnome Defection',
  'Pathfinder Society Scenario #7-07: Draconic Folly',
  'Pathfinder Society Scenario #7-08: The Haunted Corridor',
  'Pathfinder Society Scenario #7-09: The Chitterwood Walks, Part 1: Scrambling the Tribes',
  'Pathfinder Society Scenario #7-10: Shattered Blades',
  'Pathfinder Society Scenario #7-11: The Darkness Within',
  'Pathfinder Society Scenario #7-12: The Chitterwood Walks, Part 2: The Battle of Logas',
  'Pathfinder Society Scenario #7-13: Ancient Beyond Imagining',
  'Pathfinder Society Scenario 7-14: Brastlewark at War, Part 2: The Gnome Liberation',
  'Pathfinder Society Scenario #7-15: Within Antiquated Halls',
  'Pathfinder Society Scenario #7-16: A Star\'s Journey',
  'Pathfinder Society Scenario #7-19: The Lost Legacy',
  'Pathfinder Society Scenario #7-20: The Strings of Hell',
  'Pathfinder Society Scenario #7-22: The Handmaiden\'s Gaze',
  'Paizo Blog: Foolish Housekeeping and Other Articles',
  'Paizo Blog: It\'s Foolish To Go Alone',
] as const
const CORE_FOCUS_24_SPELL_PUBLICATIONS = [
  'Pathfinder Player Core',
  'Pathfinder Player Core 2',
] as const
const LEGACY_24_ITEM_PUBLICATIONS = [
  'Pathfinder Core Rulebook',
  'Pathfinder Advanced Player\'s Guide',
  'Pathfinder Secrets of Magic',
  'Pathfinder Gamemastery Guide',
  'Pathfinder Bestiary',
  'Pathfinder Bestiary 2',
  'Pathfinder Book of the Dead',
  'Pathfinder Dark Archive',
  'Pathfinder Treasure Vault',
  'Pathfinder Treasure Vault (Remastered)',
  'Pathfinder Lost Omens World Guide',
  'Pathfinder Lost Omens Character Guide',
] as const
const LEGACY_25_BESTIARY_PUBLICATIONS = [
  'Pathfinder Bestiary',
  'Pathfinder Bestiary 2',
  'Pathfinder Bestiary 3',
] as const
const REMASTER_FOCUS_25_SPELL_PUBLICATIONS = [
  'Pathfinder Player Core 2',
  'Pathfinder Rage of Elements',
  'Pathfinder Howl of the Wild',
  'Pathfinder War of Immortals',
  'Pathfinder Battlecry!',
  'Pathfinder Dark Archive (Remastered)',
  'Pathfinder Lost Omens Tian Xia Character Guide',
  'Pathfinder Lost Omens Divine Mysteries',
  'Pathfinder Lost Omens Rival Academies',
  'Pathfinder Lost Omens Shining Kingdoms',
  'Pathfinder Adventure: Prey for Death',
  'Pathfinder #202: Severed at the Root',
  'Pathfinder #215: To Blot Out the Sun',
] as const
const LEGACY_25_ITEM_PUBLICATIONS = [
  'Pathfinder Lost Omens Character Guide',
  'Pathfinder Lost Omens Gods & Magic',
  'Pathfinder Lost Omens Legends',
  'Pathfinder Lost Omens Pathfinder Society Guide',
  'Pathfinder Lost Omens Ancestry Guide',
  'Pathfinder Lost Omens The Mwangi Expanse',
  'Pathfinder Lost Omens The Grand Bazaar',
] as const
const LEGACY_26_BESTIARY_PUBLICATIONS = [
  'Pathfinder Bestiary',
  'Pathfinder Bestiary 2',
  'Pathfinder Core Rulebook',
  'Pathfinder Gamemastery Guide',
  'Pathfinder Bestiary 3',
  'Pathfinder Book of the Dead',
  'Pathfinder Dark Archive',
  'Pathfinder Lost Omens Character Guide',
  'Pathfinder Lost Omens The Mwangi Expanse',
  'Pathfinder Lost Omens The Grand Bazaar',
  'Pathfinder Lost Omens Monsters of Myth',
  'Pathfinder Lost Omens Travel Guide',
  'Pathfinder Lost Omens Impossible Lands',
  'Pathfinder Lost Omens Highhelm',
  'Pathfinder Lost Omens Absalom, City of Lost Omens',
  'Pathfinder #145: Hellknight Hill',
  'Pathfinder #146: Cult of Cinders',
  'Pathfinder #147: Tomorrow Must Burn',
  'Pathfinder #148: Fires of the Haunted City',
] as const
const REMASTER_FOCUS_26_SPELL_PUBLICATIONS = [
  'Pathfinder #216: The Acropolis Pyre',
  'Pathfinder Adventure Path: Hell\'s Destiny',
] as const
const LEGACY_26_ITEM_PUBLICATIONS = [
  'Pathfinder Lost Omens The Grand Bazaar',
  'Pathfinder Lost Omens Monsters of Myth',
  'Pathfinder Lost Omens Knights of Lastwall',
  'Pathfinder Lost Omens Travel Guide',
  'Pathfinder Lost Omens Impossible Lands',
  'Pathfinder Lost Omens Firebrands',
  'Pathfinder Lost Omens Highhelm',
  'Pathfinder Lost Omens Absalom, City of Lost Omens',
  'Pathfinder #145: Hellknight Hill',
  'Pathfinder #146: Cult of Cinders',
  'Pathfinder #147: Tomorrow Must Burn',
  'Pathfinder #148: Fires of the Haunted City',
  'Pathfinder #149: Against the Scarlet Triad',
  'Pathfinder #150: Broken Promises',
  'Pathfinder #151: The Show Must Go On',
  'Pathfinder #152: Legacy of the Lost God',
  'Pathfinder #153: Life\'s Long Shadows',
  'Pathfinder #154: Siege of the Dinosaurs',
  'Pathfinder #155: Lord of the Black Sands',
  'Pathfinder #156: The Apocalypse Prophet',
  'Pathfinder #157: Devil at the Dreaming Palace',
  'Pathfinder #158: Sixty Feet Under',
  'Pathfinder #159: All or Nothing',
  'Pathfinder #160: Assault on Hunting Lodge Seven',
] as const
const LEGACY_27_BESTIARY_PUBLICATIONS = [
  'Pathfinder #148: Fires of the Haunted City',
  'Pathfinder #149: Against the Scarlet Triad',
  'Pathfinder #150: Broken Promises',
  'Pathfinder #151: The Show Must Go On',
  'Pathfinder #152: Legacy of the Lost God',
  'Pathfinder #153: Life\'s Long Shadows',
  'Pathfinder #154: Siege of the Dinosaurs',
  'Pathfinder #155: Lord of the Black Sands',
  'Pathfinder #156: The Apocalypse Prophet',
  'Pathfinder #157: Devil at the Dreaming Palace',
  'Pathfinder #158: Sixty Feet Under',
  'Pathfinder #159: All or Nothing',
  'Pathfinder #160: Assault on Hunting Lodge Seven',
  'Pathfinder #161: Belly of the Black Whale',
  'Pathfinder #162: Ruins of the Radiant Siege',
] as const
const LEGACY_FOCUS_27_SPELL_PUBLICATIONS = [
  'Pathfinder Core Rulebook',
  'Pathfinder Advanced Player\'s Guide',
  'Pathfinder Secrets of Magic',
  'Pathfinder Book of the Dead',
  'Pathfinder Lost Omens World Guide',
  'Pathfinder Lost Omens Character Guide',
  'Pathfinder Lost Omens Gods & Magic',
  'Pathfinder Lost Omens Legends',
  'Pathfinder Lost Omens Pathfinder Society Guide',
  'Pathfinder Lost Omens Knights of Lastwall',
  'Pathfinder Lost Omens Impossible Lands',
  'Pathfinder #147: Tomorrow Must Burn',
  'Pathfinder #148: Fires of the Haunted City',
  'Pathfinder #150: Broken Promises',
  'Pathfinder #161: Belly of the Black Whale',
  'Pathfinder #166: Despair on Danger Island',
  'Pathfinder #168: King of the Mountain',
  'Pathfinder #169: Kindled Magic',
  'Pathfinder #182: Graveclaw',
  'Pathfinder #183: Field of Maidens',
  'Pathfinder #185: A Taste of Ashes',
  'Pathfinder #186: Ghost King\'s Rage',
  'Pathfinder Stolen Fate Player\'s Guide',
  'Pathfinder Wake the Dead #2',
] as const
const LEGACY_27_ITEM_PUBLICATIONS = [
  'Pathfinder #160: Assault on Hunting Lodge Seven',
  'Pathfinder #161: Belly of the Black Whale',
  'Pathfinder #162: Ruins of the Radiant Siege',
  'Pathfinder #163: Ruins of Gauntlight',
  'Pathfinder #164: Hands of the Devil',
  'Pathfinder #165: Eyes of Empty Death',
  'Pathfinder #166: Despair on Danger Island',
  'Pathfinder #167: Ready? Fight!',
  'Pathfinder #168: King of the Mountain',
  'Pathfinder #169: Kindled Magic',
  'Pathfinder #170: Spoken on the Song Wind',
  'Pathfinder #171: Hurricane\'s Howl',
  'Pathfinder #172: Secrets of the Temple-City',
  'Pathfinder #173: Doorway to the Red Star',
  'Pathfinder #174: Shadows of the Ancients',
  'Pathfinder #175: Broken Tusk Moon',
  'Pathfinder #176: Lost Mammoth Valley',
  'Pathfinder #177: Burning Tundra',
  'Pathfinder #178: Punks in a Powder Keg',
  'Pathfinder #179: Cradle of Quartz',
  'Pathfinder #180: The Smoking Gun',
  'Pathfinder #182: Graveclaw',
  'Pathfinder #183: Field of Maidens',
  'Pathfinder #184: The Ghouls Hunger',
  'Pathfinder #185: A Taste of Ashes',
  'Pathfinder #186: Ghost King\'s Rage',
  'Pathfinder #188: They Watched the Stars',
  'Pathfinder #190: The Choosing',
  'Pathfinder #191: The Destiny War',
  'Pathfinder #192: Worst of All Possible Worlds',
  'Pathfinder #193: Mantle of Gold',
  'Pathfinder #194: Cult of the Cave Worm',
  'Pathfinder #195: Heavy is the Crown',
  'Pathfinder #200: Seven Dooms for Sandpoint',
] as const
const LEGACY_28_BESTIARY_PUBLICATIONS = [
  'Pathfinder #162: Ruins of the Radiant Siege',
  'Pathfinder #163: Ruins of Gauntlight',
  'Pathfinder #164: Hands of the Devil',
  'Pathfinder #165: Eyes of Empty Death',
  'Pathfinder #166: Despair on Danger Island',
  'Pathfinder #167: Ready? Fight!',
  'Pathfinder #168: King of the Mountain',
  'Pathfinder #169: Kindled Magic',
  'Pathfinder #170: Spoken on the Song Wind',
  'Pathfinder #171: Hurricane\'s Howl',
  'Pathfinder #172: Secrets of the Temple-City',
  'Pathfinder #173: Doorway to the Red Star',
  'Pathfinder #174: Shadows of the Ancients',
] as const
const REMASTER_RITUAL_28_SPELL_PUBLICATIONS = [
  'Pathfinder Player Core',
  'Pathfinder Player Core 2',
  'Pathfinder Monster Core',
  'Pathfinder Monster Core 2',
  'Pathfinder Rage of Elements',
  'Pathfinder War of Immortals',
  'Pathfinder Battlecry!',
  'Pathfinder Dark Archive (Remastered)',
  'Pathfinder Lost Omens Tian Xia World Guide',
  'Pathfinder Lost Omens Tian Xia Character Guide',
  'Pathfinder Lost Omens Rival Academies',
  'Pathfinder Adventure Path: Gatewalkers',
  'Pathfinder Season of Ghosts Hardcover Compilation',
  'Pathfinder #201: Pactbreaker',
  'Pathfinder #202: Severed at the Root',
  'Pathfinder #205: Singer, Stalker, Skinsaw Man',
  'Pathfinder #209: Destroyer\'s Doom',
  'Pathfinder #212: A Voice in the Blight',
  'Pathfinder #216: The Acropolis Pyre',
  'Pathfinder #217: Death Sails a Wine-Dark Sea',
  'Pathfinder #218: Titanbane',
  'Pathfinder #219: Lord of the Trinity Star',
  'Pathfinder Adventure Path: Hellbreakers',
] as const
const LEGACY_28_ITEM_PUBLICATIONS = [
  'Pathfinder Adventure: The Fall of Plaguestone',
  'Pathfinder Adventure: Little Trouble in Big Absalom',
  'Pathfinder Adventure: The Slithering',
  'Pathfinder Adventure: Troubles in Otari',
  'Pathfinder Adventure: Malevolence',
  'Pathfinder Adventure: Night of the Gray Death',
  'Pathfinder Adventure: Shadows at Sundown',
  'Pathfinder Adventure: Crown of the Kobold King',
  'Pathfinder Adventure: Threshold of Knowledge',
  'Pathfinder Adventure: A Fistful of Flowers',
  'Pathfinder Adventure: A Few Flowers More',
  'Pathfinder Adventure: The Enmity Cycle',
  'Pathfinder Adventure: Rusthenge',
  'Pathfinder Abomination Vaults Hardcover Compilation',
  'Pathfinder Kingmaker',
  'Pathfinder One-Shot #2: Dinner at Lionlodge',
  'Pathfinder Special: Fumbus!',
  'Pathfinder Society Quest #5: The Dragon who Stole Evoking Day',
  'Pathfinder Society Scenario #1-03: Escaping the Grave',
  'Pathfinder Society Scenario #1-23: The Star-Crossed Court',
  'Pathfinder Society Scenario #1-24: Lightning Strikes, Stars Fall',
  'Pathfinder Society Scenario #4-11: Prisoners of the Electric Castle',
  'Pathfinder Wake the Dead #1',
  'Pathfinder Wake the Dead #5',
  'Pathfinder Blog',
  'Pathfinder Blog: April Fools',
  'Pathfinder Lost Omens High Seas',
] as const
const LEGACY_29_BESTIARY_PUBLICATIONS = [
  'Pathfinder #174: Shadows of the Ancients',
  'Pathfinder #175: Broken Tusk Moon',
  'Pathfinder #176: Lost Mammoth Valley',
  'Pathfinder #177: Burning Tundra',
  'Pathfinder #178: Punks in a Powder Keg',
  'Pathfinder #179: Cradle of Quartz',
  'Pathfinder #180: The Smoking Gun',
  'Pathfinder #181: Zombie Feast',
  'Pathfinder #182: Graveclaw',
  'Pathfinder #183: Field of Maidens',
  'Pathfinder #184: The Ghouls Hunger',
  'Pathfinder #185: A Taste of Ashes',
  'Pathfinder #186: Ghost King\'s Rage',
  'Pathfinder #190: The Choosing',
] as const
const LEGACY_RITUAL_29_SPELL_PUBLICATIONS = [
  'Pathfinder Secrets of Magic',
  'Pathfinder Bestiary 2',
  'Pathfinder Lost Omens Monsters of Myth',
  'Pathfinder Lost Omens Travel Guide',
  'Pathfinder Adventure: Malevolence',
  'Pathfinder Adventure: Night of the Gray Death',
  'Pathfinder Adventure: The Enmity Cycle',
  'Pathfinder Kingmaker',
  'Pathfinder Blog: The Waters of Stone Ring Pond',
  'Pathfinder #150: Broken Promises',
  'Pathfinder #154: Siege of the Dinosaurs',
  'Pathfinder #155: Lord of the Black Sands',
  'Pathfinder #158: Sixty Feet Under',
  'Pathfinder #161: Belly of the Black Whale',
  'Pathfinder #163: Ruins of Gauntlight',
  'Pathfinder #169: Kindled Magic',
  'Pathfinder #170: Spoken on the Song Wind',
  'Pathfinder #173: Doorway to the Red Star',
  'Pathfinder #177: Burning Tundra',
  'Pathfinder #184: The Ghouls Hunger',
  'Pathfinder #185: A Taste of Ashes',
  'Pathfinder #193: Mantle of Gold',
  'Pathfinder Society Scenario #2-22: Breaking the Storm: Excising Ruination',
  'Pathfinder Stolen Fate Player\'s Guide',
  'Pathfinder Wake the Dead #2',
] as const
const EXHAUSTED_29_ITEM_PUBLICATIONS = ['Pathfinder Lost Omens High Seas'] as const
const TERMINAL_30_BESTIARY_PUBLICATIONS = ['ALL_REMAINING_LEGACY_BESTIARY'] as const

const PROGRAMS: readonly Pathfinder2eContentProgramPlan[] = [
  {
    id: 'CORE_REMASTER',
    order: 1,
    title: 'Core Remaster',
    strategy: 'EXHAUSTIVE_ASCENDING',
    description: 'Conteúdo principal Remaster importado exaustivamente do menor nível ou Rank pendente.',
  },
  {
    id: 'NPC_CORE',
    order: 2,
    title: 'NPC Core',
    strategy: 'EXHAUSTIVE_ASCENDING',
    description: 'NPCs e conteúdos editoriais associados importados exaustivamente em ordem crescente.',
  },
  {
    id: 'RULEBOOKS',
    order: 3,
    title: 'Rulebooks adicionais',
    strategy: 'PUBLICATION_QUEUE',
    description: 'Livros de regras processados por ordem editorial.',
  },
  {
    id: 'LOST_OMENS',
    order: 4,
    title: 'Lost Omens',
    strategy: 'PUBLICATION_QUEUE',
    description: 'Publicações Lost Omens processadas individualmente e em ordem editorial.',
  },
  {
    id: 'STANDALONE_ADVENTURES',
    order: 5,
    title: 'Aventuras independentes',
    strategy: 'PUBLICATION_QUEUE',
    description: 'Aventuras independentes processadas por publicação.',
  },
  {
    id: 'ADVENTURE_PATHS',
    order: 6,
    title: 'Adventure Paths',
    strategy: 'SERIES_AND_VOLUME',
    description: 'Adventure Paths processados por série e volume.',
  },
  {
    id: 'PATHFINDER_SOCIETY',
    order: 7,
    title: 'Pathfinder Society',
    strategy: 'SEASON_AND_SCENARIO',
    description: 'Conteúdo processado por temporada e cenário.',
  },
  {
    id: 'LEGACY_OGL',
    order: 8,
    title: 'Legacy/OGL',
    strategy: 'PUBLICATION_QUEUE',
    description: 'Conteúdo legado processado por último e sem mistura silenciosa com Remaster.',
  },
]

function coreRound(
  id: string,
  order: number,
  title: string,
  bestiaryLevel: Readonly<{ min: number; max: number }>,
  spellRank: Readonly<{ min: number; max: number }>,
  itemLevel: Readonly<{ min: number; max: number }>,
): Pathfinder2eContentRound {
  return {
    id,
    order,
    kind: 'CONTENT',
    program: 'CORE_REMASTER',
    title,
    status: 'PLANNED',
    locales: ['en-US', 'pt-BR'],
    selection: {
      bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, level: bestiaryLevel, maxEntries: 3 },
      spells: { publications: CORE_PLAYER_PUBLICATIONS, rank: spellRank, maxEntries: 3 },
      items: { publications: CORE_PLAYER_PUBLICATIONS, level: itemLevel, maxEntries: 3 },
    },
    frozenEntryIds: { bestiary: [], spells: [], items: [] },
  }
}

const firstRound: Pathfinder2eContentRound = {
  ...coreRound(
    'pf2e-core-remaster-01',
    1,
    'Core Remaster — piloto de início de jogo',
    { min: -1, max: 2 },
    { min: 0, max: 1 },
    { min: 0, max: 1 },
  ),
  status: 'READY',
  frozenEntryIds: {
    bestiary: [
      'pf2e:bestiary:pathfinder-monster-core:goblin-warrior',
      'pf2e:bestiary:pathfinder-monster-core:skeleton-guard',
      'pf2e:bestiary:pathfinder-monster-core:wolf',
    ],
    spells: [
      'pf2e:spell:spells-srd:electric-arc',
      'pf2e:spell:spells-srd:force-barrage',
      'pf2e:spell:spells-srd:heal',
    ],
    items: [
      'pf2e:item:equipment-srd:dogslicer',
      'pf2e:item:equipment-srd:leather-armor',
      'pf2e:item:equipment-srd:shortbow',
    ],
  },
}

const secondRound: Pathfinder2eContentRound = {
  ...coreRound(
    'pf2e-core-remaster-02',
    2,
    'Core Remaster — piloto de estruturas adicionais',
    { min: 3, max: 4 },
    { min: 2, max: 2 },
    { min: 2, max: 4 },
  ),
  status: 'REVIEWING',
  frozenEntryIds: {
    bestiary: [
      'pf2e:bestiary:pathfinder-monster-core:animated-statue',
      'pf2e:bestiary:pathfinder-monster-core:dryad',
      'pf2e:bestiary:pathfinder-monster-core:griffon',
    ],
    spells: [
      'pf2e:spell:spells-srd:blazing-bolt',
      'pf2e:spell:spells-srd:dispel-magic',
      'pf2e:spell:spells-srd:invisibility',
    ],
    items: [
      'pf2e:item:equipment-srd:full-plate',
      'pf2e:item:equipment-srd:healers-toolkit-expanded',
      'pf2e:item:equipment-srd:spyglass-fine',
    ],
  },
}

const exhaustiveBacklogRound: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-01',
  order: 3,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 01',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 50 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 20 },
    items: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 50 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IDS,
}

const exhaustiveBacklogRound02: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-02',
  order: 4,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 02',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_IDS,
}

const exhaustiveBacklogRound03: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-03',
  order: 5,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 03',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_IDS,
}

const exhaustiveBacklogRound04: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-04',
  order: 6,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 04',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IDS,
}

const exhaustiveBacklogRound05: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-05',
  order: 7,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 05',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_IDS,
}

const exhaustiveBacklogRound06: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-06',
  order: 8,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 06',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IDS,
}

const exhaustiveBacklogRound07: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-07',
  order: 9,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 07',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_2_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 18 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IDS,
}

const exhaustiveBacklogRound08: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-08',
  order: 10,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 08',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_2_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_08_IDS,
}

const exhaustiveBacklogRound09: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-09',
  order: 11,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 09',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_2_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_09_IDS,
}

const exhaustiveBacklogRound10: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-10',
  order: 12,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 10',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_2_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_10_IDS,
}

const exhaustiveBacklogRound11: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-11',
  order: 13,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — cobertura exaustiva 11 (hazards)',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: CORE_BESTIARY_2_AND_GM_PUBLICATIONS, maxEntries: 78 },
    spells: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 40 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_IDS,
}

const exhaustiveBacklogRound12: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-12',
  order: 14,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — transição para NPC Core 12',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: NPC_CORE_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_PLAYER_2_PUBLICATIONS, maxEntries: 4 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_IDS,
}

const exhaustiveBacklogRound13: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-13',
  order: 15,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — transição para NPC Core 13',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: NPC_CORE_PUBLICATIONS, maxEntries: 100 },
    spells: { publications: CORE_GM_PUBLICATIONS, maxEntries: 1 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 100 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_IDS,
}

const exhaustiveBacklogRound14: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-backlog-14',
  order: 16,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — conclusão e transição NPC Core 14',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: NPC_CORE_PUBLICATIONS, maxEntries: 71 },
    spells: { publications: NPC_CORE_PUBLICATIONS, maxEntries: 4 },
    items: { publications: CORE_GM_PUBLICATIONS, maxEntries: 57 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_IDS,
}

const npcCoreBacklogRound15: Pathfinder2eContentRound = {
  id: 'pf2e-npc-core-backlog-15',
  order: 17,
  kind: 'CONTENT',
  program: 'NPC_CORE',
  title: 'NPC Core — conclusão e transição para Rulebooks 15',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: RAGE_OF_ELEMENTS_PUBLICATIONS, maxEntries: 81 },
    spells: { publications: RAGE_OF_ELEMENTS_PUBLICATIONS, maxEntries: 40 },
    items: { publications: NPC_CORE_PUBLICATIONS, maxEntries: 11 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_15_IDS,
}

const rulebooksBacklogRound16: Pathfinder2eContentRound = {
  id: 'pf2e-rulebooks-backlog-16',
  order: 18,
  kind: 'CONTENT',
  program: 'RULEBOOKS',
  title: 'Rulebooks — Howl of the Wild e conclusão de Rage of Elements 16',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: HOWL_OF_THE_WILD_PUBLICATIONS, maxEntries: 76 },
    spells: { publications: RAGE_OF_ELEMENTS_PUBLICATIONS, maxEntries: 81 },
    items: { publications: RAGE_OF_ELEMENTS_PUBLICATIONS, maxEntries: 150 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_16_IDS,
}

const rulebooksBacklogRound17: Pathfinder2eContentRound = {
  id: 'pf2e-rulebooks-backlog-17',
  order: 19,
  kind: 'CONTENT',
  program: 'RULEBOOKS',
  title: 'Rulebooks — Howl of the Wild, War of Immortals e Battlecry! 17',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: WAR_OF_IMMORTALS_AND_BATTLECRY_PUBLICATIONS, maxEntries: 71 },
    spells: { publications: HOWL_WAR_AND_BATTLECRY_PUBLICATIONS, maxEntries: 56 },
    items: { publications: HOWL_WAR_AND_BATTLECRY_PUBLICATIONS, maxEntries: 386 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_17_IDS,
}

const rulebooksBacklogRound18: Pathfinder2eContentRound = {
  id: 'pf2e-rulebooks-backlog-18',
  order: 20,
  kind: 'CONTENT',
  program: 'RULEBOOKS',
  title: 'Rulebooks — Guns & Gears, Dark Archive e Treasure Vault 18',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: DARK_ARCHIVE_PUBLICATIONS, maxEntries: 26 },
    spells: { publications: DARK_ARCHIVE_AND_TREASURE_VAULT_PUBLICATIONS, maxEntries: 32 },
    items: { publications: GUNS_DARK_ARCHIVE_AND_TREASURE_VAULT_PUBLICATIONS, maxEntries: 400 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_18_IDS,
}

const rulebooksBacklogRound19: Pathfinder2eContentRound = {
  id: 'pf2e-rulebooks-backlog-19',
  order: 21,
  kind: 'CONTENT',
  program: 'RULEBOOKS',
  title: 'Rulebooks — transição de Bestiário e Spells para Lost Omens 19',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: LOST_OMENS_CREATURE_PUBLICATIONS, maxEntries: 291 },
    spells: { publications: LOST_OMENS_SPELL_PUBLICATIONS, maxEntries: 93 },
    items: { publications: TREASURE_VAULT_PUBLICATIONS, maxEntries: 400 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_19_IDS,
}

const rulebooksBacklogRound20: Pathfinder2eContentRound = {
  id: 'pf2e-rulebooks-backlog-20',
  order: 22,
  kind: 'CONTENT',
  program: 'RULEBOOKS',
  title: 'Rulebooks — transição para aventuras independentes e Adventure Paths 20',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: {
      publications: STANDALONE_AND_ADVENTURE_PATH_CREATURE_PUBLICATIONS,
      maxEntries: 400,
    },
    spells: {
      publications: STANDALONE_AND_ADVENTURE_PATH_SPELL_PUBLICATIONS,
      maxEntries: 20,
    },
    items: { publications: TREASURE_VAULT_PUBLICATIONS, maxEntries: 400 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_20_IDS,
}

const rulebooksBacklogRound21: Pathfinder2eContentRound = {
  id: 'pf2e-rulebooks-backlog-21',
  order: 23,
  kind: 'CONTENT',
  program: 'RULEBOOKS',
  title: 'Rulebooks — conclusão de Treasure Vault e avanço dos Adventure Paths 21',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: ADVENTURE_PATH_21_CREATURE_PUBLICATIONS, maxEntries: 400 },
    spells: { publications: ADVENTURE_PATH_21_SPELL_PUBLICATIONS, maxEntries: 20 },
    items: { publications: RULEBOOK_21_ITEM_PUBLICATIONS, maxEntries: 400 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_21_IDS,
}

const lostOmensBacklogRound22: Pathfinder2eContentRound = {
  id: 'pf2e-lost-omens-backlog-22',
  order: 24,
  kind: 'CONTENT',
  program: 'LOST_OMENS',
  title: 'Lost Omens — transição independente de Spells para Legacy/OGL 22',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: ADVENTURE_PATH_22_CREATURE_PUBLICATIONS, maxEntries: 400 },
    spells: { publications: LEGACY_RULEBOOK_22_SPELL_PUBLICATIONS, maxEntries: 200 },
    items: { publications: LOST_OMENS_AND_ADVENTURE_22_ITEM_PUBLICATIONS, maxEntries: 400 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_22_IDS,
}

const coreRemasterReconciliationRound23: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-reconciliation-23',
  order: 25,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — reconciliação de packs técnicos e esgotamento Legacy de Spells 23',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: RECONCILIATION_23_BESTIARY_PUBLICATIONS, maxEntries: 400 },
    spells: { publications: LEGACY_23_SPELL_PUBLICATIONS, maxEntries: 200 },
    items: { publications: RECONCILIATION_23_ITEM_PUBLICATIONS, maxEntries: 400 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_IDS,
}

const coreRemasterReconciliationRound24: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-reconciliation-24',
  order: 26,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — conclusão do Bestiário Remaster e expansão para focus spells 24',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: RECONCILIATION_24_BESTIARY_PUBLICATIONS, maxEntries: 400 },
    spells: { publications: CORE_FOCUS_24_SPELL_PUBLICATIONS, maxEntries: 200 },
    items: { publications: LEGACY_24_ITEM_PUBLICATIONS, maxEntries: 400 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_IDS,
}

const coreRemasterReconciliationRound25: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-reconciliation-25',
  order: 27,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — focus spells finais e avanço Legacy/OGL 25',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: LEGACY_25_BESTIARY_PUBLICATIONS, maxEntries: 400 },
    spells: { publications: REMASTER_FOCUS_25_SPELL_PUBLICATIONS, maxEntries: 200 },
    items: { publications: LEGACY_25_ITEM_PUBLICATIONS, maxEntries: 400 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_IDS,
}

const coreRemasterReconciliationRound26: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-reconciliation-26',
  order: 28,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — conclusão de focus Remaster e expansão Legacy/OGL 26',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: LEGACY_26_BESTIARY_PUBLICATIONS, maxEntries: 400 },
    spells: { publications: REMASTER_FOCUS_26_SPELL_PUBLICATIONS, maxEntries: 3 },
    items: { publications: LEGACY_26_ITEM_PUBLICATIONS, maxEntries: 400 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_IDS,
}

const legacyOglRound27: Pathfinder2eContentRound = {
  id: 'pf2e-legacy-ogl-exhaustive-27',
  order: 29,
  kind: 'CONTENT',
  program: 'LEGACY_OGL',
  title: 'Legacy/OGL — Adventure Paths e conclusão de focus spells 27',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: LEGACY_27_BESTIARY_PUBLICATIONS, maxEntries: 400 },
    spells: { publications: LEGACY_FOCUS_27_SPELL_PUBLICATIONS, maxEntries: 105 },
    items: { publications: LEGACY_27_ITEM_PUBLICATIONS, maxEntries: 364 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_27_IDS,
}

const coreRemasterReconciliationRound28: Pathfinder2eContentRound = {
  id: 'pf2e-core-remaster-reconciliation-28',
  order: 30,
  kind: 'CONTENT',
  program: 'CORE_REMASTER',
  title: 'Core Remaster — conclusão de rituals Remaster e filas Legacy/OGL 28',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: LEGACY_28_BESTIARY_PUBLICATIONS, maxEntries: 400 },
    spells: { publications: REMASTER_RITUAL_28_SPELL_PUBLICATIONS, maxEntries: 103 },
    items: { publications: LEGACY_28_ITEM_PUBLICATIONS, maxEntries: 155 },
  },
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_28_IDS,
}

const legacyOglRound29: Pathfinder2eContentRound = {
  id: 'pf2e-legacy-ogl-exhaustive-29',
  order: 31,
  kind: 'CONTENT',
  program: 'LEGACY_OGL',
  title: 'Legacy/OGL — conclusão de rituals e Adventure Paths 29',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: LEGACY_29_BESTIARY_PUBLICATIONS, maxEntries: 400 },
    spells: { publications: LEGACY_RITUAL_29_SPELL_PUBLICATIONS, maxEntries: 47 },
    items: { publications: EXHAUSTED_29_ITEM_PUBLICATIONS, maxEntries: 1 },
  },
  exhaustedDomains: ['ITEM'],
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_29_IDS,
}

const legacyOglTerminalReconciliationRound30: Pathfinder2eContentRound = {
  id: 'pf2e-legacy-ogl-terminal-reconciliation-30',
  order: 32,
  kind: 'CONTENT',
  program: 'LEGACY_OGL',
  title: 'Legacy/OGL — reconciliação terminal do Bestiário 30',
  status: 'REVIEWING',
  locales: ['en-US', 'pt-BR'],
  selection: {
    bestiary: { publications: TERMINAL_30_BESTIARY_PUBLICATIONS, maxEntries: 2_070 },
    spells: { publications: ['Pathfinder Wake the Dead #2'], maxEntries: 1 },
    items: { publications: ['Pathfinder Lost Omens High Seas'], maxEntries: 1 },
  },
  exhaustedDomains: ['SPELL', 'ITEM'],
  terminalReconciliation: true,
  frozenEntryIds: PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_30_IDS,
}

const ROUNDS: readonly Pathfinder2eContentRound[] = [
  firstRound,
  secondRound,
  exhaustiveBacklogRound,
  exhaustiveBacklogRound02,
  exhaustiveBacklogRound03,
  exhaustiveBacklogRound04,
  exhaustiveBacklogRound05,
  exhaustiveBacklogRound06,
  exhaustiveBacklogRound07,
  exhaustiveBacklogRound08,
  exhaustiveBacklogRound09,
  exhaustiveBacklogRound10,
  exhaustiveBacklogRound11,
  exhaustiveBacklogRound12,
  exhaustiveBacklogRound13,
  exhaustiveBacklogRound14,
  npcCoreBacklogRound15,
  rulebooksBacklogRound16,
  rulebooksBacklogRound17,
  rulebooksBacklogRound18,
  rulebooksBacklogRound19,
  rulebooksBacklogRound20,
  rulebooksBacklogRound21,
  lostOmensBacklogRound22,
  coreRemasterReconciliationRound23,
  coreRemasterReconciliationRound24,
  coreRemasterReconciliationRound25,
  coreRemasterReconciliationRound26,
  legacyOglRound27,
  coreRemasterReconciliationRound28,
  legacyOglRound29,
  legacyOglTerminalReconciliationRound30,
]

export const PATHFINDER_2E_CONTENT_ROADMAP: Pathfinder2eContentRoadmap = {
  schemaVersion: 1,
  baseline: {
    sourceBranch: 'development',
    bestiary: 5_492,
    spells: 1_802,
    items: 5_217,
  },
  roundLimits: {
    bestiary: 400,
    spells: 200,
    items: 400,
  },
  programs: PROGRAMS,
  rounds: ROUNDS,
}

function duplicatedNumbers(values: readonly number[]): number[] {
  return values.filter((value, index) => values.indexOf(value) !== index)
}

function duplicatedStrings(values: readonly string[]): string[] {
  return values.filter((value, index) => values.indexOf(value) !== index)
}

export function validatePathfinder2eContentRoadmap(
  roadmap: Pathfinder2eContentRoadmap = PATHFINDER_2E_CONTENT_ROADMAP,
): Pathfinder2eRoadmapValidation {
  const errors: string[] = []
  const roundIds = roadmap.rounds.map((round) => round.id)
  const roundOrders = roadmap.rounds.map((round) => round.order)
  const programOrders = roadmap.programs.map((program) => program.order)

  for (const duplicate of new Set(duplicatedStrings(roundIds))) errors.push(`duplicate-round-id:${duplicate}`)
  for (const duplicate of new Set(duplicatedNumbers(roundOrders))) errors.push(`duplicate-round-order:${duplicate}`)
  for (const duplicate of new Set(duplicatedNumbers(programOrders))) errors.push(`duplicate-program-order:${duplicate}`)

  for (const round of roadmap.rounds) {
    if (!round.locales.includes('en-US')) errors.push(`${round.id}:missing-en-US`)
    if (!round.locales.includes('pt-BR')) errors.push(`${round.id}:missing-pt-BR`)

    const selections = [round.selection.bestiary, round.selection.spells, round.selection.items]
    if (selections.some((selection) => selection.maxEntries <= 0)) errors.push(`${round.id}:invalid-max-entries`)
    if (selections.some((selection) => selection.publications.length === 0)) errors.push(`${round.id}:missing-publications`)
    const exceedsRoundLimit = (
      round.selection.bestiary.maxEntries > roadmap.roundLimits.bestiary
      || round.selection.spells.maxEntries > roadmap.roundLimits.spells
      || round.selection.items.maxEntries > roadmap.roundLimits.items
    )
    if (exceedsRoundLimit && !round.terminalReconciliation) {
      errors.push(`${round.id}:selection-exceeds-round-limit`)
    }
    if (round.terminalReconciliation && !exceedsRoundLimit) {
      errors.push(`${round.id}:terminal-reconciliation-must-exceed-round-limit`)
    }

    const frozenCounts = {
      BESTIARY: round.frozenEntryIds.bestiary.length,
      SPELL: round.frozenEntryIds.spells.length,
      ITEM: round.frozenEntryIds.items.length,
    } as const
    const exhaustedDomains = new Set(round.exhaustedDomains ?? [])
    if (round.terminalReconciliation && exhaustedDomains.size !== 2) {
      errors.push(`${round.id}:terminal-reconciliation-requires-two-exhausted-domains`)
    }
    for (const duplicate of new Set(duplicatedStrings(round.exhaustedDomains ?? []))) {
      errors.push(`${round.id}:duplicate-exhausted-domain:${duplicate}`)
    }
    for (const domain of exhaustedDomains) {
      if (frozenCounts[domain] !== 0) {
        errors.push(`${round.id}:exhausted-domain-must-freeze-zero:${domain}`)
      }
    }
    if (
      round.status !== 'PLANNED'
      && Object.entries(frozenCounts).some(([domain, count]) => (
        count === 0 && !exhaustedDomains.has(domain as keyof typeof frozenCounts)
      ))
    ) {
      errors.push(`${round.id}:non-planned-round-must-freeze-all-domains`)
    }
  }

  return { valid: errors.length === 0, errors }
}

export function getNextPathfinder2eContentRound(
  roadmap: Pathfinder2eContentRoadmap = PATHFINDER_2E_CONTENT_ROADMAP,
): Pathfinder2eContentRound | null {
  return roadmap.rounds
    .slice()
    .sort((left, right) => left.order - right.order || left.id.localeCompare(right.id))
    .find((round) => round.status !== 'PUBLISHED') ?? null
}

export function selectNextPathfinder2eCoverageBatch(
  inventory: readonly Pathfinder2eCoverageInventoryEntry[],
  coveredContentIds: ReadonlySet<string>,
  maxEntries: number,
): Pathfinder2eCoverageInventoryEntry[] {
  if (!Number.isInteger(maxEntries) || maxEntries <= 0) return []

  return inventory
    .filter((entry) => !coveredContentIds.has(entry.contentId))
    .slice()
    .sort((left, right) => (
      left.value - right.value
      || left.sourcePack.localeCompare(right.sourcePack)
      || left.sourceId.localeCompare(right.sourceId)
      || left.contentId.localeCompare(right.contentId)
    ))
    .slice(0, maxEntries)
}
