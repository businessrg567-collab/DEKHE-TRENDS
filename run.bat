@echo off
cls
echo.
echo ========================================
echo   DEKHE TRENDS WEBSITE - STARTING...
echo ========================================
echo.

cd /d C:\Design-Canvas

set NODE_ENV=development
set PORT=5000

echo Starting server on http://localhost:5000
echo.

node node_modules\tsx\dist\cli.mjs server/index.ts

pause

