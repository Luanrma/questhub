# HTTP

## Objetivo do modulo

Centralizar utilitarios HTTP compartilhados.

## Responsabilidade principal

Gerenciar cookie de autenticacao e validacao de sessao em rotas Fastify.

## Funcionalidades existentes

- `setAuthCookie`.
- `clearAuthCookie`.
- `requireAuth`.
- Constante `TOKEN_COOKIE`.

## Dependencias internas e externas

- Interna: `auth/jwt`.
- Externa: tipos Fastify.

## Modulos relacionados

- Todos os modulos de rotas protegidas.
- `campaign-presence`, que reutiliza `TOKEN_COOKIE`.

## Pontos de entrada

- `auth.ts`.

## Fluxos importantes

- Cookie e HTTP-only, `sameSite: lax`, path `/`, max age de 7 dias.
- `secure` so fica ativo em producao.

## Arquivos criticos

- `auth.ts`.
- `auth.test.ts`.

## Observacoes tecnicas e debitos

- `requireAuth` envia resposta diretamente e retorna `null`; handlers precisam encerrar fluxo apos retorno nulo.

