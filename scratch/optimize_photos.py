from PIL import Image
import os

images = ["almond", "cashew", "raisins", "coffee", "seeds", "advanced"]
for name in images:
    src = f"public/images/sig-photo-{name}.jpg"
    img = Image.open(src)
    # Resize to 800x600 with Lanczos
    resized = img.resize((800, 600), Image.Resampling.LANCZOS)
    # Save as high-quality optimized JPG
    resized.save(f"public/images/sig-photo-{name}.jpg", quality=90, optimize=True)
    # Also save as WebP
    resized.save(f"public/images/sig-photo-{name}.webp", quality=90, method=6)
    print(f"Optimized {name}: JPG={os.path.getsize(f'public/images/sig-photo-{name}.jpg'):,} bytes, WebP={os.path.getsize(f'public/images/sig-photo-{name}.webp'):,} bytes")
