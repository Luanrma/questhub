# Modulo: Campaign Presence (Skills & Tech)

## 1. Stack Tecnologica
* Socket.IO no backend e frontend.
* JWT em cookie para autenticar conexoes.
* Prisma para validar vinculo `CampaignCharacter`.

## 2. Padroes
* In-memory Session Registry no MVP.
* Rooms por usuario e campanha.
* Eventos pequenos e orientados a estado.
* Abertura lazy da conexao Socket.IO: o cliente conecta quando precisa iniciar sessao ou entrar em uma sessao online.
* O estado vivo de presenca, sessao, medicoes e compatibilidade VTT deve ficar encapsulado em um registry/store dedicado, nao em Maps soltos no gateway.
* Handlers de entrada Socket.IO devem ser separados por responsabilidade. Eventos `presence:*` ficam em handler de presenca/sessao; eventos VTT legados permanecem isolados enquanto a migracao para `campaign_scene` nao for concluida.
* Schemas e tipos compartilhados de payload Socket.IO devem ficar em arquivo de contratos do modulo, para evitar duplicacao entre handlers.
* Nomes de rooms devem ser criados por helpers dedicados, preservando os formatos canonicos `campaign:<campaignId>` e `user:<userId>`.

## 3. Restricoes
* Estado em memoria nao deve ser tratado como persistente.
* Escalar para multiplas instancias exigira adapter compartilhado.
* Encerramento manual do mestre deve sempre notificar jogadores antes de desconectar a presenca da sala.
* A refatoracao dos eventos `vtt:*` deve preservar compatibilidade ate o frontend consumir os eventos `campaign-scene:*`.
