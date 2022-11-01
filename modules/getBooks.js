const Book = require('../models/Book.js');

const getBooks = async (request, response, next) => {
  try {
    let searchResult = await Book.find();
    response.status(200).send(searchResult);
  } catch (error) {
    next(error);
  }
};

module.exports = getBooks;