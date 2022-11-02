'use strict';

const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_DATABASE_URL);

let bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: String, required: true},
  imgURL: {type: String, required: false}
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;
