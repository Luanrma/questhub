# Modulo: Criacao de Campanha (Specs & Contracts)

## 1. Responsabilidade
Criar registros de `Campaign` e seu vinculo inicial `CampaignCharacter` com role `MASTER`.

Este modulo nao cria participacao direta usuario-campanha. A campanha se torna acessivel ao usuario por meio do personagem mestre vinculado.

## 2. Modelo de Dominio

```prisma
enum CampaignJoinPolicy {
  PUBLIC
  PRIVATE
}

enum GameSystem {
  DND_5E
  PATHFINDER_2E
}

model Campaign {
  id              String             @id @default(cuid())
  title           String
  description     String?
  inviteCode      String             @unique
  system          GameSystem
  joinPolicy      CampaignJoinPolicy @default(PUBLIC)
  createdByUserId String
  createdAt       DateTime           @default(now())
  updatedAt       DateTime           @updatedAt
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

## 3. Contrato de Criacao

### Criar campanha com personagem mestre existente

```json
{
  "title": "Sombras de Absalom",
  "description": "Campanha semanal",
  "system": "PATHFINDER_2E",
  "joinPolicy": "PRIVATE",
  "masterCharacterId": "character_id"
}
```

### Criar campanha criando personagem mestre no fluxo

```json
{
  "title": "Vale dos Ecos",
  "system": "DND_5E",
  "joinPolicy": "PUBLIC",
  "masterCharacterName": "Arion"
}
```

## 4. Resposta Esperada

```json
{
  "id": "campaign_id",
  "title": "Sombras de Absalom",
  "description": "Campanha semanal",
  "inviteCode": "ABC12345",
  "system": "PATHFINDER_2E",
  "joinPolicy": "PRIVATE",
  "createdAt": "2026-06-21T00:00:00.000Z",
  "gmName": "Arion",
  "gmUserId": "user_id",
  "myRole": "MASTER",
  "myStatus": "ACTIVE",
  "myCharacterId": "character_id",
  "myCharacterName": "Arion",
  "isOnline": false
}
```

`gmName` e `gmUserId` podem ser mantidos na resposta como campos de compatibilidade de frontend, mas nao devem existir como colunas em `Campaign`.

## 5. Regras de Validacao
* `title` e obrigatorio.
* `system` e obrigatorio e deve ser `DND_5E` ou `PATHFINDER_2E`.
* `joinPolicy` deve ser `PUBLIC` ou `PRIVATE`; se omitido, usar `PUBLIC`.
* Deve existir `masterCharacterId` ou `masterCharacterName`.
* `masterCharacterId`, quando informado, deve pertencer ao usuario autenticado.
* `masterCharacterId` nao pode estar arquivado (`deletedAt` preenchido).
* `masterCharacterId` nao pode possuir `CampaignCharacter` existente.
* Personagem mestre com `system` diferente da campanha deve ser rejeitado.
* Personagem mestre sem `system` deve herdar `Campaign.system`.

## 6. Fluxo Transacional
1. Validar usuario autenticado.
2. Validar payload.
3. Gerar `inviteCode`.
4. Resolver personagem mestre:
   * buscar personagem existente por `masterCharacterId`; ou
   * criar novo `Character` com `masterCharacterName`.
5. Validar disponibilidade e compatibilidade do personagem.
6. Criar `Campaign`.
7. Criar `CampaignCharacter` com:
   * `role = MASTER`
   * `status = ACTIVE`
   * `joinedAt = now`
8. Retornar campanha no formato do dashboard.

## 7. Criterios de Aceitacao
* Nao cria campanha sem usuario autenticado.
* Nao cria campanha sem sistema.
* Nao cria campanha sem personagem mestre.
* Criar campanha e vinculo `MASTER` deve ser atomico.
* Falha no vinculo do mestre deve impedir criacao da campanha.
* Campanha criada deve aparecer no dashboard do usuario criador.
* Solicitacao pendente de campanha privada deve aparecer no dashboard do usuario solicitante.
* Entrar em campanha como `MASTER` nao deve ser bloqueado por status offline.
* A campanha passa a ficar online quando o personagem `MASTER` entra na presenca.
* O mestre deve receber evento realtime `campaign:join-requested` quando um personagem solicitar entrada em campanha privada.
* O mestre deve receber evento realtime `campaign:player-joined` quando um personagem entrar em campanha publica.
* Buscar e confirmar entrada/solicitacao por convite nao deve ser bloqueado por `isOnline = false`.
* `isOnline = false` bloqueia apenas abrir a mesa como jogador depois que o vinculo ja existe.

## 8. Navegacao do Modulo
* `/campaigns` e a home/index do modulo de campanhas.
* A home de campanhas deve conter as acoes `Criar campanha` e `Entrar em campanha`.
* A lista `Suas campanhas` pertence a `/campaigns`, nao a home inicial do sistema, e deve exibir vinculos `ACTIVE` e `PENDING` do usuario.
* `/campaigns/new` permanece dedicado ao formulario de criacao.
* `/campaigns/join` permanece dedicado ao fluxo de entrada por convite.
* Em `/campaigns/join`, o usuario informa o codigo e aciona `Procurar campanha`.
* A tela deve exibir a campanha encontrada em uma lista abaixo do codigo.
* A campanha encontrada deve mostrar botao `Entrar` quando `joinPolicy = PUBLIC` e `Solicitar entrada` quando `joinPolicy = PRIVATE`.
* O botao de confirmacao de entrada nao deve aparecer antes da campanha ser encontrada.
* O botao `Entrar` ou `Solicitar entrada` deve continuar habilitado quando a campanha encontrada estiver offline.

## 9. Busca e Entrada por Convite

### Buscar campanha por convite

```http
GET /api/campaigns/invite/:inviteCode
```

Resposta:

```json
{
  "id": "campaign_id",
  "title": "Sombras de Absalom",
  "description": "Campanha semanal",
  "inviteCode": "ABC12345",
  "system": "PATHFINDER_2E",
  "joinPolicy": "PRIVATE",
  "gmName": "Arion",
  "gmUserId": "user_id",
  "isOnline": true
}
```

Regras:
* Deve retornar `404` quando o codigo nao existir.
* Deve retornar dados suficientes para a tela escolher entre `Entrar` e `Solicitar entrada`.
* Nao cria `CampaignCharacter`; apenas consulta.
* `isOnline` e informativo nesta tela e nao deve bloquear a chamada de entrada/solicitacao.

### Eventos realtime

* `campaign:join-requested`: enviado ao mestre quando campanha privada cria `CampaignCharacter` `PENDING`.
* `campaign:player-joined`: enviado ao mestre quando campanha publica cria `CampaignCharacter` `ACTIVE`.
