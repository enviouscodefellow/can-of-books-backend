const Book = require('../models/Book.js');

const deleteBooks = async (request, response, next) => {
  let bookID = request.params.id;
  try{
    await Book.deleteOne({_id: bookID});
    response.status(200).send('Book Deleted');
  } catch (error){
    response.status(404).send('Deletion Failed');
    next (error);
  }
};

module.exports = deleteBooks;