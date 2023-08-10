//Require modules
require('dotenv').config()
const express = require('express');
const cors = require ('cors')
const path = require ('path')


//require the db connection and models
const db = require('./models')


//Require the routes in the controllers folder
const commentsCtrl = require('./controllers/comment')


//Create the Express app
const app = express()


//Middleware (app.use)
// cross origin allowance
app.use(cors())
//body parser - used for POST/PU/PATCH routes:
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//Mount routes
//This tells our app to look at the 'controllers/comments.js' file
//To handle all routes that begin with 'localhost:3000/api/comments'
app.use('/api/comments', commentsCtrl)


/* Tell the app to listen on the specified port
---------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});