# Character sheet components

## Objetivo do modulo

Renderizar e salvar fichas de personagem no frontend.

## Responsabilidade principal

Carregar ficha da API, exibir formulario especifico do sistema e enviar alteracoes validaveis pela API.

## Funcionalidades existentes

- Modal arrastavel.
- Navegacao por paginas da ficha.
- Carregamento de ficha existente.
- Carregamento de ficha default quando necessario.
- Salvamento via API.
- Suporte visual para Pathfinder 2e.

## Dependencias internas e externas

- Internas: `lib/api`, `Button`, `drag`, `pathfinder_2e_sheet`.
- Externas: React e Lucide React.

## Modulos relacionados

- API `character_sheet`.
- `CharactersHomePage`.

## Pontos de entrada

- `CharacterSheetModal.tsx`.
- `types.ts`.
- `drag.ts`.

## Fluxos importantes

- Sistema desconhecido renderiza mensagem de nao suporte.
- Posicao do modal e limitada ao viewport.

## Arquivos criticos

- `CharacterSheetModal.tsx`.
- `types.ts`.

## Observacoes tecnicas e debitos

- Tipos de ficha sao mantidos manualmente no frontend e podem divergir do backend.

