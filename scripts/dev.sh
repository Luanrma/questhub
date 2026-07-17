#!/usr/bin/env bash
set -euo pipefail

# Sempre executa a partir da raiz do repo.
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ ! -f ".env" ]]; then
  echo "[questhub] Arquivo .env nao encontrado. Criando a partir de .env.example..."
  cp ".env.example" ".env"
  echo "[questhub] OK. Edite o arquivo .env se quiser mudar senhas/segredos."
fi

echo "[questhub] Verificando Docker..."
if ! docker info >/dev/null 2>&1; then
  echo "[questhub] ERRO: Docker nao esta rodando. Abra o Docker Desktop e tente novamente."
  exit 1
fi

echo "[questhub] Garantindo que containers API/Web nao estao rodando (para nao ocupar portas)..."
docker compose stop api web >/dev/null 2>&1 || true

kill_port_if_questhub() {
  local port="$1"
  # Mata apenas processos que parecem ser do QuestHub (node/vite/tsx).
  powershell.exe -NoProfile -Command "
    \$port = $port
    \$lines = netstat -ano | Select-String -Pattern (':'+\$port+'\\s+.*LISTENING')
    if (-not \$lines) { exit 0 }
    \$pids = @()
    foreach (\$l in \$lines) {
      \$m = [regex]::Match(\$l.Line, '.*\\s+(\\d+)\$')
      if (\$m.Success) { \$pids += [int]\$m.Groups[1].Value }
    }
    \$pids = \$pids | Sort-Object -Unique
    foreach (\$pid in \$pids) {
      try {
        \$p = Get-CimInstance Win32_Process -Filter \"ProcessId=\$pid\" -ErrorAction SilentlyContinue
        \$cmd = (\$p.CommandLine ?? '')
        \$name = (\$p.Name ?? '')
        \$isQuestHub = (\$cmd -match 'questhub' -or \$cmd -match 'apps\\\\api' -or \$cmd -match 'vite' -or \$cmd -match 'tsx')
        if (\$name -match 'node' -and \$isQuestHub) {
          taskkill /F /PID \$pid | Out-Null
        }
      } catch {}
    }
  " >/dev/null 2>&1 || true
}

is_port_listening() {
  local port="$1"
  powershell.exe -NoProfile -Command "
    \$port = $port
    \$lines = netstat -ano | Select-String -Pattern (':'+\$port+'\\s+.*LISTENING')
    if (\$lines) { exit 0 } else { exit 1 }
  " >/dev/null 2>&1
}

run_prisma_migrate() {
  local migrate_log=".tmp/prisma-migrate.log"
  mkdir -p ".tmp"

  if npm run db:migrate 2>&1 | tee "$migrate_log"; then
    return 0
  fi

  if ! grep -Eq "Drift detected|diverge|migrate reset|modified after it was applied" "$migrate_log"; then
    echo "[questhub] ERRO: Prisma migrate falhou. Veja o log acima."
    return 1
  fi

  echo
  echo "[questhub] O banco local nao bate com as migrations desta branch."
  echo "[questhub] Isso e esperado depois de voltar/refatorar migrations do VTT."
  echo "[questhub] Para continuar, e preciso resetar o banco Docker local."
  echo "[questhub] ATENCAO: todos os dados locais de desenvolvimento serao apagados."
  echo

  if [[ "${QUESTHUB_RESET_DB:-}" == "1" ]]; then
    echo "[questhub] QUESTHUB_RESET_DB=1 detectado; resetando sem perguntar..."
  else
    if [[ ! -t 0 ]]; then
      echo "[questhub] ERRO: terminal nao interativo."
      echo "[questhub] Rode novamente com QUESTHUB_RESET_DB=1 ./scripts/dev.sh para autorizar o reset."
      return 1
    fi

    read -r -p "Resetar o banco local agora? Digite 'reset' para confirmar: " answer
    if [[ "$answer" != "reset" ]]; then
      echo "[questhub] Reset cancelado. Nada mais foi iniciado."
      return 1
    fi
  fi

  echo "[questhub] Resetando banco local e reaplicando migrations..."
  npm exec prisma -- migrate reset --force
}

echo "[questhub] Limpando processos antigos (API/Web)..."
kill_port_if_questhub 3001
kill_port_if_questhub 5173
kill_port_if_questhub 5174
kill_port_if_questhub 5175

if is_port_listening 3001; then
  echo "[questhub] ERRO: a porta 3001 ainda esta em uso. Feche a API antiga e tente novamente."
  echo "Dica (PowerShell): netstat -ano | findstr :3001"
  exit 1
fi

VITE_PORT=5173
if is_port_listening 5173; then VITE_PORT=5174; fi
if is_port_listening 5174; then VITE_PORT=5175; fi

echo "[questhub] Subindo Postgres (docker compose)..."
docker compose up -d db

echo "[questhub] Aplicando migrations (Prisma)..."
run_prisma_migrate

echo "[questhub] Gerando Prisma Client..."
npm run db:generate

echo "[questhub] Iniciando API + Web (um terminal so)..."
echo "Dica: para parar, pressione Ctrl+C"
echo "[questhub] Web vai subir em: http://localhost:${VITE_PORT}"

# Usa concurrently instalado no package.json raiz.
npm exec concurrently -- -k -n api,web -c blue,green \
  "npm run dev:api" \
  "npm run dev:web -- --port ${VITE_PORT}"
