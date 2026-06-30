# Modulo: Campaign Diary (Specs & Contracts)

## 1. Fronteira do Modulo
`campaign_diary` define diarios livres da campanha, criados e consultados pelo Mestre. Diarios sao documentos independentes: nao pertencem a cenas, sessoes, tokens, chat ou sistemas de jogo.

Mesmo que o Mestre nomeie um diario como `Cena 1`, o relacionamento e apenas textual. O dominio nao deve criar `sceneId`, acoplamento com `campaign_scene` ou comportamento automatico entre diario e cena.

## 2. Decisoes Canonicas
* Diarios pertencem diretamente a campanha.
* Apenas Mestre pode criar, listar, visualizar, editar e remover diarios neste escopo.
* Jogadores nao veem diarios.
* Conteudo de diario usa Markdown.
* Diario nao usa auto-save; salvar exige acao explicita no botao `Salvar`.
* O menu `Diario` fica na sidebar esquerda e abre um modal sobre a mesa.
* O modal lista todos os diarios da campanha em formato navegavel.
* O Mestre pode criar, nomear, selecionar, editar e remover diarios.
* `campaign_diary` deve ser implementado como modulo proprio no backend e frontend.

## 3. Modelo de Dados

```ts
type CampaignDiary = {
  id: string
  campaignId: string
  title: string
  content: string
  createdBy: string
  lastEditedBy: string
  createdAt: string
  updatedAt: string
}
```

Regras:
* `campaignId` vincula o diario a campanha.
* `title` e livre e pode repetir nomes de cenas sem criar vinculo.
* `content` armazena Markdown.
* `createdBy` registra o usuario criador.
* `lastEditedBy` registra o ultimo usuario Mestre que editou.

## 4. API HTTP

Endpoints esperados:

```http
GET /api/campaigns/:campaignId/diaries
POST /api/campaigns/:campaignId/diaries
GET /api/campaigns/:campaignId/diaries/:diaryId
PATCH /api/campaigns/:campaignId/diaries/:diaryId
DELETE /api/campaigns/:campaignId/diaries/:diaryId
```

Regras:
* Todas as rotas exigem usuario autenticado.
* Todas as rotas exigem `CampaignCharacter` ativo com role `MASTER`.
* Rotas devem delegar fluxo para services/casos de uso.
* Acesso a Prisma deve acontecer apenas por repositories do modulo.
* Respostas publicas devem passar por presenter/serializer do modulo.
* Payloads de entrada devem ser validados por Zod.

## 5. Arquitetura Backend

Estrutura esperada:

```txt
apps/api/src/modules/campaign_diary/
  routes.ts
  domain/
    policy.ts
    presenters.ts
    types.ts
    validation.ts
  repositories/
    read.ts
    write.ts
  services/
    campaign-diary-service.ts
```

Responsabilidades:
* `routes.ts`: adaptador HTTP, autenticacao, parse de params/body e resposta.
* `domain/validation.ts`: schemas de entrada.
* `domain/presenters.ts`: formato publico de saida.
* `domain/types.ts`: tipos e interfaces do modulo.
* `domain/policy.ts`: regras puras de permissao e dominio.
* `repositories/read.ts`: consultas via Prisma.
* `repositories/write.ts`: escritas via Prisma.
* `services/campaign-diary-service.ts`: regras de autorizacao operacional e casos de uso.
* Rotas nao acessam repositories diretamente.
* Repositories nao acessam services.
* Tests devem ficar na pasta da camada exercitada.

## 6. UI/UX

Regras:
* O menu `Diario` fica na sidebar esquerda.
* Clicar em `Diario` abre um modal sobre a mesa.
* O modal lista diarios existentes da campanha.
* O Mestre pode criar um diario novo com titulo livre.
* O Mestre pode selecionar um diario e editar titulo/conteudo.
* A interface deve ter editor Markdown, preview e botao `Salvar`.
* Fechar o modal nao deve desmontar `CampaignLayout`.

## 7. Criterios de Aceitacao
* Mestre consegue criar diario com nome livre.
* Mestre consegue listar diarios da campanha.
* Mestre consegue consultar, editar e remover diario.
* Diario persiste apenas ao clicar em `Salvar`.
* Jogador nao acessa endpoints nem interface de diarios.
* Diario nao possui `sceneId`.
* Nenhum codigo de diario fica dentro do modulo `campaign_scene`.
