const express = require('express');
const { todoRouter } = require('./src/controllers/todo');
const app = express();

const port = 8000;

// adding body parser
app.use(express.json());

app.use('/todo', todoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
