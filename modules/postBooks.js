const Book = require('../models/Book.js');

const postBooks = async (request, response, next) => {

  console.log(request.body);

  let {title, description, status} = request.body;
  if (!title || !description || !status){
    next ('Request Failed');
  }

  try {
    let book = new Book ({
      title,
      description,
      status
    });

    book.save()
      .then(results => {
        response.send(results);
      });
  } catch (error) {
    next(error);
  }
};

module.exports = postBooks;