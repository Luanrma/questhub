#!/usr/bin/env bash
set -euo pipefail

# Sempre executa a partir da raiz do repo
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ ! -f ".env" ]]; then
  echo "[questhub] Arquivo .env não encontrado. Criando a partir de .env.example..."
  cp ".env.example" ".env"
  echo "[questhub] OK. Edite o arquivo .env se quiser mudar senhas/segredos."
fi

echo "[questhub] Subindo Postgres (docker compose)..."
docker compose up -d db

echo "[questhub] Aplicando migrations (Prisma)..."
npm run db:migrate -w apps/api

echo "[questhub] Iniciando API + Web (um terminal só)..."
echo "Dica: para parar, pressione Ctrl+C"

# Usa concurrently via npx (sem precisar instalar globalmente)
npx concurrently -k -n api,web -c blue,green \
  "npm run dev -w apps/api" \
  "npm run dev -w apps/web"
