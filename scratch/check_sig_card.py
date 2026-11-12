from PIL import Image

for name in ['sig-card-1-almond-3x.png', 'sig-prog-almond-2x.png', 'program-almond.png']:
    im = Image.open(f'public/images/{name}')
    print(name, im.size)
