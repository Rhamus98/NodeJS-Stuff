var express=require("express")
var app=express()

var FirstGet=function(request,response){
    response.write("Hello")
}
app.get("/first", FirstGet)
app.listen(8000)