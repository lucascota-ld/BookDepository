const books = require('../models/book')

exports.teste = function (req, res) {
    res.send('Olá! Teste ao Controller')
  };

exports.details = function(req, res){
    res.send({type: 'GET'})
  };

exports.add = function(req, res){
    res.send({type: 'POST'})
  };

exports.update = function(req, res){
    res.send({type: 'PUT'})
  };
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