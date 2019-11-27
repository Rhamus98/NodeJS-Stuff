var express=require("express")
var app=express()
var cookieparser=require('cookie-parser')

app.use(cookieparser())

app.get("/", function(req,res){
 //   res.writeHead(200,{"content-type":"text/html"})
    for(var i=1; i<=10; i++){
        res.write(`<a href='http://localhost:9000/lowerRange/${i}'> The ${i} Times Table </a>`)
        res.write("<br>")
    }
    res.end()
})

app.get("/lowerRange/:i?", function(req,res){
    if(req.params.i==null || req.cookies.table==null){
        res.redirect("http://localhost:9000")
    }
    else{
        var table=req.params.i
        res.cookie("table", table)
        res.writeHead(200,{"content-type":"text/html"})
        res.write("Select Lower Range: <br>")
        for(var k=10; k<=100; k+=10){
            res.write(`<a href='/upperRange/${k}'> ${k} </a>`)
            res.write("<br>")
      }
      res.end();
    }
    
})
app.get("/upperRange/:i?", function(req,res){
    var lower=req.params.i
    if (req.cookies.table == null){
        res.redirect("http://localhost:9000")
    }
    if(req.params.i==null){
        res.redirect("http://localhost:9000/lowerRange")
    }
    else{
        res.cookie("lower", lower)
        res.writeHead(200,{"content-type":"text/html"})
        res.write("Select Upper Range: <br>")
        for(k=parseInt(lower)+10; k<=1000; k+=10){
            res.write(`<a href='/timestable/${k}'> ${k} </a>`)
            res.write("<br>")
        }
    }
    res.end(); 
})
app.get("/timestable/:i", function(req,res){
    var upper=req.params.i
    var table=req.cookies.table
    var lower=req.cookies.lower
    res.writeHead(200,{"content-type":"text/html"})
    res.write("Select Upper Range: <br>")
    for(j=parseInt(lower); j<=parseInt(upper); j++){
        res.write(table +"X"+j +"="+(j*table))
        res.write("<br>")
    }
    res.end(); 
})

app.listen(9000)