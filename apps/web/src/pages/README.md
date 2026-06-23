# Pages

## Objetivo do modulo

Implementar telas de negocio da SPA.

## Responsabilidade principal

Orquestrar formularios, chamadas API e navegacao por fluxo de usuario.

## Funcionalidades existentes

- Login e cadastro.
- Home.
- Dashboard de campanhas.
- Criacao de campanha.
- Entrada por invite code.
- Biblioteca de personagens.
- Criacao/edicao de personagem.

## Dependencias internas e externas

- Internas: `components`, `contexts`, `lib/api`, `pages/campaign`.
- Externas: React Router e Lucide React.

## Modulos relacionados

- API auth, campaigns, characters e character_sheet.

## Pontos de entrada

- Arquivos `*Page.tsx`.

## Fluxos importantes

- Criacao de campanha pode usar personagem existente ou criar personagem mestre.
- Entrada em campanha sempre pede nome de personagem no frontend atual.
- Edicao de personagem respeita `available` para bloquear nome.

## Arquivos criticos

- `CampaignCreatePage.tsx`.
- `CampaignJoinPage.tsx`.
- `CharacterCreatePage.tsx`.
- `CharactersHomePage.tsx`.

## Observacoes tecnicas e debitos

- Tipos locais duplicam contratos da API.
- Tratamento de erro e majoritariamente por mensagens simples.

