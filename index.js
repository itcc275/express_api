// const express = require('express');  recomended for node but we can use import as well
import express from 'express'; // to use import we have to add "type": "module" in package.json
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})