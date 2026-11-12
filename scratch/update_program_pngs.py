from PIL import Image

mapping = {
    "almond": "program-almond.png",
    "cashew": "program-cashew.png",
    "raisins": "program-raisins.png",
    "coffee": "program-coffee.png",
    "seeds": "program-seeds.png",
    "advanced": "program-advanced.png",
}

for key, target in mapping.items():
    src = f"public/images/sig-photo-{key}.jpg"
    img = Image.open(src)
    # Save as 800x600 PNG
    out = f"public/images/{target}"
    img.save(out, "PNG", optimize=True)
    print(f"Updated {out} with high-res {img.size}")
