require('dotenv').config();

import { Clay } from './models';


const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV !== 'test';

const dbInit = () => Promise.all([
    Clay.sync({alter: isDev || isTest}),
]);

export default dbInit;
