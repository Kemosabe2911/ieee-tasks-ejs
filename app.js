const express= require('express');
const expressLayouts= require('express-ejs-layouts');
const mongoose= require('mongoose');


const app= express();
/*
//MongoBD Config
const db= require('./config/keys').MongoURI;

//Connect to MongDB
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected MongoDB'))
.catch(err => console.log(err));
*/

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Kemosabe2911:Stevin@123@tasks-cwohk.mongodb.net/Task?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Mongo Error');
  // perform actions on the collection object
  client.close();
});

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//BodyParser
app.use(express.urlencoded({extended: false}));


//Routes
app.use('/',require('./routes/index'));
app.use('/tasks',require('./routes/tasks'));

const PORT= process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running at ${PORT}`));