@echo off
title Push Portfolio to GitHub (Akash G)
echo ==========================================================
echo  Pushing Akash G's Portfolio to:
echo  https://github.com/akash1071ak/Portfolio.git
echo ==========================================================
cd /d "%~dp0"

echo 1. Staging any new changes...
"C:\Program Files\Git\cmd\git.exe" add -A

echo 2. Committing changes...
"C:\Program Files\Git\cmd\git.exe" commit -m "Update UI/UX Designer portfolio for Akash G" >nul 2>&1

echo 3. Setting branch to main...
"C:\Program Files\Git\cmd\git.exe" branch -M main

echo 4. Verifying remote origin...
"C:\Program Files\Git\cmd\git.exe" remote set-url origin https://github.com/akash1071ak/Portfolio.git

echo 5. Pushing to GitHub...
echo (If a GitHub sign-in window appears, click 'Sign in with your browser' or enter your Personal Access Token)
"C:\Program Files\Git\cmd\git.exe" push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo Note: If your remote repository already has an existing README or commits, try force pushing:
    set /p PUSH_FORCE="Would you like to force push to overwrite? (Y/N): "
    if /i "%PUSH_FORCE%"=="Y" (
        "C:\Program Files\Git\cmd\git.exe" push -u origin main --force
    )
)

echo.
echo ==========================================================
echo  All done! Press any key to close this window.
echo ==========================================================
pause
