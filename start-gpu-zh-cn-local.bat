@echo off
setlocal
title Fooocus - GPU (ZH-CN Local Patch)

rem Optional overrides before running this script:
rem   set "FOOOCUS_DIR=D:\path\to\Fooocus"
rem   set "PYTHON_EXE=D:\path\to\python.exe"
rem   set "FOOOCUS_URL=http://127.0.0.1:7865"
if not defined FOOOCUS_DIR set "FOOOCUS_DIR=%~dp0"
if not defined FOOOCUS_URL set "FOOOCUS_URL=http://127.0.0.1:7865"
if not "%FOOOCUS_DIR:~-1%"=="\" if not "%FOOOCUS_DIR:~-1%"=="/" set "FOOOCUS_DIR=%FOOOCUS_DIR%\"

if not defined PYTHON_EXE (
    if exist "%FOOOCUS_DIR%venv\Scripts\python.exe" (
        set "PYTHON_EXE=%FOOOCUS_DIR%venv\Scripts\python.exe"
    ) else (
        set "PYTHON_EXE=python"
    )
)

cd /d "%FOOOCUS_DIR%" || (
    echo Failed to enter Fooocus directory: %FOOOCUS_DIR%
    pause
    exit /b 1
)

if not exist "launch_zh_cn_ui_patch.py" (
    echo launch_zh_cn_ui_patch.py not found in: %CD%
    echo Copy this patch into your Fooocus folder, or set FOOOCUS_DIR first.
    pause
    exit /b 1
)

"%PYTHON_EXE%" --version >nul 2>&1 || (
    echo Python executable is not available: %PYTHON_EXE%
    echo Set PYTHON_EXE to the Python used by your Fooocus installation.
    pause
    exit /b 1
)

start "" powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -Command "$url=$env:FOOOCUS_URL; $deadline=(Get-Date).AddSeconds(180); while((Get-Date) -lt $deadline){ try { $response=Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 2; if($response.StatusCode -ge 200 -and $response.StatusCode -lt 500){ Start-Process $url; exit 0 } } catch { }; Start-Sleep -Seconds 2 }; Add-Type -AssemblyName PresentationFramework; [System.Windows.MessageBox]::Show(('Fooocus did not become reachable at ' + $url + ' within 180 seconds. Check the terminal log.'),'Fooocus startup timeout') | Out-Null"

"%PYTHON_EXE%" launch_zh_cn_ui_patch.py --language zh_cn_patch --disable-preset-download --disable-in-browser
pause
