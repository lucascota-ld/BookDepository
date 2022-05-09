const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BookSchema = new Schema({
    tittle: {type: String, required:[true], min: 3},
    author: {type: String, required:[true], min: 3},
    category: {type: String, required: [true], min: 3},
    publishingCompany: {type: String},
    status: {
        type: Boolean,
        default: true
        }
});

const books = mongoose.model('books', BookSchema);

module.exports = books;