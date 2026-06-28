@echo off
setlocal
title Fooocus - GPU (ZH-CN)

rem Optional overrides before running this script:
rem   set "FOOOCUS_DIR=D:\path\to\Fooocus"
rem   set "PYTHON_EXE=D:\path\to\python.exe"
if not defined FOOOCUS_DIR set "FOOOCUS_DIR=%~dp0"
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

if not exist "launch.py" (
    echo launch.py not found in: %CD%
    echo Copy this script into your Fooocus folder, or set FOOOCUS_DIR first.
    pause
    exit /b 1
)

"%PYTHON_EXE%" --version >nul 2>&1 || (
    echo Python executable is not available: %PYTHON_EXE%
    echo Set PYTHON_EXE to the Python used by your Fooocus installation.
    pause
    exit /b 1
)

"%PYTHON_EXE%" launch.py --share --language zh_cn_patch --disable-preset-download
pause
