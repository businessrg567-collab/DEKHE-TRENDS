@echo off
cls
echo.
echo ========================================
echo    DEKHE TRENDS WEBSITE
echo    Starting Development Server...
echo ========================================
echo.

REM Set environment variables
set NODE_ENV=development
set PORT=5000

REM Navigate to project directory
cd /d C:\Design-Canvas

REM Install dependencies if needed
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
)

REM Start the development server
echo Starting server on http://localhost:5000
echo.
echo Press Ctrl+C to stop the server
echo.
call npm run dev

pause

