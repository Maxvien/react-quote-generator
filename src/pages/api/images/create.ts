import type { NextApiRequest, NextApiResponse } from 'next';
import { ImageService } from '@app/backend/services/image.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const image = await ImageService.create(req.body);
  res.status(200).send(image);
}
