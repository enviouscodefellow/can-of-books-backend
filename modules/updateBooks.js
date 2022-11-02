const Book = require('../models/Book');

const updateBooks = async (request, response, next) => {

  try {
    let id = request.params.id;
    let updatedBook = await Book.findOneAndReplace({_id: id}, request.body);
    response.send(updatedBook);
  } catch (error) {
    next (error);
  }

};

module.exports = updateBooks;