const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ypme9qn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const projectCollection = client.db('kazi-omar-faruque-portfolio').collection('myProjects');

        app.get('/projects', async (req, res) => {
            const query = {};
            const allProjects = await projectCollection.find(query).toArray();
            res.send(allProjects);
        })
    }
    finally {

    }
}
run().catch(console.log);

app.get('/', async (req, res) => {
    res.send('Kazi Omar Faruque Portfolio Server Is Running');
})

app.listen(port, () => console.log(`Kazi Omar Faruque Portfolio Server Is Running on ${port}`))
