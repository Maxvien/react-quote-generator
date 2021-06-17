import axios from 'axios';
import { EnvService } from '@app/shared/services/env.service';

let baseURL = '/api';

if (EnvService.isNode()) {
  const port: number = +process.env.PORT || 3000;
  baseURL = `http://localhost:${port}/api`;
}

export const apiService = axios.create({ baseURL });
