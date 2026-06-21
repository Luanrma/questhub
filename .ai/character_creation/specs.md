# Modulo: Criacao de Personagem (Specs & Contracts)

## 1. Responsabilidade
Criar e gerenciar `Character` como entidade base do usuario e `CampaignCharacter` como vinculo permanente entre personagem e campanha.

Este modulo define identidade basica, disponibilidade, vinculo de campanha, papeis operacionais e status narrativo/operacional do personagem dentro da campanha. A ficha mecanica continua pertencendo ao modulo `character_sheet`.

## 2. Modelo de Dominio Alvo

```prisma
enum GameSystem {
  DND_5E
  PATHFINDER_2E
}

enum CampaignCharacterRole {
  MASTER
  PLAYER
  NPC
}

enum CampaignCharacterStatus {
  PENDING
  ACTIVE
  REJECTED
  LEFT
  DEAD
}

model Character {
  id        String   @id @default(cuid())
  userId    String
  name      String
  avatarUrl String?
  bio       String?
  system    GameSystem?
  sheet     Json?
  deletedAt DateTime?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model CampaignCharacter {
  id          String                  @id @default(cuid())
  campaignId  String
  characterId String                  @unique
  role        CampaignCharacterRole
  status      CampaignCharacterStatus @default(PENDING)
  joinedAt    DateTime?
  leftAt      DateTime?
  createdAt   DateTime                @default(now())
  updatedAt   DateTime                @updatedAt
}
```

## 3. Estados Derivados
* `AVAILABLE`: personagem sem `CampaignCharacter` e sem `deletedAt`.
* `ARCHIVED`: personagem com `deletedAt` preenchido e sem delete fisico.
* `IN_CAMPAIGN`: personagem com `CampaignCharacter`.

Nao existe tabela ou enum `CharacterStatus` no MVP.

## 4. Contratos de Entrada

### Criar personagem livre

```json
{
  "name": "Aragorn",
  "avatarUrl": "https://example.com/avatar.png",
  "bio": "Guardiao do norte."
}
```

Regras:
* `name` e obrigatorio e nao pode ser vazio.
* `avatarUrl` e opcional.
* `bio` e opcional e limitada a 2.000 caracteres.
* `system` e opcional e normalmente definido pelo modulo de ficha ou herdado da campanha.
* Nomes podem repetir.

### Criar campanha com personagem MASTER

```json
{
  "title": "Sombras de Absalom",
  "description": "Campanha semanal",
  "joinPolicy": "PRIVATE",
  "system": "PATHFINDER_2E",
  "masterCharacterId": "character_id"
}
```

Alternativamente, o fluxo pode aceitar dados para criar um novo personagem mestre no mesmo request.

Regras:
* A campanha exige `system`.
* O personagem mestre precisa estar `AVAILABLE`.
* O personagem mestre sem ficha pode herdar o sistema da campanha.
* O personagem mestre com ficha precisa ser compativel com o sistema da campanha.
* Ao concluir, cria `CampaignCharacter` com role `MASTER`, status `ACTIVE` e `joinedAt`.

### Entrar em campanha publica

```json
{
  "inviteCode": "ABC123",
  "characterId": "character_id"
}
```

Regras:
* Quem clica em entrar e o usuario autenticado.
* O vinculo criado e entre campanha e personagem.
* Campanha publica cria `CampaignCharacter` com role `PLAYER`, status `ACTIVE` e `joinedAt`.
* Personagem precisa estar `AVAILABLE`.

### Solicitar entrada em campanha privada

```json
{
  "inviteCode": "ABC123",
  "characterId": "character_id"
}
```

Regras:
* Campanha privada cria `CampaignCharacter` com role `PLAYER` e status `PENDING`.
* O mestre pode aprovar mudando para `ACTIVE` e preenchendo `joinedAt`.
* O mestre pode rejeitar mudando para `REJECTED`.
* Enquanto `PENDING`, o personagem ja possui `CampaignCharacter`; por regra de produto, ele nao pode ser usado em outra campanha.

### Criar NPC

```json
{
  "name": "Capitao da Guarda",
  "avatarUrl": "https://example.com/guard.png",
  "bio": "Lider da guarda local."
}
```

Regras:
* Apenas `MASTER` ativo da campanha pode criar NPC.
* NPC nasce dentro da campanha.
* Deve criar `Character` com `userId` do mestre/criador.
* Deve criar `CampaignCharacter` com role `NPC`, status `ACTIVE` e `joinedAt`.

## 5. Permissoes
* Usuario autenticado pode criar personagem livre para si.
* Dono pode editar nome, avatar e bio de personagem livre.
* Dono de personagem vinculado pode editar avatar e bio, mas nao nome.
* Mestre ativo pode editar nome, avatar e bio de personagens vinculados a sua campanha.
* Mestre ativo pode aprovar/rejeitar `CampaignCharacter` pendente da sua campanha.
* Mestre ativo pode marcar personagem vinculado como `LEFT` ou `DEAD`.
* Personagem vinculado nao deve ser deletado fisicamente pelo fluxo comum.
* Personagem livre pode ser arquivado (`deletedAt`) ou deletado definitivamente.

## 6. Compatibilidade de Sistema
* `Campaign.system` e obrigatorio.
* `Character.system` e opcional.
* `Character.sheet` e opcional.
* Se `Character.sheet` existir, `Character.system` deve existir.
* Ao vincular, personagem sem ficha pode receber `Character.system = Campaign.system`.
* Ao vincular, personagem com sistema diferente da campanha deve bloquear o fluxo.
* Em incompatibilidade, a UI deve oferecer apagar a ficha atual com alerta ou duplicar o personagem sem ficha.

## 7. Criterios de Aceitacao
* Criar personagem livre sem campanha deve ser permitido.
* Nao e possivel criar personagem sem usuario autenticado.
* Nao e possivel criar personagem com nome vazio.
* Nao e possivel salvar bio com mais de 2.000 caracteres.
* Nao e possivel vincular personagem arquivado.
* Nao e possivel vincular personagem que ja possui `CampaignCharacter`.
* Nao e possivel criar campanha sem personagem `MASTER`.
* Nao e possivel criar campanha sem sistema.
* Nao e possivel ter mais de um `MASTER` ativo na mesma campanha.
* `CampaignMember` nao deve ser usado pelo novo modelo.
* `Campaign.gmName` nao deve ser usado; o nome publico do mestre vem do `Character` vinculado como `MASTER`.
