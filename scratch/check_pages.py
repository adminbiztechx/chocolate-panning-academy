import urllib.request
import re

req = urllib.request.Request("https://chocolatepanningacademy.com/wp-sitemap-posts-page-1.xml", headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode("utf-8")
print(re.findall(r'<loc>(https?://[^<]+)</loc>', html))
