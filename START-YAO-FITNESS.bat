@echo off
cd /d "%~dp0"
echo ======================================
echo          YAO FITNESS SERVER
 echo ======================================
if not exist node_modules (
  echo Installing dependencies...
  call npm install
)
echo.
echo Starting YAO FITNESS...
start "YAO FITNESS" http://localhost:3000
node server.js
pause
