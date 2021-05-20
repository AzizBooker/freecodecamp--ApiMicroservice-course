var express = require('express');
var app = express();

console.log('Hello World')

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})
app.get('/json',(req,res)=>{
    res.json({"message": "Hello json"})
})
app.post('/name',(req,res)=>{
    res.send('name')
})
app.listen(5000)
    
































 module.exports = app;
