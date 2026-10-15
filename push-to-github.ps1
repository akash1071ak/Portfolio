$repoUrl = "https://github.com/akash1071ak/Portfolio.git"
$projectDir = "C:\Users\akaka\.gemini\antigravity-ide\scratch\akash-portfolio"

Write-Host "Looking for Git executable..." -ForegroundColor Cyan

# 1. Check if git is in PATH
$gitCmd = Get-Command "git" -ErrorAction SilentlyContinue
$gitExe = if ($gitCmd) { $gitCmd.Source } else { $null }

# 2. Check standard installation directories if not in PATH
if (-not $gitExe) {
    $candidatePaths = @(
        "C:\Program Files\Git\cmd\git.exe",
        "C:\Program Files\Git\bin\git.exe",
        "C:\Program Files (x86)\Git\cmd\git.exe",
        "C:\Program Files (x86)\Git\bin\git.exe",
        "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe",
        "$env:LOCALAPPDATA\Programs\Git\bin\git.exe",
        "$env:ProgramW6432\Git\cmd\git.exe"
    )

    # Also search GitHub Desktop git
    $ghDesktop = Get-ChildItem "$env:LOCALAPPDATA\GitHubDesktop\app-*\resources\app\git\cmd\git.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($ghDesktop) {
        $candidatePaths += $ghDesktop.FullName
    }

    foreach ($path in $candidatePaths) {
        if (Test-Path $path) {
            $gitExe = $path
            break
        }
    }
}

if (-not $gitExe) {
    Write-Host "ERROR: Git executable was not found on this computer." -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/download/win or GitHub Desktop." -ForegroundColor Yellow
    exit 1
}

Write-Host "Git found at: $gitExe" -ForegroundColor Green

# Set git alias or function
Set-Alias git $gitExe

Set-Location $projectDir

# Initialize git if needed
if (-not (Test-Path "$projectDir\.git")) {
    Write-Host "Initializing new Git repository..." -ForegroundColor Cyan
    & $gitExe init
}

# Check git user config, set default if not set
$userName = & $gitExe config user.name
if (-not $userName) {
    & $gitExe config user.name "Akash G"
}
$userEmail = & $gitExe config user.email
if (-not $userEmail) {
    & $gitExe config user.email "ak.akash1071@gmail.com"
}

# Add all files
Write-Host "Staging files..." -ForegroundColor Cyan
& $gitExe add -A

# Commit
Write-Host "Creating commit..." -ForegroundColor Cyan
& $gitExe commit -m "Initial commit: UI/UX Designer portfolio for Akash G"

# Set branch to main
& $gitExe branch -M main

# Set remote origin
Write-Host "Configuring remote origin to $repoUrl..." -ForegroundColor Cyan
$existingOrigin = & $gitExe remote get-url origin 2>$null
if ($existingOrigin) {
    & $gitExe remote set-url origin $repoUrl
} else {
    & $gitExe remote add origin $repoUrl
}

# Push to GitHub
Write-Host "Pushing to GitHub (main branch)..." -ForegroundColor Yellow
& $gitExe push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " SUCCESS! Portfolio pushed to $repoUrl" -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
} else {
    Write-Host "Push command finished with exit code $LASTEXITCODE." -ForegroundColor Yellow
}
