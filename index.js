// const express = require('express');  recomended for node but we can use import as well
import express from 'express'; // to use import we have to add "type": "module" in package.json
import path from 'path'; // if using import, you can also use this
import { fileURLToPath } from 'url'; // if using import, you can also use this

// __dirname is not available in ES modules, so we need to create it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const PORT = 5111

app.all('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})