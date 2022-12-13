import { Router } from 'express';

import { getAllToDos, createToDo, updateToDo, deleteToDo } from '../controllers/toDo';

const route = Router();

route.get('/', getAllToDos);

route.post('/', createToDo);

route.patch('/:id', updateToDo);

route.delete('/:id', deleteToDo);

export default route;
