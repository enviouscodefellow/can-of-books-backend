'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const getBooks = require('./modules/getBooks.js');
const postBooks = require('./modules/postBooks.js');
const deleteBooks = require('./modules/deleteBooks.js');
const updateBooks = require('./modules/updateBooks.js');

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_DATABASE_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(`Mongoose is now connected`);
})

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/books', getBooks);

app.post('/books', postBooks);

app.delete('/books/:id', deleteBooks);

app.put('/books/:id', updateBooks);

app.get('/', (request, response) => {
  response.status(200).send(`Welcome to the jungle baby.`)
});

app.get('*', (request, response) => {
  response.status(404).send(`These aren't the droids you're looking for.`)
});

//**FOR MODULARITY LATER*/


app.use ((error, request, response, next) =>{
  response.status(500).send(error);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));