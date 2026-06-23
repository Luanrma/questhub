# Modulo: Campaign Presence (Skills & Tech)

## 1. Stack Tecnologica
* Socket.IO no backend e frontend.
* JWT em cookie para autenticar conexoes.
* Prisma para validar vinculo `CampaignCharacter`.

## 2. Padroes
* In-memory Presence Registry no MVP.
* Rooms por usuario e campanha.
* Eventos pequenos e orientados a estado.

## 3. Restricoes
* Estado em memoria nao deve ser tratado como persistente.
* Escalar para multiplas instancias exigira adapter compartilhado.
