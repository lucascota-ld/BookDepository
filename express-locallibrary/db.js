const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://LucasCota:<32459440>@cluster0.qero8.mongodb.net/local_library?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  console.log('connected')
});
 module.exports = {}