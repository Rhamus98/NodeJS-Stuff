var express=require("express")
var cookieparser=require('cookie-parser')
var app=express()

app.use(cookieparser)
app.get("/", function(req,res){
    res.cookie("color", "blue")
    res.send("Hello my Friends")
})
app.get("/show", function(req,res){
    var color=req.cookies.color
    res.send(color1)
})
app.listen(8000)
