const books = require('../models/book')


//GET BOOKS
exports.details = (function(req, res){
      books.find({}).then(function(books){
        res.send(books)
      })
});



//UPDATE BOOK
exports.update =(function(req, res, next){
  books.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    books.findOne({_id: req.params.id}).then(function(book){
      res.send(book)
      console.log('update book')
    });
  }).catch(next);
});

//DELETE A BOOK 
exports.delete =(function(req, res, next) {
  books.findByIdAndDelete(req.params.id)
  .then (function(books){
    res.send(books);
    console.log('successfully deleted by id')
  }).catch(next);
});

//ADD NEW BOOK
exports.create = function(req, res, next){
  books.create(req.body).then(function(books){
    res.send(books); 
    console.log('create new book');
  })
};