import { Router, Request, Response } from 'express';

import * as controller from '../controllers/clay';
import { CreateClayDTO, UpdateClayDTO, FilterClaysDTO } from '../dto/clay';


const router = Router();


router.get(':/id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await controller.getById(id);

    return res.status(200).send(result);
});

router.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const payload: UpdateClayDTO = req.body;
    const result = await controller.update(id, payload);

    return res.status(201).send(result);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await controller.deleteById(id);

    return res.status(204).send({
        success: result
    });
});

router.post('/', async (req: Request, res: Response) => {
    const payload: CreateClayDTO = req.body;
    console.log('payload: ', payload);
    const result = await controller.create(payload);

    return res.status(200).send(result);
});

router.get('/', async (req: Request, res: Response) => {
    const filters: FilterClaysDTO = req.query;
    const results = await controller.getAll(filters);

    return res.status(200).send(results);
});

export default router;
