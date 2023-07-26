import express, { Express } from 'express';
import { PrismaClient } from '@prisma/client';

import { alimentos } from './routes';

const app: Express = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use('/', alimentos);

app.listen(8080, () => console.log(`listening 8080`));

export default prisma;
