const { Router } = require('express');
const { getAllTodos, createTodos, updateTodo } = require('../services/todo');

const todoRouter = Router();

// get the data
todoRouter.get('/', (req, res) => {
  const { limit = 10, skip = 0 } = req.query;

  const data = getAllTodos(limit, skip);
  res.status(200).send(data);
});

// create
todoRouter.post('/', (req, res) => {
  console.log(req.body.todo);

  const data = createTodos(req.body.todo);

  res.status(201).send(data);
});

// update
todoRouter.put('/:id', (req, res) => {
  let id = req.params.id;
  if (typeof id !== 'number') {
    id = parseInt(id);
    if (isNaN(id)) {
      throw new Error('Id can only a valid integer');
    }
  }

  const data = updateTodo(id, req.body);

  res.status(200).send(data);
});

// delete api

module.exports = { todoRouter };

// https://dummyjson.com/todos?limit=10&skip=10
