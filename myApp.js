var express = require('express');
var app = express();
var bodyParser=require("body-parser")
console.log('Hello World')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.get(
    "/now",
    (req, res, next) => {
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      res.send({
        time: req.time
      });
    }
  );

app.get(
    "/string",
(req,res,next)=>{
    req.string='String'
    req.date=new Date().toString()
    next();
},
(req,res)=>{
    res.send({
        string: req.string,
        date: req.date
    })
})


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})
app.get('/json',(req,res)=>{
    if(process.env.MESSAGE_STYLE==="uppercase"){
        res.json(res.json({"message": "HELLO JSON"}))
    }else{
    res.json({"message": "Hello json"})
    }
})
app.route('/name')
.post((req,res)=>{
    res.send(req.body)
    
 
})
.get((req,res)=>{
    res.send(req.query)
    res.json(
        {'first name': req.query.firstname,
        "last name":req.query.lastname
    }
    )
})

app.get('/echo/:word/:bool',(req,res,next)=>{
        req.date=new Date().toString()
        req.text="This is from a middleware"
        next()
},
(req,res)=>{
    res.json({"echo":req.params.word,
            "bool":req.params.bool,
            "date":req.date,
            "text": req.text})
})

app.listen(5000)
    
































 module.exports = app;
