$ErrorActionPreference = "Stop"

# Sempre executa a partir da raiz do repo
$RootDir = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Set-Location $RootDir

if (-not (Test-Path ".env")) {
  Write-Host "[questhub] Arquivo .env não encontrado. Criando a partir de .env.example..." -ForegroundColor Yellow
  Copy-Item ".env.example" ".env" -Force
  Write-Host "[questhub] OK. Edite o arquivo .env se quiser mudar senhas/segredos." -ForegroundColor DarkGray
}

Write-Host "[questhub] Subindo Postgres (docker compose)..." -ForegroundColor Cyan
docker compose up -d db

Write-Host "[questhub] Aplicando migrations (Prisma)..." -ForegroundColor Cyan
npm run db:migrate -w apps/api

Write-Host "[questhub] Iniciando API + Web (um terminal só)..." -ForegroundColor Cyan
Write-Host "Dica: para parar, pressione Ctrl+C" -ForegroundColor DarkGray

# Usa concurrently via npx (sem precisar instalar globalmente)
npx concurrently -k -n api,web -c blue,green `
  "npm run dev -w apps/api" `
  "npm run dev -w apps/web"
