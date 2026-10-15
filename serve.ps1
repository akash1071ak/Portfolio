$port = 3000
$baseDir = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " Portfolio Server Active: http://localhost:$port/" -ForegroundColor Yellow
    Write-Host " Also accessible at:     http://127.0.0.1:$port/" -ForegroundColor Yellow
    Write-Host " Directory:              $baseDir" -ForegroundColor Cyan
    Write-Host "==========================================================" -ForegroundColor Green

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        try {
            $urlPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($urlPath) -or $urlPath -eq "") {
                $urlPath = "preview.html"
            }

            # Normalize path
            $urlPath = $urlPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
            $filePath = Join-Path $baseDir $urlPath

            if (Test-Path $filePath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".htm"  { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".svg"  { "image/svg+xml" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    default { "application/octet-stream" }
                }

                $response.ContentType = $contentType
                $response.StatusCode = 200
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
                $response.OutputStream.Write($notFound, 0, $notFound.Length)
            }
        }
        catch {
            Write-Host "Error handling request: $_" -ForegroundColor Red
        }
        finally {
            $response.Close()
        }
    }
}
catch {
    Write-Host "Server error: $_" -ForegroundColor Red
}
finally {
    $listener.Stop()
    $listener.Close()
}
