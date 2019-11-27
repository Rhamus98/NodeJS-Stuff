var express=require("express")
var app=express()

app.get("/", function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    for(var i=1; i<=10; i++){
        res.write(`<a href='/selectRange/${i}'> The ${i} Times Table </a>`)
        res.write("<br>")
    }
})
function TimesTable(t, k, response){
    response.write("Times table of " + t)
    response.write("<br>")
    for(j=1; j<=k; j++){
        response.write(t +"X"+j +"="+(j*t))
        response.write("<br>")
    }
    response.end()
}
app.get("/selectRange/:i", function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("Select Range: <br>")
    var table=req.params.i
    for(k=10; k<=100; k+=10){
        res.write(`<a href='/generateTimesTable/${table}/${k}'> ${k} </a>`)
        res.write("<br>")
    }
res.end()

})
app.get("/generateTimesTable/:t/:k", function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    var table=req.params.t
    var table1=req.params.k
    TimesTable(table, table1, res)
})
app.listen(8000)