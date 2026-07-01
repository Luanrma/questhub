# Modulo: Criacao de Personagem (Specs & Contracts)

## 1. Responsabilidade
Criar e gerenciar `Character` como entidade base do usuario e `CampaignCharacter` como vinculo permanente entre personagem e campanha.

Este modulo define identidade basica, disponibilidade, vinculo de campanha, papeis operacionais e status narrativo/operacional do personagem dentro da campanha. A ficha mecanica pertence ao ruleset correspondente em `game_systems`.

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
  "system": "PATHFINDER_2E",
  "bio": "Guardiao do norte."
}
```

Regras:
* `name` e obrigatorio e nao pode ser vazio.
* `avatarUrl` e opcional.
* `bio` e opcional, limitada a 2.000 caracteres e salva em `sheet.metadata.bio`.
* `system` e obrigatorio no fluxo novo de criacao e define o ruleset da ficha.
* No codigo atual, `system` aceita apenas `PATHFINDER_2E`.
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
* Dono pode editar nome, avatar e bio da ficha de personagem livre.
* Dono de personagem vinculado pode editar avatar e bio da ficha, mas nao nome.
* Mestre ativo pode editar nome, avatar e bio da ficha de personagens vinculados a sua campanha.
* Mestre ativo pode aprovar/rejeitar `CampaignCharacter` pendente da sua campanha.
* Mestre ativo pode marcar personagem vinculado como `LEFT` ou `DEAD`.
* Personagem vinculado nao deve ser deletado fisicamente pelo fluxo comum.
* Arquivar personagem livre (`deletedAt`) e deletar definitivamente sao comportamentos futuros; o codigo atual ainda nao possui endpoints ou UI para essas acoes.

## 6. Compatibilidade de Sistema
* `Campaign.system` e obrigatorio.
* `Character.system` e obrigatorio para personagens criados no fluxo novo.
* No codigo atual, personagens novos so podem ser criados com `PATHFINDER_2E`.
* `Character.sheet` e criada junto com o personagem no fluxo novo.
* Se `Character.sheet` existir, `Character.system` deve existir.
* Ao vincular, personagem sem ficha pode receber `Character.system = Campaign.system` e uma ficha padrao do ruleset em `game_systems`.
* Ao vincular, personagem com sistema diferente da campanha deve bloquear o fluxo.
* Em incompatibilidade, a UI deve oferecer apagar a ficha atual com alerta ou duplicar o personagem sem ficha.

## 7. Criterios de Aceitacao
* Criar personagem livre sem campanha deve ser permitido.
* Nao e possivel criar personagem sem usuario autenticado.
* Nao e possivel criar personagem com nome vazio.
* Nao e possivel salvar `sheet.metadata.bio` com mais de 2.000 caracteres.
* Nao e possivel vincular personagem arquivado quando o fluxo de arquivamento existir.
* Nao e possivel vincular personagem que ja possui `CampaignCharacter`.
* Nao e possivel criar campanha sem personagem `MASTER`.
* Nao e possivel criar campanha sem sistema.
* Nao e possivel ter mais de um `MASTER` ativo na mesma campanha.
* Nao e possivel ter mais de um `PLAYER` ativo para o mesmo `userId` na mesma campanha.
* Um novo `PLAYER` do mesmo usuario so pode ser vinculado ou aprovado quando o vinculo anterior estiver fora de `ACTIVE`.
* `NPC` nao participa da restricao de unicidade de `PLAYER`; companions e pets serao tratados em regra futura propria.
* `CampaignMember` nao deve ser usado pelo novo modelo.
* `Campaign.gmName` nao deve ser usado; o nome publico do mestre vem do `Character` vinculado como `MASTER`.

## 8. Navegacao do Modulo
* `/characters` e a home/index do modulo de personagens.
* A home de personagens deve conter a acao `Criar personagem`.
* A lista `Meus personagens` pertence a `/characters`, nao a home inicial do sistema.
* `/characters/new` permanece dedicado ao formulario de criacao.
* `/characters/:characterId/edit` usa a mesma experiencia visual de criacao, carregando dados existentes.

## 9. Edicao de Personagem
* `GET /api/characters/:characterId` retorna um personagem do usuario autenticado.
* `PATCH /api/characters/:characterId` atualiza nome, avatar e `sheet.metadata.bio` conforme permissao.
* Personagem livre permite editar nome, avatar e bio da ficha.
* Personagem vinculado permite ao dono editar avatar e bio da ficha; nome fica bloqueado.
* O botao principal em modo edicao deve exibir `Salvar mudancas`.
* O botao `Salvar mudancas` so fica habilitado quando houver alteracao real em relacao aos dados carregados.
* A escolha de avatar nao deve ocupar uma segunda secao do formulario.
* A troca de avatar deve ficar no card de preview do avatar, abrindo um pequeno modal com as mesmas opcoes de preset e URL.

## 10. Dashboard de Campanhas do Usuario
* `GET /api/campaigns` deve retornar campanhas a partir de `CampaignCharacter` do usuario autenticado.
* A resposta deve incluir `myCharacterId`, `myCharacterName`, `myRole` e `myStatus`.
* Campanhas sem personagem vinculado ao usuario autenticado nao devem aparecer.
* Cards devem exibir nome do personagem vinculado e role.
* O status do personagem deve aparecer ao lado do nome do personagem.
* O card de personagem com role `PLAYER` nao deve exibir nem receber `inviteCode` da campanha.
* O botao `Entrar` deve ser habilitado quando `myStatus = ACTIVE` e:
  * `myRole = MASTER`; ou
  * `myRole = PLAYER` e `isOnline = true`.
* Personagens com `LEFT`, `DEAD`, `PENDING` ou `REJECTED` devem manter o card visivel quando o vinculo existir, mas nao devem permitir entrada na mesa.
