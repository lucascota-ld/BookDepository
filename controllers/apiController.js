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
exports.delete = function(req, res, next) {
  books.findByIdAndRemove({_id: req.params.id})
  .then (function(books){
    res.send(books);
  }).catch(next);
};

//ADD NEW BOOK
exports.create = function(req, res, next){
  books.create(req.body).then(function(books){
    res.send(books); 
  })
};