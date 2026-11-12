from PIL import Image

im = Image.open('public/images/sig-prog-almond-2x.png')
print("sig-prog-almond-2x:", im.size)
im2 = Image.open('public/images/sig-card-1-almond-3x.png')
print("sig-card-1-almond-3x:", im2.size)

# Let's inspect where the image ends and text begins in sig-prog-almond-2x.png
# Width: 296, Height: 336
