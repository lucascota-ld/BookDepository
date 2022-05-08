const express = require('express');
const app = express();
const router = require('./router')
const { MongoClient } = require('mongodb');

//READ URL
app.use( express.urlencoded ({
    extended: true
}));


app.use(express.json());
app.use('/', router);





MongoClient.connect('mongodb+srv://Lucas:32459440@cluster0.qero8.mongodb.net/books-depository?retryWrites=true&w=majority',
{useUnifiedTopology: true},
(error, connection)=>{
  if(error)return console.log(error);
  global.connection = connection.db('books-depository');
  app.listen(3000);
  console.log('connected');  
})



     


 
 


