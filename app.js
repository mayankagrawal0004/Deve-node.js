var express = require('express');
var app  = express();
var port = 5000;


app.use(express.static('public'));
app.use(express.static('src/view'));

app.get('/',function(req,res){
res.send("Hello World");    
    
});

app.get('/books',function(req,res){
    
    res.send("Hello books");
});
app.listen(port,function(){
    
    console.log("listing to port neumber" + port);
});