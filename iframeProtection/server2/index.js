import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.use(express.static('public'))

// app.use((req, res, next) => {
//     res.setHeader('Content-Security-Policy', "frame-ancestors 'self'");
//     // res.setHeader('X-Frame-Options', 'SAMEORIGIN');
//     next();
// })

app.get('/iframewebsite1', (req, res) => {
    res.sendFile(__dirname + '/public/iframe-website1.html');
})

app.get('/iframewebsite2', (req, res) => {
    res.sendFile(__dirname + '/public/iframe-website2.html');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})