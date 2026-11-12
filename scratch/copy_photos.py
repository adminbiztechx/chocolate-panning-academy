import glob
import shutil
import os

brain_dir = r"C:\Users\user\.gemini\antigravity\brain\b9bba401-5ac3-4dbc-bd02-6911ef522a71"
dest_dir = r"public\images"

mapping = {
    "almond": "sig-photo-almond.jpg",
    "cashew": "sig-photo-cashew.jpg",
    "raisins": "sig-photo-raisins.jpg",
    "coffee": "sig-photo-coffee.jpg",
    "seeds": "sig-photo-seeds.jpg",
    "advanced": "sig-photo-advanced.jpg",
}

for key, target_name in mapping.items():
    matches = glob.glob(os.path.join(brain_dir, f"sig_photo_{key}_*.jpg"))
    if matches:
        latest = sorted(matches)[-1]
        target_path = os.path.join(dest_dir, target_name)
        shutil.copyfile(latest, target_path)
        print(f"Copied {latest} -> {target_path} ({os.path.getsize(target_path):,} bytes)")
