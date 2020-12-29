const express = require('express');
const router = express.Router();

let users= [
    {
        id:1,
        nama:"fahrul ihsan",
        email:"fahrul@gmail.com"
    },
    {
        id:2,
        nama:"Dody Firmansyah",
        email:"dody67@gmail.com"
    },
]

router.route('/user')
.get(function(req,res){
    res.json(users)
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