# Scripts

## Objetivo do modulo

Fornecer automacoes locais para desenvolvimento e testes.

## Responsabilidade principal

Subir/parar ambiente e preparar saida de testes unitarios.

## Funcionalidades existentes

- `dev.sh` e `dev.ps1`.
- `stop.sh` e `stop.ps1`.
- `prepare-unit-test-output.cjs`.

## Dependencias internas e externas

- Depende de npm, Docker Compose e scripts da raiz.

## Modulos relacionados

- `package.json`.
- `docker-compose.yml`.
- `apps/api/src/unit.test.ts`.

## Pontos de entrada

- Scripts chamados manualmente ou pelos scripts npm.

## Fluxos importantes

- Desenvolvimento local sobe banco, aplica migrations e inicia API/Web.
- Teste unitario compila TypeScript da API e executa arquivos em `.tmp`.

## Arquivos criticos

- `dev.ps1`.
- `dev.sh`.
- `prepare-unit-test-output.cjs`.

## Observacoes tecnicas e debitos

- Scripts assumem execucao a partir da raiz do repositorio.

