import path from 'path';
import Jimp from 'jimp';
import text2png from 'text2png';

export namespace ImageService {
  interface CreateQuoteInput {
    text: string;
    color: string;
  }

  export async function createQuote(input: CreateQuoteInput) {
    const textImage = text2png(input.text, {
      font: '200px Lato',
      color: input.color,
      backgroundColor: 'black',
      localFontPath: path.join(process.env.PWD, 'src/backend/assets/Lato-BoldItalic.ttf'),
      localFontName: 'Lato',
      textAlign: 'center',
      padding: 1000,
      lineSpacing: 10,
    });

    const image = await Jimp.read(textImage);

    return image.cover(1000, 500).getBufferAsync(Jimp.MIME_PNG);
  }
}
