import path from 'path';
import Jimp from 'jimp';
import text2png from 'text2png';
import { v4 as uuidv4 } from 'uuid';
import findRemoveSync from 'find-remove';
import { ApiInterface } from '@app/shared/interfaces/api.interface';

export namespace ImageService {
  export async function create({ text, color }: ApiInterface.Image.Input): Promise<ApiInterface.Image.Output> {
    const hue = Math.round(color.hue);
    const saturation = Math.round(color.saturation * 100);
    const lightness = Math.round(color.brightness * 100);
    const alpha = color.alpha.toFixed(1);

    const textImage = text2png(text, {
      font: '200px Lato',
      color: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`,
      backgroundColor: 'black',
      localFontPath: path.join(process.env.PWD, 'src/backend/assets/fonts/Lato-BoldItalic.ttf'),
      localFontName: 'Lato',
      textAlign: 'center',
      padding: 1000,
      lineSpacing: 10,
    });

    const image = await Jimp.read(textImage);

    const filename = `${uuidv4()}.png`;
    const uploads = path.join(process.env.PWD, 'src/backend/assets/images');

    await image.cover(1000, 500).writeAsync(path.join(uploads, filename));

    // Delete image cache after 10 minutes
    findRemoveSync(uploads, { extensions: ['.png'], age: { seconds: 600 } });

    return `/api/images/${filename}`;
  }
}
