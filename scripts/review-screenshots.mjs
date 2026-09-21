import sharp from 'sharp';
import fs from 'node:fs/promises';
const names = ['home', 'cctv', 'packages', 'process', 'faq', 'testimonials', 'projects', 'contact'];
await fs.mkdir('reports/visual-review-v3', { recursive: true });
for (const width of [390, 1600])
  for (let group = 0; group < 2; group++) {
    const tiles = [];
    const tw = width === 390 ? 390 : 600;
    const th = width === 390 ? 900 : 600;
    for (let j = 0; j < 4; j++) {
      const name = names[group * 4 + j],
        file = `reports/screenshots/${name}-${width}.png`,
        m = await sharp(file).metadata();
      for (let row = 0; row < 3; row++) {
        const height = Math.min(th, m.height),
          top = row === 0 ? 0 : row === 1 ? Math.floor((m.height - height) / 2) : m.height - height;
        const b = await sharp(file)
          .extract({ left: 0, top, width: m.width, height })
          .resize(tw, th, { fit: 'contain', background: '#eeeeee' })
          .toBuffer();
        tiles.push({ input: b, left: j * tw, top: row * th });
      }
    }
    await sharp({ create: { width: tw * 4, height: th * 3, channels: 3, background: '#ddd' } })
      .composite(tiles)
      .png()
      .toFile(`reports/visual-review-v3/${width}-${group}.png`);
  }
