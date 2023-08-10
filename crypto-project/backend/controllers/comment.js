//Require modules
const express = require('express')
//Router allows us to handle routing outside of server.js
const router = express.Router()


//Require the db connection, and models
const db = require('../models')


//Routes
//Index Route (GET/Read): Will display all article comments
router.get('/:articleId', function (req, res) {
    db.Comment.find({ articleId: req.params.articleId })
        .then(comments => res.json(comments))
})


//Create Route (POST/Create): This route receives the POST request sent from the new route
//creates a new comment document using the request body
router.post('/', (req, res) => {
    db.Comment.create(req.body)
        .then(comment => res.json(comment))
})


//Update Route (PUT/Update): This route receives a PUT request and
//edits the specified comment document using the request body
router.put('/:id', (req, res) => {
    db.Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(comment => res.json(comment))
})


//Destroy Route (DELETE/Delete): This route deletes a comment document using the 
//URL parameter (which will always be the comment document's ID)
router.delete('/:id', (req, res) => {
    db.Comment.findByIdAndRemove(req.params.id)
        .then(() => res.json({deletedCommentId: req.params.id}))
})


//Export these routes so that they are accessible in 'server.js'
module.exports=router