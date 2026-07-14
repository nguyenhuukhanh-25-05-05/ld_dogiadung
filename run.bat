@echo off
title LANDING PAGE - YOUR_BRAND
cls
echo ============================================
echo    YOUR_BRAND - LANDING PAGE
echo    Dang khoi dong dev server...
echo ============================================
echo.
cd /d "%~dp0"
echo [1/2] Cai dat dependencies (neu thieu)...
call npm install
echo.
echo [2/2] Khoi dong Vite dev server...
echo.
echo    Mo trinh duyet va truy cap:
echo    - http://localhost:5173
echo.
echo    Nhan Ctrl+C de dung server.
echo ============================================
echo.
npm run dev
pause
