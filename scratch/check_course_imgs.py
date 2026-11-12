import urllib.request
import re

for page in ['course/', 'gallery/', 'homepage/', 'home-2/']:
    url = f"https://chocolatepanningacademy.com/{page}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode("utf-8", errors="ignore")
        imgs = re.findall(r'https?://[^"\'\s>]+\.(?:png|jpg|jpeg|webp)', html)
        print(f"=== {page} ({len(imgs)} imgs) ===")
        for img in sorted(set(imgs)):
            if 'uploads' in img:
                print("  ", img)
    except Exception as e:
        print(f"Error {page}: {e}")
