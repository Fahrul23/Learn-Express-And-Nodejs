const express = require('express');
const app = express();

app.get('/',function(req,res){
    const user ={
        id:1,
        nama:'Fahrul'
    }
    res.json(user);
});

app.get('/about',function(req,res){
    res.redirect('/users');
})

app.get('/status',function(req,res){
    res.sendStatus(500);
})





app.get('/express',function(req,res){
    res.redirect('https://expressjs.com/');
})

app.get('/users',function(req,res){
    res.send('Get User');
})

app.post('/users',function(req,res){
    res.send('Post User');
})

app.put('/users/:userId/books/:booksId',function(req,res){
    const id = req.params
    res.send(id);
})

app.delete('/users',function(req,res){
    res.send('Delete User');
})


app.listen(4000,function(){
    console.log('Server Is Okay');
})
