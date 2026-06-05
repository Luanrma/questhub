$ErrorActionPreference = "Stop"

# Sempre executa a partir da raiz do repo
$RootDir = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Set-Location $RootDir

if (-not (Test-Path ".env")) {
  Write-Host "[questhub] Arquivo .env não encontrado. Criando a partir de .env.example..." -ForegroundColor Yellow
  Copy-Item ".env.example" ".env" -Force
  Write-Host "[questhub] OK. Edite o arquivo .env se quiser mudar senhas/segredos." -ForegroundColor DarkGray
}

Write-Host "[questhub] Verificando Docker..." -ForegroundColor Cyan
try {
  docker info | Out-Null
} catch {
  Write-Host "[questhub] ERRO: Docker não está rodando. Abra o Docker Desktop e tente novamente." -ForegroundColor Red
  exit 1
}

Write-Host "[questhub] Garantindo que containers API/Web não estão rodando (para não ocupar portas)..." -ForegroundColor Cyan
try { docker compose stop api web | Out-Null } catch {}

function Stop-QuestHubPort($port) {
  $lines = netstat -ano | Select-String -Pattern (":$port\s+.*LISTENING")
  if (-not $lines) { return }
  $pids = @()
  foreach ($l in $lines) {
    $m = [regex]::Match($l.Line, '.*\s+(\d+)$')
    if ($m.Success) { $pids += [int]$m.Groups[1].Value }
  }
  $pids = $pids | Sort-Object -Unique
  foreach ($pid in $pids) {
    try {
      $p = Get-CimInstance Win32_Process -Filter "ProcessId=$pid" -ErrorAction SilentlyContinue
      $cmd = ($p.CommandLine ?? '')
      $name = ($p.Name ?? '')
      $isQuestHub = ($cmd -match 'questhub' -or $cmd -match 'apps\\api' -or $cmd -match 'vite' -or $cmd -match 'tsx')
      if ($name -match 'node' -and $isQuestHub) {
        taskkill /F /PID $pid | Out-Null
      }
    } catch {}
  }
}

function Test-PortListening($port) {
  $lines = netstat -ano | Select-String -Pattern (":$port\s+.*LISTENING")
  return [bool]$lines
}

Write-Host "[questhub] Limpando processos antigos (API/Web)..." -ForegroundColor Cyan
Stop-QuestHubPort 3001
Stop-QuestHubPort 5173
Stop-QuestHubPort 5174
Stop-QuestHubPort 5175

if (Test-PortListening 3001) {
  Write-Host "[questhub] ERRO: a porta 3001 ainda está em uso. Feche a API antiga e tente novamente." -ForegroundColor Red
  exit 1
}

$VitePort = 5173
if (Test-PortListening 5173) { $VitePort = 5174 }
if (Test-PortListening 5174) { $VitePort = 5175 }

Write-Host "[questhub] Subindo Postgres (docker compose)..." -ForegroundColor Cyan
docker compose up -d db

Write-Host "[questhub] Aplicando migrations (Prisma)..." -ForegroundColor Cyan
npm run db:migrate -w apps/api

Write-Host "[questhub] Iniciando API + Web (um terminal só)..." -ForegroundColor Cyan
Write-Host "Dica: para parar, pressione Ctrl+C" -ForegroundColor DarkGray
Write-Host "[questhub] Web vai subir em: http://localhost:$VitePort" -ForegroundColor DarkGray

# Usa concurrently via npx (sem precisar instalar globalmente)
npx concurrently -k -n api,web -c blue,green `
  "npm run dev -w apps/api" `
  "npm run dev -w apps/web -- --port $VitePort"
