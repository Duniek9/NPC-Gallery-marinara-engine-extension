@echo off
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0installer\uninstall.ps1" -EngineRoot "%~1"
set "EXIT_CODE=%ERRORLEVEL%"
echo.
if not "%EXIT_CODE%"=="0" echo Uninstallation failed with exit code %EXIT_CODE%.
pause
exit /b %EXIT_CODE%
