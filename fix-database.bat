@echo off
echo ========================================
echo Velocity Visualizer - Database Fix
echo ========================================
echo.
echo This script will:
echo 1. Stop the backend server
echo 2. Delete the old database
echo 3. Recreate it with the fixed schema
echo 4. Restart the backend
echo.
echo WARNING: This will delete all existing users and blueprints!
echo.
pause

echo.
echo Step 1: Stopping backend server...
echo Please press Ctrl+C in the backend terminal to stop it, then press any key here...
pause

echo.
echo Step 2: Deleting old database...
if exist "backend\velocity.db" (
    del /F "backend\velocity.db"
    echo Database deleted successfully!
) else (
    echo Database file not found, skipping...
)

echo.
echo Step 3: Creating new database with fixed schema...
type "database\schema.sql" | sqlite3 "backend\velocity.db"
if %ERRORLEVEL% EQU 0 (
    echo Database created successfully!
) else (
    echo ERROR: Failed to create database. Make sure sqlite3 is installed.
    echo You can install it with: winget install SQLite.SQLite
    pause
    exit /b 1
)

echo.
echo Step 4: Please restart the backend server manually:
echo   cd backend
echo   npm run dev
echo.
echo ========================================
echo Database fix complete!
echo ========================================
echo.
echo Next steps:
echo 1. Restart the backend server (see above)
echo 2. Sign up with a new account
echo 3. Try saving a blueprint
echo.
pause
