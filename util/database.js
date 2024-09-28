const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://goldcoinjatin12:2qliDe2OdBrG9aL1@cluster0.nel1l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then((client) => {
      console.log('connected')
      callback(client)
    })
    .catch(err => {
      console.log(err)
    })
}


module.exports = mongoConnect