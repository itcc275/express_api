// const express = require('express');  recomended for node but we can use import as well
import express from 'express'; // to use import we have to add "type": "module" in package.json
import bodyParser from 'body-parser';

const app = express();

const PORT = 5111

app.use(bodyParser.json()); // to parse JSON bodies


const todos = [
    { id: 1, task: 'Learn Node.js', completed: false },
    { id: 2, task: 'Build a REST API', completed: false }
];

app.all('/', (req, res) => {
    // console.log(req);
    // console.log(res);
    res.send('Hello World!');
})

// CREATE

app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({
        message: 'Todo added successfully',
    })
})

// READ


app.get('/todos', (req, res) => {
    res.json(todos);
})

// UPDATE

app.put('/todos/:id', (req, res) => {
    const paramsId = req.params.id
    const updatedTodo = req.body;

    const toDoIndex = todos.findIndex((todo) => {
        return todo.id === Number(paramsId);
    })

    console.log(toDoIndex);


    if (toDoIndex !== -1) {
        todos[toDoIndex] = {
            id: paramsId,
            ...updatedTodo
        }
    }

    res.json({
        message: 'Todo updated successfully',
    })
})

// DELETE

app.delete('/todos/:id', (req, res) => {
    const paramsId = Number(req.params.id);
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === paramsId;
    })


    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1)
    }

    res.json({
        message: 'Todo deleted successfully',
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})