var express = require('express');
var app = express();

console.log('Hello World')

app.get('/',(req,res)=>{
    res.send('response string')
})

app.listen(5000)
    
































 module.exports = app;
