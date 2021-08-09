const express = require('express');
const app = express();
var port = process.env.PORT || 8081;
app.use(express.urlencoded({extended: false}))
const cors = require('cors');
app.use(cors());
app.listen(port)
console.log("SWJ Project backend is running on port " + port);
const MongoClient = require('mongodb').MongoClient;
const mongourl = "mongodb+srv://research:4w0fP2dv8hLJNgjg@cca-krishnamoorthyvenkb.yw7nj.mongodb.net/project-moon?retryWrites=true&w=majority"
const dbClient = new MongoClient (mongourl, {useNewUrlParser: true, useUnifiedTopology: true});

dbClient.connect(err => {
  if (err) throw err;
  console.log("Connected to the MongoDB cluster");
});

let fields = {
  _id: false,
  Surname: true,
  first_name: true,
  pen_name: true,
};

app.get('/search/:Surname', function (req, res) {
  console.log("Debug: /search/:Surname route is handling the request");
  const db = dbClient.db();
  let surnameRegEx = new RegExp(req.params.Surname, 'i');
  let first_nameRegEx = new RegExp(req.params.first_name, 'i');
  let pen_nameRegEx = new RegExp(req.params.pen_name, 'i');
  const cursor = db.collection("authors").find({
    $or:[{Surname:surnameRegEx}, {first_name:first_nameRegEx}, {pen_name:pen_nameRegEx}]
  }).project(fields);
  cursor.toArray(function(err, results){
    console.log(results);
    res.send(results);
  });
});
