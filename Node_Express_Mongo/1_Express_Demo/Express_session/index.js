const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const route = require('./routes/app.route');
const uuid = require('uuid')
const session = require('express-session')
const logger = require('./common/logger');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({
  genid: (request) => {
    logger.log(request.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


app.use('/app',route);

mongoose.connect(dbConfig.url,dbConfig.options)
        .then((c) => {
            console.log("Successfully connected to the database");  
          })
          .catch(error => {
            console.log('Could not connect to the database.', err)
          })


app.listen(3000, () => {
    console.log('listening on 3000')
  })

