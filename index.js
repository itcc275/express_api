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


app.get('/getValue', (req, res) => {
    res.json(result)
})

app.get('/updateValue', (req, res) => {
    result.value = req.query.value
    res.json(result)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})