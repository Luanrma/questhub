# Auth routes

## Objetivo do modulo

Expor endpoints de autenticacao.

## Responsabilidade principal

Criar usuario, autenticar credenciais, retornar usuario atual e encerrar sessao.

## Funcionalidades existentes

- `POST /api/register`.
- `POST /api/sign-in`.
- `GET /api/me`.
- `POST /api/logout`.

## Dependencias internas e externas

- Internas: `db/prisma`, `auth/jwt`, `http/auth`.
- Externas: bcryptjs e Zod.

## Modulos relacionados

- `SessionContext`.
- `LoginPage`.
- `RegisterPage`.

## Pontos de entrada

- `routes.ts` com `registerAuthRoutes`.

## Fluxos importantes

- Senha e armazenada como hash bcrypt.
- Token usa `name` derivado do prefixo do email.
- `/api/me` confere se o usuario ainda existe no banco.

## Arquivos criticos

- `routes.ts`.

## Observacoes tecnicas e debitos

- Nao ha campo `name` persistido em `User`; nome vem do payload JWT.

