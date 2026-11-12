from PIL import Image

im = Image.open('public/images/sig-card-1-almond-3x.png')
# let's sample colors or check if bottom is cream
w, h = im.size
print("Bottom row color sample:", [im.getpixel((x, h - 10)) for x in range(0, w, 50)])
print("Top row color sample:", [im.getpixel((x, 10)) for x in range(0, w, 50)])
