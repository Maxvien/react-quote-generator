import { EnvService } from '@app/shared/services/env.service';
import axios from 'axios';

let baseURL = '/api';

if (EnvService.isNode()) {
  const port: number = +process.env.PORT | 3000;
  baseURL = `http://localhost:${port}/api`;
}

export const apiService = axios.create({ baseURL });
