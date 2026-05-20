[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$urls = @(
  "https://www.nivarahousing.com/wp-content/uploads/2026/04/Picture1.png",
  "https://www.nivarahousing.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-23-at-2.51.03-PM-1.webp",
  "https://www.nivarahousing.com/wp-content/uploads/2026/04/Picture5.png",
  "https://www.nivarahousing.com/wp-content/uploads/2026/04/Picture6.png",
  "https://www.nivarahousing.com/wp-content/uploads/2026/04/Picture7.png",
  "https://www.nivarahousing.com/wp-content/uploads/2026/04/Picture4.png",
  "https://www.nivarahousing.com/wp-content/uploads/2026/04/Picture3.png",
  "https://www.nivarahousing.com/wp-content/uploads/2026/04/Picture2.png"
)

$destDir = "c:\Users\DELL\OneDrive\Desktop\work\nivara_website_version2\frontend\src\assets\images\CSR2"

foreach ($url in $urls) {
    $filename = [System.IO.Path]::GetFileName($url)
    $destPath = Join-Path $destDir $filename
    Write-Host "Downloading $url to $destPath"
    try {
        Invoke-WebRequest -Uri $url -OutFile $destPath -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -ErrorAction Stop
        Write-Host "Successfully downloaded $filename"
    } catch {
        Write-Error "Failed to download $url : $_"
    }
}
