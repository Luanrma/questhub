# Campaign pages

## Objetivo do modulo

Implementar telas internas de uma campanha selecionada.

## Responsabilidade principal

Exibir resumo, participantes, configuracoes e placeholders de areas planejadas.

## Funcionalidades existentes

- Visao geral da campanha.
- Copia de invite code para mestre.
- Lista de jogadores, pendentes e recusados.
- Aprovacao e rejeicao de jogadores.
- Configuracao de campanha publica/privada.
- Placeholder para sessoes, personagens e diario.

## Dependencias internas e externas

- Internas: `SessionContext`, `lib/api`, `Button`.
- Externas: React Router.

## Modulos relacionados

- `CampaignLayout`.
- API campaigns e presence.

## Pontos de entrada

- `CampaignOverviewPage.tsx`.
- `CampaignPlayersPage.tsx`.
- `CampaignSettingsPage.tsx`.
- `PlaceholderPage.tsx`.

## Fluxos importantes

- Jogadores pagina consome `presence:update`.
- Configuracoes so permite alteracao para mestre.

## Arquivos criticos

- `CampaignPlayersPage.tsx`.
- `CampaignSettingsPage.tsx`.

## Observacoes tecnicas e debitos

- `sessions`, `characters` e `journal` ainda nao tem implementacao funcional.
- Presenca inicial de jogadores depende de eventos recebidos apos a pagina abrir.

