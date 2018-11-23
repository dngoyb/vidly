
const mongoose = require('mongoose')
const Joi = require('joi');
const express = require('express');
const genres = require('./routes/genres')
const customers = require('./routes/customers')
const app = express();

mongoose.connect('mongodb://localhost/vidly')
 .then(() => console.log("Successfully conected to MongoDB..."))
 .catch(err => console.log("Could not connect to MongoDB", err))



app.use(express.json());
app.use('/api/genres', genres)
app.use('/api/customers', customers)

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

const port = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(`listening on port ${port}`)
})