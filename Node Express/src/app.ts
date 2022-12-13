import express, { Request, Response, NextFunction } from 'express';

import toDoRoutes from './routes/toDo';

const app = express();

app.use(express.json());

app.use('/toDo', toDoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000);