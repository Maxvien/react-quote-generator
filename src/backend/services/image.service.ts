import path from 'path';
import Jimp from 'jimp';
import text2png from 'text2png';
import { v4 as uuidv4 } from 'uuid';
import { QuoteImageInput, QuoteImageOutput } from '@app/shared/interfaces/api.interface';

export namespace ImageService {
  export async function createQuote({ text, color }: QuoteImageInput): Promise<QuoteImageOutput> {
    const textImage = text2png(text, {
      font: '200px Lato',
      color: `hsla(${color.hue}, ${color.saturation * 100}%, ${color.brightness * 100}%, ${color.alpha})`,
      backgroundColor: 'black',
      localFontPath: path.join(process.env.PWD, 'src/backend/assets/Lato-BoldItalic.ttf'),
      localFontName: 'Lato',
      textAlign: 'center',
      padding: 1000,
      lineSpacing: 20,
    });

    const image = await Jimp.read(textImage);

    const imageUrl = `/images/${uuidv4()}.png`;

    await image.cover(1000, 500).writeAsync(path.join(process.env.PWD, 'public', imageUrl));

    return imageUrl;
  }
}
