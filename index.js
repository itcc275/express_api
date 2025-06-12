import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = 4000

const app = express()

const result = {
    value: 'Hello, World!'
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const queue = []

app.get('/getValue', (req, res) => {
    if (req.query.lastValue !== result.value) {
        res.json(result)
    } else {
        queue.push(res)
    }
})

app.get('/updateValue', (req, res) => {
    result.value = req.query.value
    res.json(result)
    queue.forEach((response) => {
        response.json(result)
    })
    queue.length = 0 // Clear the queue after sending responses
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})