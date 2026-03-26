
$enc = [System.Text.Encoding]::UTF8

$files = Get-ChildItem -Path . -Filter *.html -Recurse

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding utf8
    
    # Common UTF-8 to Windows-1252 garbled patterns
    # â€ â€ (usually em dash or similar)
    $content = $content -replace "â€ â€", "—"
    $content = $content -replace "â€", "—"
    $content = $content -replace "â€“", "–"
    $content = $content -replace "â€”", "—"
    $content = $content -replace "â€™", "'"
    $content = $content -replace "Â©", "©"
    $content = $content -replace "â€œ", '"'
    $content = $content -replace "â€\?", '"'
    
    # Specific ones seen in grep
    $content = $content -replace "ÃƒÂ¢â€ Â Ã¢â€šÂ¬", ""
    
    Set-Content -Path $file.FullName -Value $content -Encoding utf8
}
