import urllib.request
import re

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.read().decode("utf-8", errors="ignore")
    except Exception as e:
        return ""

sitemap = fetch("https://chocolatepanningacademy.com/wp-sitemap.xml")
if not sitemap:
    sitemap = fetch("https://chocolatepanningacademy.com/sitemap_index.xml")
if not sitemap:
    sitemap = fetch("https://chocolatepanningacademy.com/sitemap.xml")

urls = re.findall(r'<loc>(https?://[^<]+)</loc>', sitemap)
print(f"Sitemap URLs: {urls}")
