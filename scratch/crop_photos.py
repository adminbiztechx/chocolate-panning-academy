from PIL import Image, ImageEnhance, ImageFilter
import os

im = Image.open(r"C:\Users\user\.gemini\antigravity\brain\b9bba401-5ac3-4dbc-bd02-6911ef522a71\.user_uploaded\media_1794471726442_f7251523.jpg")
w, h = im.size
print("Original upload size:", w, h)

# In media_1794471726442_f7251523.jpg (1024 x 200)
# Let's inspect the cards
# The cards are roughly at:
# Card 1 (Almond): x=59..204
# Card 2 (Cashew): x=218..359
# Card 3 (Raisins): x=371..514
# Card 4 (Coffee): x=525..668
# Card 5 (Seeds): x=681..823
# Card 6 (Advanced): x=835..977
# The photo inside each card is roughly from y=12 to y=105
# Let's crop just the photo from each card!
cards = [
    ("almond", 59, 12, 204, 105),
    ("cashew", 218, 12, 359, 105),
    ("raisins", 371, 12, 514, 105),
    ("coffee", 525, 12, 668, 105),
    ("seeds", 681, 12, 823, 105),
    ("advanced", 835, 12, 977, 105),
]

os.makedirs("scratch/crops", exist_ok=True)
for name, x1, y1, x2, y2 in cards:
    crop = im.crop((x1, y1, x2, y2))
    crop.save(f"scratch/crops/{name}_raw.png")
    print(f"Cropped {name}: {crop.size}")
