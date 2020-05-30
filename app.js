const express= require('express');
const expressLayouts= require('express-ejs-layouts');
const mongoose= require('mongoose');


const app= express();

//MongoBD Config
const db= require('./config/keys').MongoURI;

//Connect to MongDB
/*mongoose.connect(db,{ useNewUrlParser: true})
.then(() => console.log('Connected MongoDB'))
.catch(err => console.log(err));*/

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