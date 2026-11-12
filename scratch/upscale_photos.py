from PIL import Image, ImageEnhance, ImageFilter
import os

crops = ['almond', 'cashew', 'raisins', 'coffee', 'seeds', 'advanced']
os.makedirs("public/images/upscaled", exist_ok=True)

for name in crops:
    raw_path = f"scratch/crops/{name}_raw.png"
    if not os.path.exists(raw_path):
        continue
    img = Image.open(raw_path)
    
    # 4x upscale using high-quality Lanczos filter
    target_w = img.width * 4
    target_h = img.height * 4
    upscaled = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Enhance sharpness and contrast slightly to remove blur
    enhancer = ImageEnhance.Sharpness(upscaled)
    sharpened = enhancer.enhance(1.4)
    
    # Apply subtle unsharp mask
    unsharp = sharpened.filter(ImageFilter.UnsharpMask(radius=2, percent=130, threshold=3))
    
    # Save to public/images/upscaled/
    out_path = f"public/images/upscaled/sig-photo-{name}.png"
    unsharp.save(out_path, quality=95)
    print(f"Saved {out_path} ({unsharp.size})")
