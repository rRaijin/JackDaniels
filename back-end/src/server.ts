import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import routes from './api/routes';
import dbInit from './db/init';


dbInit();
const PORT = process.env.PORT || 3001;


export const get = () => {
    const app: Application = express();
    var corsOptions = {
        origin: "http://localhost:3000"
    };

    app.use(express.json());
    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: true }));
    
    app.get('/', async(req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({message: `Endpoints available at http://localhost:${PORT}/api/v1`});
    })
    
    app.use('/api/v1', routes);

    return app
}

export const start = () => {
    const app = get()
    try {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
    } catch (error: any) {
        console.log(`Error occurred: ${error.message}`);
    }
}

start();
