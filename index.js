// const express = require('express');  recomended for node but we can use import as well
import express from 'express'; // to use import we have to add "type": "module" in package.json

const app = express();

const PORT = 5111

app.all('/', (req, res) => {
    console.log(req);
    console.log(res);
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})