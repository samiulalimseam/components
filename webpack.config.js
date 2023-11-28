// webpack.config.js
import { resolve } from 'path';

export const mode = 'production';
export const entry = './src/index.js';
export const output = {
    filename: 'bundle.js',
    path: resolve('/', 'dist'),
};
