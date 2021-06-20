import fs from 'fs';
import path from 'path';
import Jimp from 'jimp';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const filename = req.query.pid as string;
  const filepath = path.join(process.env.PWD, 'src/backend/assets/images', filename);

  res.setHeader('Content-Type', Jimp.MIME_PNG);

  res.status(200).send(fs.readFileSync(filepath));
}
