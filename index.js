const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('Hello Word');
});

app.get('/about',function(req,res){
    res.send('Halaman About');
})


app.listen(4000,function(){
    console.log('Server Is Okay');
})
