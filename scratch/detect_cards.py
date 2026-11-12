from PIL import Image

im = Image.open(r"C:\Users\user\.gemini\antigravity\brain\b9bba401-5ac3-4dbc-bd02-6911ef522a71\.user_uploaded\media_1794486682474_b573196f.jpg")
w, h = im.size

# Let's inspect horizontal projection to find the 6 card boundaries
# A card has darker image content at y=20 to y=100
# The gaps between cards are cream background
gaps = []
for x in range(w):
    # sample vertical line in the image area, e.g. y=50
    p = im.getpixel((x, 50))
    # cream background is approx R>240, G>235, B>220
    is_cream = (p[0] > 240 and p[1] > 235 and p[2] > 220)
    gaps.append(is_cream)

card_ranges = []
in_card = False
start_x = 0
for x in range(w):
    if not gaps[x] and not in_card:
        in_card = True
        start_x = x
    elif gaps[x] and in_card:
        in_card = False
        if x - start_x > 50:
            card_ranges.append((start_x, x))
if in_card:
    card_ranges.append((start_x, w))

print("Found cards:", len(card_ranges))
for i, (sx, ex) in enumerate(card_ranges):
    print(f"Card {i+1}: x={sx} to {ex} (width={ex-sx})")
