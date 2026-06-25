# Chat module

Realtime campaign chat.

## Responsibilities

- List recent campaign messages.
- Persist new chat messages.
- Broadcast new messages to the campaign Socket.IO room.
- Authorize reads and writes through active `CampaignCharacter` records.

## Out of scope

- Private messages.
- Attachments.
- Dice commands.
- Edit/delete/moderation flows.
