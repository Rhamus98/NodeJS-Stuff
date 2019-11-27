var express=require("express")
var app=express()

app.use("/index", function(req,res,next){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("ILJBIABHSOL <br>")
    // res.write("<br>")
    next()
})
app.get("/index", function(req,res){
    res.write("123456789")
    res.end()
})

app.listen(8000)