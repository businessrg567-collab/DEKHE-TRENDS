@echo off
echo.
echo ===================================
echo   STARTING DEKHE TRENDS WEBSITE
echo ===================================
echo.
cd /d "C:\Design-Canvas"

REM Set environment variables for Windows
set NODE_ENV=development
set PORT=5000
set DATABASE_URL=postgresql://localhost:5432/dekhetrends

echo Installing dependencies if needed...
call npm install --silent

echo.
echo Starting development server...
echo.
call npm run dev
pause

