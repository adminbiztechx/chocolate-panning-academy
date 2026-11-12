from PIL import Image

im = Image.open(r"C:\Users\user\.gemini\antigravity\brain\b9bba401-5ac3-4dbc-bd02-6911ef522a71\.user_uploaded\media_1794486682474_b573196f.jpg")
print("Size:", im.size)
# The image is 1024x199 containing 6 cards
w, h = im.size
card_w = w / 6
print("Approx card width:", card_w, "height:", h)
