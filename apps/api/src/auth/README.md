# Auth core

## Objetivo do modulo

Assinar e verificar tokens JWT.

## Responsabilidade principal

Isolar o uso de `jsonwebtoken` e o formato `TokenPayload`.

## Funcionalidades existentes

- `signToken`.
- `verifyToken`.
- Tipo `TokenPayload`.

## Dependencias internas e externas

- Externa: `jsonwebtoken`.
- Depende de `process.env.JWT_SECRET`.

## Modulos relacionados

- `http/auth`.
- `modules/auth`.
- `campaign-presence`.

## Pontos de entrada

- `jwt.ts`.

## Fluxos importantes

- Importar este modulo sem `JWT_SECRET` definido lanca erro.

## Arquivos criticos

- `jwt.ts`.

## Observacoes tecnicas e debitos

- Mensagem de erro contem mojibake (`nÃ£o`).

