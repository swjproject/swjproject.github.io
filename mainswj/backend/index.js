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
  leadership_position: true,
};

app.get('/search/:Surname/:first_name/:pen_name', function (req, res) {
  console.log("Debug: /search/:Surname route is handling the request");
  const db = dbClient.db();
  let surnameRegEx = new RegExp(req.params.Surname);
  let first_nameRegEx = new RegExp(req.params.first_name);
  let pen_nameRegEx = new RegExp(req.params.pen_name);
  console.log(surnameRegEx + first_nameRegEx + pen_nameRegEx)
  const cursor = db.collection("authors").find({
    $or:[{Surname:surnameRegEx}, {first_name:first_nameRegEx}, {pen_name:pen_nameRegEx}]
  }).project(fields).limit(5);
  cursor.toArray(function(err, results){
    console.log(results);
    res.send(results);
  });
});

app.get('/lpsearch/:leadership_position', function (req, res) {
  console.log("Debug: /lpsearch/:leadership_position route is handling the request");
  const db = dbClient.db();
  let lpRegEx = new RegExp(req.params.leadership_position);
  console.log(lpRegEx)
  const cursor = db.collection("authors").find({leadership_position:lpRegEx}).project(fields).limit(5);
  cursor.toArray(function(err, results){
    console.log(results);
    res.send(results);
  });
});
