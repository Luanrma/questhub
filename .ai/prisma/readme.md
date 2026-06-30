# Modulo: Prisma e Modelo Relacional (Product)

## 1. Proposito
Definir o modelo relacional e as migrations do banco PostgreSQL usado pelo QuestHub.

Este modulo documenta a persistencia estrutural da aplicacao: usuarios, personagens, campanhas e vinculos operacionais entre personagens e campanhas.

## 2. Responsabilidade Principal
Modelar entidades persistidas, enums, relacoes e constraints de banco que sustentam os modulos de produto.

## 3. Escopo Atual
Incluido:
* Enums de sistema de jogo, politica de entrada, status e papel em campanha.
* Modelos `User`, `Campaign`, `Character` e `CampaignCharacter`.
* Campo `Character.sheet` como envelope JSON de ficha.
* Campo `Character.deletedAt` para arquivamento/exclusao logica futura.
* Migrations versionadas.

Fora de escopo:
* Regras mecanicas de sistemas de RPG.
* Validacao interna de ficha por ruleset.
* Regras de negocio de auth, campanhas, personagens ou trade.

## 4. Decisoes De Dominio
* `CampaignCharacter` representa a participacao operacional de um personagem em uma campanha.
* `characterId` e unico em `CampaignCharacter`, impedindo o mesmo personagem de participar de mais de uma campanha ao mesmo tempo no modelo atual.
* `Character.sheet` guarda o envelope JSON da ficha e deve ser validado pelo modulo `game_systems`, nao pelo Prisma.
* `DND_5E` existe como enum reservado, mas nao ha adapter de ficha nem fluxo web/API funcional para ele.

## 5. Modulos Consumidores
* `auth`: usa `User`.
* `characters`: usa `Character`.
* `campaigns`: usa `Campaign` e `CampaignCharacter`.
* `campaign-presence`: usa `Campaign` e `CampaignCharacter`.
* `game_systems`: valida o envelope JSON persistido em `Character.sheet`.
