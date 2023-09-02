@echo off
echo Eseguo npm run quick:build...
npm run quick:build

echo Eseguo npm run quick:start:db in una nuova finestra...
start cmd /k "npm run quick:start:db"

echo Eseguo npm run quick:start:core in una nuova finestra...
start cmd /k "npm run quick:start:core"

echo Comandi completati.
pause
