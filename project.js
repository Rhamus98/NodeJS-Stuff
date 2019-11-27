var express=require("express")
var app=express()
var bodyparser=require("body-parser")
var dbf=require("./dbConnection")
var con=dbf()
 
app.set('view engine','ejs')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))



app.get("/", function(req,res){
    res.write(`<button onclick="window.location.href='/login'"> Login </button>`)
    res.write(`<button onclick="window.location.href='/createuser'"> Create User </button>`)
    res.end()
})
app.get("/login", function(req,res){
    res.render("login.ejs")
})
app.get("/createuser", function(req,res){
    res.render("createuser.ejs")
})
app.post("/login", function(req,res){
    var username=req.body.username
    var password=req.body.password
    var query=`select * from users where username='${username}' and password='${password}'`
    con.query(query,function(error,result,fields){
        if(error){
            console.log(error)
        }
        else{
            if(result.length>0){
                 var query1=`select * from personal`
                 con.query(query1, function(error, results, fields){
                    if(error){
                        console.log(error) 
                    }
                    else{
                     res.render("showrecords.ejs",{
                        'results': results,
                     })
                    }
                 })
             }
             else{
                 res.render("createuser.ejs")
             }
        }
    })
})
app.post("/createuser", function(req,res){
    var username=req.body.username
    var password=req.body.password
    var name=req.body.name
    var role=req.body.role
    var query=`insert into users values(${role},'${username}','${name}','${password}')`
    con.query(query,function(error,result,fields){
        if(error){
            console.log(error)
        }
        else{
            res.redirect("/")
        }

    })
})

app.listen(8000)