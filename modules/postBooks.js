const Book = require('../models/Book.js');

const postBooks = async (request, response, next) => {

  console.log(request.body);

  let {title, description, status, imgURL} = request.body;
  if (!title || !description || !status){
    next ('Request Failed');
  }

  try {
    let book = new Book ({
      title,
      description,
      status,
      imgURL
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