const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const courseRoute = require('./routes/course.route');
/* const Joi = require('joi'); */


//body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/courses', courseRoute);

//connecting to DB
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database.', err);
})

//port
app.listen(3000, () => {
    console.log('listening on 3000')
  })
