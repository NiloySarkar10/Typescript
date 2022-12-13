import { RequestHandler } from 'express';

import { ToDo } from '../models/toDo';

const TODOS: ToDo[] = [];

/**
 * This function is a simple function which is used to fetch all the todos
 * @param req {Request} Express request object
 * @param res {Response} Express response object
 * @param next {NextFunction} Express next function
 */
export const getAllToDos: RequestHandler = (req, res, next) => {
    res.status(200).json({
        todos: [...TODOS]
    });
};

/**
 * Function creates new todo by extracting the text (field) from the body of the request.
 * @param req {Request} Express request object
 * @param res {Response} Express response object
 * @param next {NextFunction} Express next function
 */
export const createToDo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new ToDo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({
        message: 'Todo created successfully',
        createdTodo: newTodo
    });
};

/**
 * Update a particular todo based on the ID passed along with the request params
 * @param req {Request} Express request object
 * @param res {Response} Express response object
 * @param next {NextFunction} Express next function
 */
export const updateToDo: RequestHandler<{id: string}> = (req, res, next) => {
    const toDoId = req.params.id;
    const updatedText = (req.body as {text: string}).text;
    // Finding the todo
    const indexOfToDoToBeUpdated = TODOS.findIndex(todo => todo.id === toDoId);
    if (indexOfToDoToBeUpdated < 0) {
        throw new Error('Could not find the todo to be updated');
    }
    TODOS[indexOfToDoToBeUpdated] = new ToDo(TODOS[indexOfToDoToBeUpdated].id, updatedText);
    res.json({
        message: 'Todo updated successfully',
        updatedTodo: TODOS[indexOfToDoToBeUpdated]
    });
};

/**
 * Delete a particular todo based on the ID passed along with the request params
 * @param req {Request} Express request object
 * @param res {Response} Express response object
 * @param next {NextFunction} Express next function
 */
export const deleteToDo: RequestHandler = (req, res, next) => {
    const toDoId = req.params.id;
    const updatedText = (req.body as {text: string}).text;
    // Finding the todo
    const indexOfToDoToBeUpdated = TODOS.findIndex(todo => todo.id === toDoId);
    if (indexOfToDoToBeUpdated < 0) {
        throw new Error('Could not find the todo to be deleted');
    }
    TODOS.splice(indexOfToDoToBeUpdated, 1);
    res.json({
        message: 'Todo deleted successfully',
    });
};