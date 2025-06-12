const client = require('./client');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/', (req, res) => {
    client.getAll(null, (err, data) => {
        if (!err) {
            res.send(data.customers);
        }
    })
});

app.post('/create', (req, res) => {
    let customer = req.body;
    client.insert(customer, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.status(500).send({ error: 'Failed to create customer' });
        }
    });
})

app.post('/update', (req, res) => {
    let customer = req.body;
    client.update(customer, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.status(500).send({ error: 'Failed to update customer' });
        }
    });
})

app.post('/delete', (req, res) => {
    let customer = req.body;
    client.delete(customer, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.status(500).send({ error: 'Failed to delete customer' });
        }
    });
}
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);