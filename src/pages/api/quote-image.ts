import type { NextApiRequest, NextApiResponse } from 'next';
import { ImageService } from '@app/backend/services/image.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const image = await ImageService.createQuote({
    text: req.query.text as string,
    color: req.query.color as string,
  });

  res.status(200).send(image);
}
