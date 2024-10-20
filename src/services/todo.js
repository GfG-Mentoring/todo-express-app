const todosData = require('../libs/dummyData.json');
const path = require('path');
const fs = require('fs');

const getAllTodos = (limit, skip) => {
  const todosList = todosData.splice(skip, limit);
  return todosList;
};

const createTodos = (todo) => {
  const newTodo = {
    todo,
    id: todosData.length + 20,
    userId: parseInt(Math.random() * 1000),
    completed: false,
  };

  todosData.push(newTodo);

  console.log(__dirname);
  const databaseFilePath = path.join(__dirname, '../libs/dummyData.json');
  fs.writeFileSync(databaseFilePath, JSON.stringify(todosData));

  return newTodo;
};

const updateTodo = (id, todoData) => {
  // update todo
  const index = todosData.findIndex((todo) => todo.id === id);
  //   index is less than 0 means todo is not there.
  if (index < 0) {
    throw new Error('Todo with id: ' + id + ' not found.');
  }

  todosData[index] = {
    ...todosData[index],
    ...todoData,
  };

  const databaseFilePath = path.join(__dirname, '../libs/dummyData.json');
  fs.writeFileSync(databaseFilePath, JSON.stringify(todosData));

  return todosData[index];
};

module.exports = { getAllTodos, createTodos, updateTodo };
