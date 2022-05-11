const express = require('express');
const app = express();
const routers = require('./routers/apiRouter')
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')


//READ URL
app.use( express.urlencoded ({
    extended: true
}));


app.use(express.json());
app.use(bodyParser.json())

app.use('/books', routers)






//CONNECTION MONGODB ATLAS
mongoose 
 .connect('mongodb+srv://<yournamecluster:<yourpassword>@cluster0.qero8.mongodb.net/<myfirstdatabase?>?retryWrites=true&w=majority',   process.env.MONGO_PROD_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"), app.listen(3000))
 .catch(err => console.log(err));



 


     


 
 


