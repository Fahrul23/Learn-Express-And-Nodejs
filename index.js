const express = require('express');

const userRouter = require('./src/router/user');

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/',function(req,res){
    const user ={
        id:1,
        nama:'Fahrul'
    }
    res.json(user);
});

app.use(userRouter)

app.get('/about',function(req,res){
    res.redirect('/users');
})

app.get('/status',function(req,res){
    res.sendStatus(500);
})

app.get('/express',function(req,res){
    res.redirect('https://expressjs.com/');
})


app.delete('/users',function(req,res){
    res.send('Delete User');
})


app.listen(4000,function(){
    console.log('Server Is Okay');
})
