
import os

replacements = {
    "â€ â€": "—",
    "â€": "—",
    "â€“": "–",
    "â€”": "—",
    "â€™": "'",
    "Â©": "©",
    "â€œ": '"',
    "â€\?": '"',
    "ÃƒÂ¢â€ Â Ã¢â€šÂ¬": ""
}

for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".html"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            
            original_content = content
            for search, replace in replacements.items():
                content = content.replace(search, replace)
            
            if content != original_content:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Fixed {path}")
