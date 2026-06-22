# Lib

## Objetivo do modulo

Centralizar utilitarios compartilhados do frontend.

## Responsabilidade principal

Fornecer cliente HTTP simples para a API.

## Funcionalidades existentes

- `api<T>`.
- `ApiError`.
- Tipo `Me`.

## Dependencias internas e externas

- Usa `fetch` do browser.
- Depende de `VITE_API_URL` ou fallback local.

## Modulos relacionados

- Todos os contexts e pages que chamam a API.

## Pontos de entrada

- `api.ts`.

## Fluxos importantes

- Sempre envia `Content-Type: application/json`.
- Sempre usa `credentials: include`.
- Extrai mensagem de erro de `{ error: string }`.

## Arquivos criticos

- `api.ts`.

## Observacoes tecnicas e debitos

- Erros Zod estruturados retornados pela API viram mensagem generica.

