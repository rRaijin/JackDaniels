import { Router } from 'express';

import claysRouter from './clay';


const router = Router();


router.use('/clays', claysRouter);

export default router;
