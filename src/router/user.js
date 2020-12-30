const { response } = require('express');
const express = require('express');
const router = express.Router();
const app=express();


let users= [
    {
        id:1,
        name:"fahrul ihsan",
        email:"fahrul@gmail.com"
    },
    {
        id:2,
        name:"Dody Firmansyah",
        email:"dody67@gmail.com"
    },
]

router.route('/user')
    .get(function(req,res){
        res.json(users)
    })
    .post(function(req,res){
        users.push(req.body);
        res.send(users);
    })


router.put('/users/:id',function(req,res){
    const id = req.params.id
    users.filter(user =>{
        if(user.id == id){
            user.id = id
            user.name = req.body.name
            user.email=req.body.email

            return user
        }
    })
    res.json(users);
})

router.delete('/users/:UserId',function(req,res){
    let id = req.params.UserId;
    user = users.filter(user => user.id != id )
    res.send(user);
})


module.exports= router;