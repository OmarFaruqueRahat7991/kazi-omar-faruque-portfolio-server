const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Kazi Omar Faruque Portfolio Server Is Running');
})

app.listen(port, () => console.log(`Kazi Omar Faruque Portfolio Server Is Running on ${port}`))
