const express = require('express');

const userRouter = require('./src/router/user');

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var myLogger = function(req,res,next){
   req.time= new Date();
    next();
}

app.use(myLogger);

app.set('view engine', 'ejs')

app.use('/assets',express.static('public'));

app.get('/',function(req,res){
    const user ={
        id:1,
        nama:'Fahrul',
        data:req.time.toString()
    }
    res.render('pages/index', {user:user})
});

app.use(userRouter)

app.get('/about',function(req,res){
    res.render('pages/about');
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
