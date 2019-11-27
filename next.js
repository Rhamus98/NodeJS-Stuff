var express=require("express")
var app=express()

app.get("/div/:no1/:no2", function(req, res, next){
    res.writeHead(200,{"content-type":"text/html"})
    var no1=parseInt(req.params.no1)
    var no2=parseInt(req.params.no2)
    if(no2==0){
        next()
    }
    else{
        result=no1/no2
        res.write("Result is: "+result)
        res.end()
    }
    
    
},function(req,res){
    console.log("Second number must not be a zero")
})
app.listen(8000)