const express =require('express');

var app =express();

app.listen(4400,function(){
    console.log("your server started");
})
app.get("/",function(,rreqes){
    res.sendFile(__dirname+"/index.html");
})
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
    var weight = Number(req.body.weight1);
    var height = Number(req.body.height1);
    var result = Math.round(weight/height);
    if (result<10){
        res.send("your bmi is in normal"+" "+result);
    }
    else if(result<30){
        res.send("your bmi is in high condition please check"+" "+result);
    }
})