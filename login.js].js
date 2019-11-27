var express=require("express")
var app=express()
var cookieparser=("cookie-parser")
var session=require("express-session")

app.use(cookieparser())
app.use(session({secret: "Shh. it's a secret"}))

app.use("/", function(req,res){
    console.log("abc")
    req.session.user="MaxyHand"
    req.session.user="abc"
    res.send("Session Created")
})
app.get("/show", function(req,res){
    res.send("username: "+req.session.user)
})
app.listen(8000)