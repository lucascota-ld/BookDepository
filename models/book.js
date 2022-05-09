const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
    tittle: String,
    author: String,
    category: String,
    publishingCompany: String
});

module.exports = Book;