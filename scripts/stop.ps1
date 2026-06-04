$ErrorActionPreference = "Stop"

$RootDir = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Set-Location $RootDir

Write-Host "[questhub] Parando containers..." -ForegroundColor Cyan
docker compose down

