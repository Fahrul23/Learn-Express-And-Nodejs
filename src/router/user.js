const express = require('express');
const router = express.Router();

router.route('/user')
.get(function(req,res){
    res.send('Get User')
})
.post(function(req,res){
    res.send('Post User')
})

router.post('/users',function(req,res){
 res.send('Post User');
})

router.put('/users/:userId/books/:booksId',function(req,res){
 const id = req.params
 res.send(id);
})

module.exports= router;