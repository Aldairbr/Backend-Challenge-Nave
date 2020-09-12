import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

export const { DATABASE } = process.env;
export const PORT = process.env.PORT || 3333;
export const { PASSWORD } = process.env;
