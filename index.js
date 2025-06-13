import express from 'express'
import path, { join } from 'path'
import { fileURLToPath } from 'url'
import { createServer } from 'http'
import { Server } from 'socket.io'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = 4000

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => { // connection event
    console.log("connection established")
    socket.on('chat message', (msg) => { // listen for 'chat message' events here 'chat message' is the custom event
        console.log(`Message received: ${msg}`) // log the message to the console
        io.emit('chat message', msg) // broadcast the message to all connected clients
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})