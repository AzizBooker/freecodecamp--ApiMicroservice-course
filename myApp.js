var express = require('express');
var app = express();

console.log('Hello World')
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
app.post('/name',(req,res)=>{
    res.send(req)
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
app.get('/name?first=firstname&last=lastname',(req,res)=>{

})
app.listen(5000)
    
































 module.exports = app;
