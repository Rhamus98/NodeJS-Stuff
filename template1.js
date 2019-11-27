var express=require("express")
var app=express()
app.set('view engine','ejs')

app.get("/", function(req,res){
    res.render('index.ejs', {
        'regno':24,
        'name': "Max",
        'phy':45,
        'che':89,
        'mat':90
    })
})
app.listen(8000)