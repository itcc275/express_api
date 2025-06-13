import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = 4000

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')

    let count = 0
    const intervalId = setInterval(() => {
        count++
        res.write(`data: ${count}\n\n`)
        // if (count >= 10) {
        //     clearInterval(intervalId)
        //     res.end()
        // }
    }, 5000)

    req.on('close', () => {
        clearInterval(intervalId)
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})