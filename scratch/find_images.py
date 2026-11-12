import urllib.request
import re

url = "https://chocolatepanningacademy.com/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode("utf-8", errors="ignore")
    imgs = re.findall(r'https?://[^"\'\s>]+\.(?:png|jpg|jpeg|webp)', html)
    print(f"Total image URLs found: {len(imgs)}")
    for img in sorted(set(imgs)):
        print(img)
except Exception as e:
    print("Error:", e)
