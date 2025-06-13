import express from 'express'
import bodyParser from 'body-parser'

const PORT = 4000

const app = express()

app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
    // Extract the payload from the request body
    const payload = req.body

    // Log the received payload (you might want to process it into a database or perform some action)
    console.log('Received webhook payload:', payload)

    // opttionally send a response back to the sender
    // This is important to acknowledge receipt of the webhook
    res.status(200).send('Webhook received successfully')
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})