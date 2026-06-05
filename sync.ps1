# Sincronización automática de Git en tiempo real
# Monitorea cambios en el directorio y realiza push automáticamente a GitHub.

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

$logFile = Join-Path $scriptPath "sync.log"
$watchedPath = $scriptPath

# Limpiar log anterior
if (Test-Path $logFile) {
    Remove-Item $logFile -Force
}

function Write-Log($message) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logLine = "[$timestamp] $message"
    Write-Output $logLine
    Add-Content -Path $logFile -Value $logLine
}

Write-Log "Iniciando servicio de sincronización automática..."
Write-Log "Monitoreando ruta: $watchedPath"

# Crear el file watcher
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $watchedPath
$watcher.Filter = "*.*"
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

# Variables para control de rebote (debounce)
$global:isPending = $false
$delaySeconds = 3

$action = {
    $changeType = $Event.SourceEventArgs.ChangeType
    $filePath = $Event.SourceEventArgs.FullPath
    $fileName = Split-Path $filePath -Leaf

    # Ignorar la carpeta .git y archivos de log/configuración de sincronización
    if ($filePath -like "*\.git*" -or $fileName -eq "sync.log" -or $fileName -eq "sync.ps1") {
        return
    }

    Write-Log "Cambio detectado: $fileName ($changeType)"

    # Lógica de rebote (debounce)
    if (-not $global:isPending) {
        $global:isPending = $true
        
        # Esperar a que se completen todas las escrituras concurrentes
        Start-Sleep -Seconds $delaySeconds
        
        Write-Log "Ejecutando sincronización con GitHub..."
        
        # Asegurar PATH correcto
        $env:PATH = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
        
        # Ejecutar git
        git add .
        $status = git status --porcelain
        if ($status) {
            $commitMsg = "Auto-update: cambios detectados el $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            git commit -m $commitMsg
            git push origin main
            Write-Log "Sincronización completada con éxito."
        } else {
            Write-Log "No hay cambios pendientes de confirmación."
        }
        $global:isPending = $false
    }
}

# Registrar eventos
$handlers = @()
$handlers += Register-ObjectEvent $watcher "Changed" -Action $action
$handlers += Register-ObjectEvent $watcher "Created" -Action $action
$handlers += Register-ObjectEvent $watcher "Deleted" -Action $action
$handlers += Register-ObjectEvent $watcher "Renamed" -Action $action

Write-Log "Monitoreo activo. El script se está ejecutando en segundo plano."

# Bucle infinito para mantener el script vivo
try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
} finally {
    Write-Log "Deteniendo el monitoreo..."
    foreach ($handler in $handlers) {
        Unregister-Event -SourceIdentifier $handler.Name -ErrorAction SilentlyContinue
    }
    $watcher.Dispose()
    Write-Log "Servicio de sincronización detenido."
}
