const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('Hello Word');
});

app.get('/about',function(req,res){
    res.send('Halaman About');
})

app.get('/users',function(req,res){
    res.send('Get User');
})

app.post('/users',function(req,res){
    res.send('Post User');
})

app.put('/users',function(req,res){
    res.send('Put User');
})

app.delete('/users',function(req,res){
    res.send('Delete User');
})


app.listen(4000,function(){
    console.log('Server Is Okay');
})
