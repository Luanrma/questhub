from __future__ import annotations

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def write(path: str, content: str) -> None:
    target = ROOT / path
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content.rstrip() + "\n", encoding="utf-8")


def replace(path: str, old: str, new: str) -> None:
    target = ROOT / path
    content = target.read_text(encoding="utf-8")
    if old not in content:
        raise RuntimeError(f"Expected text not found in {path}: {old[:80]!r}")
    target.write_text(content.replace(old, new), encoding="utf-8")


schema = (ROOT / "apps/api/prisma/schema.prisma").read_text(encoding="utf-8")
schema = re.sub(
    r"enum CampaignCharacterStatus \{.*?\}\n\nenum CampaignCharacterRole \{.*?\}",
    """enum CampaignMemberStatus {
  PENDING
  ACTIVE
  REJECTED
  LEFT
}

enum CampaignMemberRole {
  MASTER
  PLAYER
}""",
    schema,
    flags=re.S,
)

schema = schema.replace("  characters                      Character[]\n", "")
schema = schema.replace("  campaignLinks                   CampaignCharacter[]\n", "")
schema = schema.replace(
    "  createdCampaignCharacterSheets  CampaignCharacterSheet[] @relation(\"CampaignCharacterSheetCreator\")\n  assignedCampaignCharacterSheets CampaignCharacterSheet[] @relation(\"CampaignCharacterSheetAssignee\")\n",
    "  createdCampaignCharacterSheets CampaignCharacterSheet[] @relation(\"CampaignCharacterSheetCreator\")\n",
)
schema = schema.replace("  characters      CampaignCharacter[]\n", "")
schema = schema.replace("  characterSheets CampaignCharacterSheet[]\n", "")

actor_models = """model CampaignActor {
  id                 String   @id @default(cuid())
  campaignId         String
  controllerMemberId String?
  name               String
  avatarUrl          String?
  bio                String?
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt

  campaign         Campaign        @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  controllerMember CampaignMember? @relation(\"CampaignActorController\", fields: [controllerMemberId], references: [id], onDelete: SetNull)
  mainForMember    CampaignMember? @relation(\"CampaignMemberMainActor\")
  inventory        Inventory?
  characterSheet   CampaignCharacterSheet?
  token            CampaignToken?
  chatMessages     ChatMessage[]

  @@index([campaignId, createdAt])
  @@index([controllerMemberId])
}

model Inventory {
  id        String   @id @default(cuid())
  actorId   String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  actor   CampaignActor    @relation(fields: [actorId], references: [id], onDelete: Cascade)
  entries InventoryEntry[]
}

model InventoryEntry {
  id          String   @id @default(cuid())
  inventoryId String
  quantity    Int      @default(1)
  data        Json
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  inventory Inventory @relation(fields: [inventoryId], references: [id], onDelete: Cascade)

  @@index([inventoryId, createdAt])
}

"""
schema = re.sub(
    r"model CampaignActor \{.*?\n\}\n\nmodel Inventory \{.*?\n\}\n\nmodel InventoryEntry \{.*?\n\}\n\nmodel Character \{.*?\n\}\n\n//.*?\nmodel CharacterSheet \{.*?\n\}\n\n",
    actor_models,
    schema,
    flags=re.S,
)

sheet_model = """model CampaignCharacterSheet {
  id              String   @id @default(cuid())
  actorId         String   @unique
  createdByUserId String
  systemKey       String
  schemaVersion   Int      @default(1)
  data            Json
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  actor         CampaignActor @relation(fields: [actorId], references: [id], onDelete: Cascade)
  createdByUser User          @relation(\"CampaignCharacterSheetCreator\", fields: [createdByUserId], references: [id])

  @@index([systemKey])
  @@index([createdByUserId])
}
"""
schema = re.sub(r"model CampaignCharacterSheet \{.*?\n\}\n", sheet_model, schema, flags=re.S)

member_model = """model CampaignMember {
  id         String               @id @default(cuid())
  campaignId String
  userId     String
  actorId    String?              @unique
  role       CampaignMemberRole
  status     CampaignMemberStatus @default(PENDING)
  joinedAt   DateTime?
  leftAt     DateTime?
  createdAt  DateTime             @default(now())
  updatedAt  DateTime             @updatedAt

  campaign         Campaign        @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  user             User            @relation(fields: [userId], references: [id], onDelete: Cascade)
  actor            CampaignActor?  @relation(\"CampaignMemberMainActor\", fields: [actorId], references: [id], onDelete: SetNull)
  controlledActors CampaignActor[] @relation(\"CampaignActorController\")
  controlledTokens CampaignToken[] @relation(\"CampaignTokenController\")

  @@unique([campaignId, userId])
  @@index([campaignId])
  @@index([userId])
  @@index([status])
  @@index([role])
}
"""
schema = re.sub(
    r"model CampaignCharacter \{.*?\n\}\n\nmodel CampaignMember \{.*?\n\}\n",
    member_model,
    schema,
    flags=re.S,
)

chat_model = """model ChatMessage {
  id         String   @id @default(cuid())
  campaignId String
  actorId    String
  userId     String
  content    String
  createdAt  DateTime @default(now())

  campaign Campaign      @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  actor    CampaignActor @relation(fields: [actorId], references: [id], onDelete: Cascade)
  user     User          @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([campaignId, createdAt])
  @@index([actorId])
  @@index([userId])
}
"""
schema = re.sub(r"model ChatMessage \{.*?\n\}\n", chat_model, schema, flags=re.S)

schema = schema.replace("  characterId            String?  @unique\n", "  actorId                String?  @unique\n")
schema = schema.replace(
    "  character        Character?               @relation(fields: [characterId], references: [id], onDelete: SetNull)\n",
    "  actor            CampaignActor?           @relation(fields: [actorId], references: [id], onDelete: SetNull)\n",
)
schema = schema.replace("  characterSheet   CampaignCharacterSheet?\n", "")

write("apps/api/prisma/schema.prisma", schema)

migration = """-- Development-only reset: replace the pre-release Character model with campaign-scoped actors.
DROP TABLE IF EXISTS \"ChatMessage\" CASCADE;
DROP TABLE IF EXISTS \"CampaignCharacterSheet\" CASCADE;
DROP TABLE IF EXISTS \"CharacterSheet\" CASCADE;
DROP TABLE IF EXISTS \"CampaignCharacter\" CASCADE;
DROP TABLE IF EXISTS \"CampaignMember\" CASCADE;
DROP TABLE IF EXISTS \"Character\" CASCADE;

ALTER TABLE \"CampaignToken\" DROP COLUMN IF EXISTS \"characterId\";
ALTER TABLE \"CampaignToken\" ADD COLUMN IF NOT EXISTS \"actorId\" TEXT;

DROP TYPE IF EXISTS \"CampaignCharacterStatus\";
DROP TYPE IF EXISTS \"CampaignCharacterRole\";

CREATE TYPE \"CampaignMemberStatus\" AS ENUM ('PENDING', 'ACTIVE', 'REJECTED', 'LEFT');
CREATE TYPE \"CampaignMemberRole\" AS ENUM ('MASTER', 'PLAYER');

CREATE TABLE \"CampaignMember\" (
    \"id\" TEXT NOT NULL,
    \"campaignId\" TEXT NOT NULL,
    \"userId\" TEXT NOT NULL,
    \"actorId\" TEXT,
    \"role\" \"CampaignMemberRole\" NOT NULL,
    \"status\" \"CampaignMemberStatus\" NOT NULL DEFAULT 'PENDING',
    \"joinedAt\" TIMESTAMP(3),
    \"leftAt\" TIMESTAMP(3),
    \"createdAt\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    \"updatedAt\" TIMESTAMP(3) NOT NULL,
    CONSTRAINT \"CampaignMember_pkey\" PRIMARY KEY (\"id\")
);

CREATE TABLE \"CampaignActor\" (
    \"id\" TEXT NOT NULL,
    \"campaignId\" TEXT NOT NULL,
    \"controllerMemberId\" TEXT,
    \"name\" TEXT NOT NULL,
    \"avatarUrl\" TEXT,
    \"bio\" TEXT,
    \"createdAt\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    \"updatedAt\" TIMESTAMP(3) NOT NULL,
    CONSTRAINT \"CampaignActor_pkey\" PRIMARY KEY (\"id\")
);

CREATE TABLE \"Inventory\" (
    \"id\" TEXT NOT NULL,
    \"actorId\" TEXT NOT NULL,
    \"createdAt\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    \"updatedAt\" TIMESTAMP(3) NOT NULL,
    CONSTRAINT \"Inventory_pkey\" PRIMARY KEY (\"id\")
);

CREATE TABLE \"InventoryEntry\" (
    \"id\" TEXT NOT NULL,
    \"inventoryId\" TEXT NOT NULL,
    \"quantity\" INTEGER NOT NULL DEFAULT 1,
    \"data\" JSONB NOT NULL,
    \"createdAt\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    \"updatedAt\" TIMESTAMP(3) NOT NULL,
    CONSTRAINT \"InventoryEntry_pkey\" PRIMARY KEY (\"id\"),
    CONSTRAINT \"InventoryEntry_quantity_positive\" CHECK (\"quantity\" > 0)
);

CREATE TABLE \"CampaignCharacterSheet\" (
    \"id\" TEXT NOT NULL,
    \"actorId\" TEXT NOT NULL,
    \"createdByUserId\" TEXT NOT NULL,
    \"systemKey\" TEXT NOT NULL,
    \"schemaVersion\" INTEGER NOT NULL DEFAULT 1,
    \"data\" JSONB NOT NULL,
    \"createdAt\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    \"updatedAt\" TIMESTAMP(3) NOT NULL,
    CONSTRAINT \"CampaignCharacterSheet_pkey\" PRIMARY KEY (\"id\")
);

CREATE TABLE \"ChatMessage\" (
    \"id\" TEXT NOT NULL,
    \"campaignId\" TEXT NOT NULL,
    \"actorId\" TEXT NOT NULL,
    \"userId\" TEXT NOT NULL,
    \"content\" TEXT NOT NULL,
    \"createdAt\" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT \"ChatMessage_pkey\" PRIMARY KEY (\"id\")
);

CREATE UNIQUE INDEX \"CampaignMember_campaignId_userId_key\" ON \"CampaignMember\"(\"campaignId\", \"userId\");
CREATE UNIQUE INDEX \"CampaignMember_actorId_key\" ON \"CampaignMember\"(\"actorId\");
CREATE INDEX \"CampaignMember_campaignId_idx\" ON \"CampaignMember\"(\"campaignId\");
CREATE INDEX \"CampaignMember_userId_idx\" ON \"CampaignMember\"(\"userId\");
CREATE INDEX \"CampaignMember_status_idx\" ON \"CampaignMember\"(\"status\");
CREATE INDEX \"CampaignMember_role_idx\" ON \"CampaignMember\"(\"role\");
CREATE INDEX \"CampaignActor_campaignId_createdAt_idx\" ON \"CampaignActor\"(\"campaignId\", \"createdAt\");
CREATE INDEX \"CampaignActor_controllerMemberId_idx\" ON \"CampaignActor\"(\"controllerMemberId\");
CREATE UNIQUE INDEX \"Inventory_actorId_key\" ON \"Inventory\"(\"actorId\");
CREATE INDEX \"InventoryEntry_inventoryId_createdAt_idx\" ON \"InventoryEntry\"(\"inventoryId\", \"createdAt\");
CREATE UNIQUE INDEX \"CampaignCharacterSheet_actorId_key\" ON \"CampaignCharacterSheet\"(\"actorId\");
CREATE INDEX \"CampaignCharacterSheet_systemKey_idx\" ON \"CampaignCharacterSheet\"(\"systemKey\");
CREATE INDEX \"CampaignCharacterSheet_createdByUserId_idx\" ON \"CampaignCharacterSheet\"(\"createdByUserId\");
CREATE INDEX \"ChatMessage_campaignId_createdAt_idx\" ON \"ChatMessage\"(\"campaignId\", \"createdAt\");
CREATE INDEX \"ChatMessage_actorId_idx\" ON \"ChatMessage\"(\"actorId\");
CREATE INDEX \"ChatMessage_userId_idx\" ON \"ChatMessage\"(\"userId\");
CREATE UNIQUE INDEX \"CampaignToken_actorId_key\" ON \"CampaignToken\"(\"actorId\");

ALTER TABLE \"CampaignMember\" ADD CONSTRAINT \"CampaignMember_campaignId_fkey\" FOREIGN KEY (\"campaignId\") REFERENCES \"Campaign\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE \"CampaignMember\" ADD CONSTRAINT \"CampaignMember_userId_fkey\" FOREIGN KEY (\"userId\") REFERENCES \"User\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE \"CampaignActor\" ADD CONSTRAINT \"CampaignActor_campaignId_fkey\" FOREIGN KEY (\"campaignId\") REFERENCES \"Campaign\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE \"CampaignActor\" ADD CONSTRAINT \"CampaignActor_controllerMemberId_fkey\" FOREIGN KEY (\"controllerMemberId\") REFERENCES \"CampaignMember\"(\"id\") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE \"CampaignMember\" ADD CONSTRAINT \"CampaignMember_actorId_fkey\" FOREIGN KEY (\"actorId\") REFERENCES \"CampaignActor\"(\"id\") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE \"Inventory\" ADD CONSTRAINT \"Inventory_actorId_fkey\" FOREIGN KEY (\"actorId\") REFERENCES \"CampaignActor\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE \"InventoryEntry\" ADD CONSTRAINT \"InventoryEntry_inventoryId_fkey\" FOREIGN KEY (\"inventoryId\") REFERENCES \"Inventory\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE \"CampaignCharacterSheet\" ADD CONSTRAINT \"CampaignCharacterSheet_actorId_fkey\" FOREIGN KEY (\"actorId\") REFERENCES \"CampaignActor\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE \"CampaignCharacterSheet\" ADD CONSTRAINT \"CampaignCharacterSheet_createdByUserId_fkey\" FOREIGN KEY (\"createdByUserId\") REFERENCES \"User\"(\"id\") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE \"ChatMessage\" ADD CONSTRAINT \"ChatMessage_campaignId_fkey\" FOREIGN KEY (\"campaignId\") REFERENCES \"Campaign\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE \"ChatMessage\" ADD CONSTRAINT \"ChatMessage_actorId_fkey\" FOREIGN KEY (\"actorId\") REFERENCES \"CampaignActor\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE \"ChatMessage\" ADD CONSTRAINT \"ChatMessage_userId_fkey\" FOREIGN KEY (\"userId\") REFERENCES \"User\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE \"CampaignToken\" ADD CONSTRAINT \"CampaignToken_actorId_fkey\" FOREIGN KEY (\"actorId\") REFERENCES \"CampaignActor\"(\"id\") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE \"CampaignToken\" ADD CONSTRAINT \"CampaignToken_controllerMemberId_fkey\" FOREIGN KEY (\"controllerMemberId\") REFERENCES \"CampaignMember\"(\"id\") ON DELETE SET NULL ON UPDATE CASCADE;
"""
write("apps/api/prisma/migrations/20260727210000_campaign_actor_inventory/migration.sql", migration)

# Remove the global Character HTTP module and its isolated unit tests.
shutil.rmtree(ROOT / "apps/api/src/modules/characters", ignore_errors=True)
unit = (ROOT / "apps/api/src/unit.test.ts").read_text(encoding="utf-8")
unit = unit.replace("import './modules/characters/presenter.test'\n", "")
unit = unit.replace("import './modules/characters/validation.test'\n", "")
(ROOT / "apps/api/src/unit.test.ts").write_text(unit, encoding="utf-8")

server = (ROOT / "apps/api/src/server.ts").read_text(encoding="utf-8")
server = server.replace("import { registerCharacterRoutes } from './modules/characters/routes'\n", "")
server = server.replace("  registerCharacterRoutes(app)\n", "")
(ROOT / "apps/api/src/server.ts").write_text(server, encoding="utf-8")

# Mechanical vocabulary migration. Specific modules are refined below.
replacements = [
    ("CampaignCharacterStatus", "CampaignMemberStatus"),
    ("CampaignCharacterRole", "CampaignMemberRole"),
    ("campaignCharacter", "campaignMember"),
    ("characterId", "actorId"),
    ("CharacterId", "ActorId"),
    ("characterName", "actorName"),
    ("CharacterName", "ActorName"),
    ("characterRole", "actorRole"),
    ("CharacterRole", "ActorRole"),
    ("masterCharacter", "masterActor"),
    ("MasterCharacter", "MasterActor"),
    ("myCharacter", "myActor"),
    ("MyCharacter", "MyActor"),
    ("currentUserCharacter", "currentUserActor"),
    ("characterOwner", "actorOwner"),
    ("campaignLinks", "campaignMembers"),
]
for root in [ROOT / "apps/api/src", ROOT / "apps/web/src"]:
    for path in root.rglob("*"):
        if path.suffix not in {".ts", ".tsx"}:
            continue
        text = path.read_text(encoding="utf-8")
        for old, new in replacements:
            text = text.replace(old, new)
        text = re.sub(r"\bcharacters\b", "members", text)
        text = re.sub(r"\bcharacter\b", "actor", text)
        text = re.sub(r"\bCharacters\b", "Actors", text)
        text = re.sub(r"\bCharacter\b", "Actor", text)
        path.write_text(text, encoding="utf-8")

# The campaign member represents participation; DEAD and NPC are not membership states/roles.
for path in [ROOT / "apps/api/src", ROOT / "apps/web/src"]:
    for file in path.rglob("*.ts*"):
        text = file.read_text(encoding="utf-8")
        text = text.replace(" | 'NPC'", "")
        text = text.replace("'MASTER' | 'PLAYER' | 'NPC'", "'MASTER' | 'PLAYER'")
        text = text.replace(" | 'DEAD'", "")
        text = text.replace("'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT' | 'DEAD'", "'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT'")
        file.write_text(text, encoding="utf-8")

# Update the inventory documentation to make the aggregate boundaries explicit.
replace(
    ".ai/inventory/readme.md",
    "Cada `CampaignActor` possui no máximo um `Inventory`.",
    "Cada `CampaignActor` possui no máximo um `Inventory`. `Character`, `CharacterSheet` e `CampaignCharacter` não fazem parte do modelo: participação pertence a `CampaignMember`, enquanto entidades do mundo pertencem a `CampaignActor`.",
)
