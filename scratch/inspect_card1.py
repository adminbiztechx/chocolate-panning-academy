from PIL import Image

im = Image.open(r"C:\Users\user\.gemini\antigravity\brain\b9bba401-5ac3-4dbc-bd02-6911ef522a71\.user_uploaded\media_1794486682474_b573196f.jpg")
# Card 1 is roughly from x=59 to 204, y=0 to 199
card1 = im.crop((59, 10, 204, 180))
card1.save("scratch/card1_ref.png")
print("Saved card1_ref:", card1.size)
